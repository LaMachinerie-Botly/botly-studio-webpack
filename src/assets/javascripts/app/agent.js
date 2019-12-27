/** Create a name space for the application. */
// with ES6 import
import io from 'socket.io-client';

module.exports = function(app) {
    var Agent = {};

    //Serial port
    Agent.lastValidPort = '';

    //Client port
    Agent.port = 8990;
    Agent.websocket = undefined;
    Agent.websocketAdress = undefined;
    Agent.connected = false;
    Agent.clientUrl = 'http://127.0.0.1'

    Agent.targetOS = undefined;

    Agent.uploadScheme = {
        port: "",
        board: "arduino:avr:LilyPadUSB",
        network: false,
        commandline: "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" -v  -patmega32u4 -cavr109 \"-P{serial.port}\" -b57600 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\"",
        filename: "sketch.hex",
        hex: "",
        extra: {
            wait_for_upload_port: true,
            use_1200bps_touch: true
        },
        extrafiles: [],
        signature: "a27f78c607f92e1c168ef755f28172c984c90882697a95010b93cf8487fe959c2f316015b78a47ada68aadd5214721281bdae62e4b735aefbf6178647e0f3e6a31c6e59c4940c2c25cd7c1dcd4c3c331df2d5a33f7e7ef5a35332b0dcd973f5fc008b5d3f78350bbd75d3e1c4110e3afa602817898959eedc357414c02a2668b1970386f84d689d184bd7098842b242d9f76b2251ea487a26b39891ab7a58ea0046a19a57dc303d671233f54a7122535b556be889cf2dc9ea00cab2132948d71aee6823fd0648ac496f493e01f5df14522e25fa5984e79e17771588018801f4eec7e991b97e8e013668d0f0da275e11cbe34893b067edd2c3eb9edd22f157943"
    }

    Agent.neededModules = [
        " bossac 1.7.0 arduino keep",
        " fwupdater latest arduino keep",
        " avrdude 6.3.0-arduino9 arduino"
    ]

    Agent.windowsDriverCmd = " windows-drivers latest arduino keep";
    Agent.macOSDriverCmd = " windows-drivers latest arduino keep";
    Agent.linuxDriverCmd = " windows-drivers latest arduino keep";


    Agent.init = function(cbs) {

        var defaultCBS = {
            success: function() {
                console.log("Connection to agent successful");
            },
            fail: function() {
                console.log("Connection to agent failed");
            }
        };

        if (cbs) {
            if (cbs.fail && cbs.success) {
                Agent.findPort(cbs);
            } else {
                Agent.findPort(defaultCBS);
            }
        } else {
            Agent.findPort(defaultCBS);
        }


    };

    Agent.checkForAgent = function(callbacks) {
        Agent.findPort(callbacks);
    };

    /***************************
     *  Port Scanning routine
     ***************************/

    Agent.handleResponse = function() {
        Agent.connected = true;
        //TODO notify user
    };


    Agent.handleError = function() {
        Agent.connected = false;
        //TODO notify user
    };


    let handlePortResponse = function(data, textStatus, jqXHR, cbs) {
        //console.log("Connection to arduino-create-agent success")
        Agent.websocketAdress = data.ws + '/websocket';
        Agent.connected = true;
        Agent.websocket = io(Agent.websocketAdress);
        Agent.websocket.on('message', Agent.handleSocketAnwser)
        Agent.websocket.on('disconnect', function() {
            Agent.websocket.close();
            Agent.websocket = undefined;
        });
        Agent.installModules(Agent.neededModules);

        if (cbs) {
            cbs.success();
        }

    };

    let handlePortError = function(jqXHR, textStatus, errorThrown, cbs) {
        Agent.connected = false;
        Agent.port++;
        if (Agent.port > 9000) {
            Agent.port = 8990;
            if (cbs) {
                cbs.fail();
            }
            console.log("Error: impossible to connect to arduino-create-agent")
            return
        }
        Agent.findPort(cbs);
    };

    Agent.findPort = function(cbs) {
        Agent.getRequest(cbs);
    };

    Agent.getRequest = function(cbs) {
        return $.ajax({
            url: "http://127.0.0.1:" + Agent.port + "/info",
            type: 'GET',
            cache: false,
            dataType: 'json',
            async: true,
            timeout: 100 // sets timeout to 0.1 seconds
        }).done(function(data, textStatus, jqXHR) {
            console.log('Port ' + Agent.port + ' OK');
            handlePortResponse(data, textStatus, jqXHR, cbs)
        }).fail(function(data, textStatus, jqXHR) {
            console.log('Port ' + Agent.port + ' Fail');
            handlePortError(data, textStatus, jqXHR, cbs)
        });
    };


    // Agent interaction

    Agent.autoSelectPort = function() {
        Agent.listPort()
    };


    Agent.listPort = function() {
        if (Agent.websocket)
            Agent.websocket.emit('command', 'list');
    };

    Agent.installModules = function(array) {
        if (Agent.websocket)
            array.forEach(m => {
                Agent.websocket.emit('command', 'downloadtool' + m);
            });
    }


    let validPID = ['0x9207', '0x9208', '0x1B4F'];
    let isValid = function(PID) {
        var valid = false;
        validPID.forEach(p => {
            if (p == PID) {
                valid = true;
            }
        });
        console.log("Board is a 32u4 based microcontroller");
        return valid;
    }

    Agent.handleSocketAnwser = function(data) {
        var parsedJSON = undefined;
        try {
            parsedJSON = JSON.parse(data)
        } catch (error) {
            return;
        }
        if (parsedJSON.Ports != undefined && Array.isArray(parsedJSON.Ports)) {
            parsedJSON.Ports.forEach(port => {
                if (isValid(port.ProductID)) {
                    Agent.lastValidPort = port;
                    Agent.handleSocketCallback();
                    app.API.onSerialConnected();
                }
            });
        } else if (parsedJSON.OS != undefined && Agent.targetOS == undefined) {
            Agent.targetOS = parsedJSON.OS;
            if (parsedJSON.OS == "windows") {
                Agent.installModules([Agent.windowsDriverCmd]);
            } else if (parsedJSON.OS == "darwin") {
                Agent.installModules([Agent.macOSDriverCmd]);
            } else if (parsedJSON.OS == "linux") {
                Agent.installModules([Agent.linuxDriverCmd]);
            }
        }
    };

    //drawin:amd64
    Agent.handleSocketCallback = function() {}

    Agent.compileCheck = function() {
        Agent.handleSocketCallback = function() {};
    }


    Agent.busy = false;
    Agent.upload = function(hexCode, cbs) {
        console.log(Agent.busy);
        Agent.busy = false;
        Agent.websocket.emit('command', 'killUpload');

        Agent.handleSocketCallback = function() {
            if (!Agent.busy) {

                var payload = Agent.uploadScheme;
                payload.port = Agent.lastValidPort.Name;

                var base64Code = hexToBase64(hexCode);

                Agent.busy = true;
                payload.hex = base64Code;
                var payloadStr = JSON.stringify(payload);
                $.ajax({
                    type: "POST",
                    cache: false,
                    url: Agent.clientUrl + ':' + Agent.port + '/upload',
                    data: payloadStr,
                    success: function(event) { Agent.handleUploadCallback(event, cbs) },
                    complete: function() {
                        Agent.busy = false;
                        Agent.handleSocketCallback = function() {}
                    },
                    timeout: 500,
                    async: false,
                    dataType: "text"
                });
            }
        }
        Agent.autoSelectPort();
    };

    Agent.handleUploadCallback = function(event, cbs) {

        Agent.websocket.emit('command', 'killUpload');
        if (cbs) {
            cbs.success();
        }
    }


    //Cloud compiler

    let successCb = function(data, textStatus, jqXHR, cbs) {
        if (data != 'fail') {
            var hexCode = base64ToHex(data)
            if (cbs) cbs.success(hexCode);
        } else {
            if (cbs) cbs.fail(data, textStatus);
        }
    };

    let failCb = function(data, textStatus, jqXHR, cbs) {
        if (cbs) cbs.fail(data, textStatus);
    };


    function utf8_to_b64(str) {
        return window.btoa(unescape(encodeURIComponent(str)));
    };

    function b64_to_utf8(str) {
        return decodeURIComponent(escape(window.atob(str)));
    };

    Agent.sendCodeCompile = function(codeUTF, cbs) {
        var code = utf8_to_b64(codeUTF);
        //console.log(code);
        //console.log(codeUTF);
        $.ajax({
            type: "POST",
            url: "62.4.16.227:3000/compile",
            data: { data: code },
            success: successCb,
            timeout: 10000,
        }).done(function(data, textStatus, jqXHR) {
            successCb(data, textStatus, jqXHR, cbs)
        }).fail(function(data, textStatus, jqXHR) {
            failCb(data, textStatus, jqXHR, cbs)
        });
    };

    Agent.createElementFromJson = function(json_data) {
        var parsed_json = JSON.parse(json_data);
        var element = null;

        if (parsed_json.element == 'text_input') {
            // Simple text input
            element = document.createElement('input');
            element.setAttribute('type', 'text');
            element.setAttribute('value', parsed_json.display_text);
        } else if (parsed_json.element == 'dropdown') {
            // Drop down list of unknown length with a selected item
            element = document.createElement('select');
            element.name = parsed_json.response_type;
            for (var i = 0; i < parsed_json.options.length; i++) {
                var option = document.createElement('option');
                option.value = parsed_json.options[i].value;
                option.text = parsed_json.options[i].display_text;
                // Check selected option and mark it
                if (parsed_json.options[i].value == parsed_json.selected) {
                    option.selected = true;
                }
                element.appendChild(option);
            }
        } else if (parsed_json.element == 'div_ide_output') {
            // Formatted text for the Arduino IDE CLI output
            var el_title = document.createElement('h4');
            if (parsed_json.success == "true") {
                el_title.innerHTML = "Compilation réussie"
                el_title.className = 'arduino_dialog_success';
            } else {
                el_title.innerHTML = "Echec de la compilation"
                el_title.className = 'arduino_dialog_failure';
            }

            var el_out = document.createElement('span');
            el_out.className = 'arduino_dialog_out';
            // If larger than 50 characters then don't bother looking for language key
            if (parsed_json.output.length < 50) {
                console.log(JSON.parse(parsed_json.output));
                el_out.innerHTML = parsed_json.output;

            } else {
                console.log(parsed_json.output);
                el_out.innerHTML = parsed_json.output;
            }

            element = document.createElement('div');
            element.appendChild(el_title);
            element.appendChild(el_out);

            // Only ouput error message if it was not successful
            if (parsed_json.success == false) {
                var el_err = document.createElement('span');
                el_err.className = 'arduino_dialog_out_error';
                // If larger than 50 characters then don't bother looking for language key
                if (parsed_json.output.length < 50) {
                    el_err.innerHTML = botlyStudio.getLocalStr(parsed_json.error_output) ||
                        parsed_json.error_output.split('\n').join('<br />');
                } else {
                    el_err.innerHTML = parsed_json.error_output.split('\n').join('<br />');
                }
                element.appendChild(el_err);
            }
        } else {
            //TODO: Not recognised, alert the user/developer somehow
        }

        return element;
    };





    //util
    if (!window.atob) {
        var tableStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var table = tableStr.split("");

        window.atob = function(base64) {
            if (/(=[^=]+|={3,})$/.test(base64)) throw new Error("String contains an invalid character");
            base64 = base64.replace(/=/g, "");
            var n = base64.length & 3;
            if (n === 1) throw new Error("String contains an invalid character");
            for (var i = 0, j = 0, len = base64.length / 4, bin = []; i < len; ++i) {
                var a = tableStr.indexOf(base64[j++] || "A"),
                    b = tableStr.indexOf(base64[j++] || "A");
                var c = tableStr.indexOf(base64[j++] || "A"),
                    d = tableStr.indexOf(base64[j++] || "A");
                if ((a | b | c | d) < 0) throw new Error("String contains an invalid character");
                bin[bin.length] = ((a << 2) | (b >> 4)) & 255;
                bin[bin.length] = ((b << 4) | (c >> 2)) & 255;
                bin[bin.length] = ((c << 6) | d) & 255;
            };
            return String.fromCharCode.apply(null, bin).substr(0, bin.length + n - 4);
        };

        window.btoa = function(bin) {
            for (var i = 0, j = 0, len = bin.length / 3, base64 = []; i < len; ++i) {
                var a = bin.charCodeAt(j++),
                    b = bin.charCodeAt(j++),
                    c = bin.charCodeAt(j++);
                if ((a | b | c) > 255) throw new Error("String contains an invalid character");
                base64[base64.length] = table[a >> 2] + table[((a << 4) & 63) | (b >> 4)] +
                    (isNaN(b) ? "=" : table[((b << 2) & 63) | (c >> 6)]) +
                    (isNaN(b + c) ? "=" : table[c & 63]);
            }
            return base64.join("");
        };

    }

    function hexToBase64(str) {
        return btoa(String.fromCharCode.apply(null,
            str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
    }

    function base64ToHex(str) {
        for (var i = 0, bin = atob(str.replace(/[ \r\n]+$/, "")), hex = []; i < bin.length; ++i) {
            var tmp = bin.charCodeAt(i).toString(16);
            if (tmp.length === 1) tmp = "0" + tmp;
            hex[hex.length] = tmp;
        }
        return hex.join(" ");
    }



    app.Agent = Agent;
}
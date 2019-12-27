module.exports = function (app) {
    var API = {};
    var FileSaver = require('file-saver');

    API.floatingButtons = [];

    API.isConnected = function () {
        return app.Agent.connected;
    }

    //{sucess: function(){}, fail: function(){} }
    API.connectAgent = function (cbs) {
        app.Agent.init(cbs);
    }

    //{sucess: function(data){}, fail: function(err){} }
    API.compile = function (code, cbs) {
        app.Agent.sendCodeCompile(code, cbs);
    }

    API.upload = function (data, cbs) {
        app.Agent.upload(data, cbs);
    }

    API.checkSerial = function () {
        app.Agent.listPort();
    }

    API.onSerialConnected = function () {
        M.toast({ html: 'Botly est connecté !' })
    };


    API.changeThemeColor = function (color, textColor) {
        textColor = textColor || '#f47a42'
        color = color || '#f47a42'
        var y = document.getElementsByClassName('arduino_orange')
        var i;
        for (i = 0; i < y.length; i++) {
            y[i].style.backgroundColor = color;
        }
        document.getElementsByClassName('blocklyToolboxDiv')[0].style.background = color;

        y = document.getElementsByClassName('blocklyScrollbarHandle');
        for (i = 0; i < y.length; i++) {
            y[i].style.fill = color;
        }

    }

    //Get Plugin ID
    API.myID = function (name) {
        return app.Plugins.idOf(name);
    }

    //Get programming languages array
    API.getLanguages = function () {
        return app.PL.OUTPUT_LANGUAGE_NAME;
    }

    //Get current programming language
    API.getLanguage = function () {
        return app.PL.OUTPUT_LANGUAGE_NAME[app.PL.OUTPUT_LANGUAGE];
    }

    //Get the generated code
    API.getCode = function (language) {

        switch (language) {
            case 'Javascript':
                return app.Blockly.generateJavaScript()

            case 'Arduino':
                return app.Blockly.generateArduino()

            case 'Python':
                return app.Blockly.generatePython()

            default:
                return app.Blockly.generateJavaScript()
        }
    }

    //Get last generated code
    API.getPreviousCode = function () {
        return app.PREV_OUTPUT_CODE_
    }

    //Set last generated code
    API.setPreviousCode = function (code) {
        app.PREV_OUTPUT_CODE_ = code;
    }

    //Render content is need when this methods is fired
    API.renderContent = function () {
        var instance = M.Tabs.getInstance(document.getElementById('tab_wrapper'));
        if (instance.index == 2) instance.select('plugin1');
        for (var id = 0; id < API.renderContents.length; id++)
            API.renderContents[id]();
    }

    //Return a object 
    API.getBlockTemplate = function () {
        block = {
            model: {
                init: function () { }
            },
            generators: {
                Arduino: function (block) {
                    code = 'Arduino code goes here';
                    return code;
                },
                JavaScript: function (block) {
                    code = 'Javascript code goes here';
                    return code;
                },
                Python: function (block) {
                    code = 'Python Code goes here';
                    return code;
                },
            }
        }

        return block;
    }

    API.addBlocks = function (name, block) {
        Blockly.Blocks[name] = block.model;
        Blockly.Arduino[name] = block.generators.Arduino;
        Blockly.JavaScript[name] = block.generators.JavaScript;
        Blockly.Python[name] = block.generators.Python;
    }

    API.getToolbox = function () {
        return Toolbox.TOOLBOX_XML
    }

    API.composeToolbox = function (toolbox) {

    }

    API.getDifficulty = function () {
        return Difficulty.DIFFUCULTY
    }

    API.setDifficulty = function (difficulty) {

    }


    API.resetPluginButtons = function () {
        API.floatingButtons = [];
        app.FloatingButtons.resetAll();
    }

    API.addFloatingButtons = function (iconText, callback) {
        API.floatingButtons.push({ id: API.floatingButtons.length, icon: iconText, handler: callback });
    }

    API.setPluginButtons = function () {
        API.floatingButtons.forEach(bt => {
            app.FloatingButtons.setFloatingIcon(bt.id, bt.icon);
            app.FloatingButtons.bindElement(bt.id, function () {
                bt.handler();
            });
        });
    }

    API.highlightBlock = function (id) {
        app.Blockly.workspace.getBlockById(id).setHighlighted(true);
        app.Blockly.workspace.highlightedBlocks_.push(app.Blockly.workspace.getBlockById(id));
    }

    API.downlightBlocks = function () {
        var array = app.Blockly.workspace.highlightedBlocks_;
        array.forEach(b => {
            b.setHighlighted(false);
        });
        app.Blockly.workspace.highlightedBlocks_ = [];
    }

    API.getLanguageExtension = function () {
        switch (API.getLanguage()) {
            case 'Javascript':
                return ".js";

            case 'Arduino':
                return ".ino";

            case 'Python':
                return ".py";

            default:
                return "txt";
        }
    }

    API.downloadCode = function () {
        API.saveTextFileAs(
            document.getElementById('sketch_name').value + API.getLanguageExtension(),
            API.getCode(API.getLanguage()))
    }

    API.saveTextFileAs = function (fileName, content) {
        var blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        FileSaver.saveAs(blob, fileName);
    };

    API.changeTabEvents = [];
    API.renderContents = [];

    app.API = API;
}
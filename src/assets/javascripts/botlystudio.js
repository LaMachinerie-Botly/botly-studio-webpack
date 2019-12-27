//   _______       __   __       _______ __            __ __       
//  |   _   .-----|  |_|  .--.--|   _   |  |_.--.--.--|  |__.-----.
//  |.  1   |  _  |   _|  |  |  |   1___|   _|  |  |  _  |  |  _  |
//  |.  _   |_____|____|__|___  |____   |____|_____|_____|__|_____|
//  |:  1    \            |_____|:  1   |                          
//  |::.. .  /                  |::.. . |                          
//  `-------'                   `-------'                          
//

/*
    name : BotlyApp Web-app

    authors :   Padhh, 
                NadarBreicq, 
                YannPaulmier, 
                JulesTopart

    organization : LaMachinerie

    website : botly-studio.fr
*/

var BotlyApp = {};

require('./app/api.js')(BotlyApp);
require('./app/languages.js')(BotlyApp);
require('./app/agent.js')(BotlyApp);
require('./app/design.js')(BotlyApp);
require('./app/toolbox.js')(BotlyApp);
require('./app/blockly.js')(BotlyApp);
require('./app/plugins.js')(BotlyApp);
require('./app/difficulty.js')(BotlyApp);
require('./app/floatingbuttons.js')(BotlyApp);
require('./app/programmingLanguages.js')(BotlyApp);

var FileSaver = require('file-saver');

require('./locales/fr.js')(BotlyApp)

BotlyApp.init = function () {
    // Lang init must run first for the rest of the page to pick the right msgs
    BotlyApp.Toolbox.changeToolbox();

    BotlyApp.Lang.init();
    BotlyApp.Difficulty.init();
    BotlyApp.PL.init();
    BotlyApp.Plugins.import();
    // Inject Blockly into content_blocks and fetch additional blocks
    BotlyApp.Blockly.injectBlockly(document.getElementById('content_blocks'), BotlyApp.Toolbox.TOOLBOX_XML, '../media/');
    //BotlyStudio.importExtraBlocks();


    BotlyApp.Design.designJsInit();
    BotlyApp.FloatingButtons.initFloatingButton();
    BotlyApp.Blockly.updateToolboxLanguage();
    BotlyApp.Design.bindDesignEventListeners();
    BotlyApp.bindActionFunctions();
    BotlyApp.Blockly.bindBlocklyEventListeners();
    BotlyApp.Blockly.loadSessionStorageBlocks();

    if (BotlyApp.Blockly.workspace.getAllBlocks().length == 0) {
        Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom('<xml><block type="start" deletable="false" movable="true"><mutation name="true"></mutation></block></xml>'), BotlyApp.Blockly.workspace);
        BotlyApp.Blockly.workspace.getAllBlocks()[0].updateShape_();
    }
    setTimeout(function () { BotlyApp.renderContent(); }, 1000);
};

/** Binds functions to each of the buttons, nav links, and related. */
BotlyApp.bindActionFunctions = function () {

    var elems = document.getElementById('slide-out');
    var sidenav = M.Sidenav.getInstance(elems);


    // Navigation buttons
    BotlyApp.bindClick_('button_load', BotlyApp.loadUserXmlFile);
    BotlyApp.bindClick_('button_save', BotlyApp.saveXmlFile);
    BotlyApp.bindClick_('button_delete', BotlyApp.discardAllBlocks);

    // Side menu buttons, they also close the side menu
    BotlyApp.bindClick_('menu_load', function () {
        BotlyApp.loadUserXmlFile();
        sidenav.close();
    });

    BotlyApp.bindClick_('menu_save', function () {
        BotlyApp.saveXmlFile();
        sidenav.close();
    });

    BotlyApp.bindClick_('menu_delete', function () {
        BotlyApp.discardAllBlocks();
        sidenav.close();
    });

    BotlyApp.bindClick_('menu_settings', function () {
        var instance = M.Modal.getInstance(document.getElementById("settings_dialog"));
        sidenav.close();
        instance.open();
    });
};

BotlyApp.changeTabs = function () {
    var array = [];
    array.push(document.getElementById('plugin0Head'));
    array.push(document.getElementById('plugin1Head'));
    array.push(document.getElementById('plugin2Head'));

    for (var id = 0; id < array.length; id++) {
        if (array[id].className.match('active')) {
            BotlyApp.API.changeTabEvents[id]();
        }
    }
}

/** Sets the BotlyApp server IDE setting to upload and sends the code. */
BotlyApp.ideSendUpload = function () {
    BotlyApp.shortMessage(BotlyApp.getLocalStr('verifyingSketch'));
    BotlyApp.resetIdeOutputContent();
    BotlyApp.sendCode("upload");
};

/** Sets the BotlyApp server IDE setting to verify and sends the code. */
BotlyApp.ideSendVerify = function () {
    BotlyApp.shortMessage(BotlyApp.getLocalStr('verifyingSketch'));
    BotlyApp.resetIdeOutputContent();
    BotlyApp.sendCode("compile");
};

/** Sets the BotlyApp server IDE setting to open and sends the code. */
BotlyApp.ideSendOpen = function () {
    BotlyApp.shortMessage(BotlyApp.getLocalStr('openingSketch'));
    BotlyApp.resetIdeOutputContent();
    BotlyApp.sendCode("openIDE");
};



/**
 * Send the Arduino Code to the BotlyAgent to process.
 * Shows a loader around the button, blocking it (unblocked upon received
 * message from server).
 */
BotlyApp.sendCode = function (flag) {
    BotlyApp.largeIdeButtonSpinner(true);
    BotlyAgent.sendSketchToServer(BotlyApp.generateArduino(), flag);
};

BotlyApp.downloadCode = function () {
    BotlyApp.saveTextFileAs(
        document.getElementById('sketch_name').value + '.ino',
        BotlyApp.generateArduino());
}


/**
 * Loads an XML file from the server and replaces the current blocks into the
 * Blockly workspace.
 * @param {!string} xmlFile Server location of the XML file to load.
 */
BotlyApp.loadServerXmlFile = function (xmlFile) {
    var loadXmlfileAccepted = function () {
        // loadXmlBlockFile loads the file asynchronously and needs a callback
        var loadXmlCb = function (sucess) {
            if (sucess) {
                BotlyApp.renderContent();
            } else {
                BotlyApp.alertMessage(
                    BotlyApp.getLocalStr('invalidXmlTitle'),
                    BotlyApp.getLocalStr('invalidXmlBody'),
                    false);
            }
        };
        var connectionErrorCb = function () { };
        BotlyApp.loadXmlBlockFile(xmlFile, loadXmlCb, connectionErrorCb);
    };

    if (BotlyApp.isWorkspaceEmpty()) {
        loadXmlfileAccepted();
    } else {
        BotlyApp.alertMessage(
            BotlyApp.getLocalStr('loadNewBlocksTitle'),
            BotlyApp.getLocalStr('loadNewBlocksBody'),
            true, loadXmlfileAccepted);
    }
};

/**
 * Loads an XML file from the users file system and adds the blocks into the
 * Blockly workspace.
 */
BotlyApp.loadUserXmlFile = function () {
    // Create File Reader event listener function
    var parseInputXMLfile = function (e) {
        var xmlFile = e.target.files[0];
        var filename = xmlFile.name;
        var extensionPosition = filename.lastIndexOf('.');
        if (extensionPosition !== -1) {
            filename = filename.substr(0, extensionPosition);
        }

        var reader = new FileReader();
        reader.onload = function () {
            var success = BotlyApp.Blockly.replaceBlocksfromXml(reader.result);
            if (success) {
                BotlyApp.renderContent();
                BotlyApp.sketchNameSet(filename);
            } else {
                BotlyApp.alertMessage(
                    BotlyApp.getLocalStr('invalidXmlTitle'),
                    BotlyApp.getLocalStr('invalidXmlBody'),
                    false);
            }
        };
        reader.readAsText(xmlFile);
    };

    // Create once invisible browse button with event listener, and click it
    var selectFile = document.getElementById('select_file');
    if (selectFile === null) {
        var selectFileDom = document.createElement('INPUT');
        selectFileDom.type = 'file';
        selectFileDom.id = 'select_file';

        var selectFileWrapperDom = document.createElement('DIV');
        selectFileWrapperDom.id = 'select_file_wrapper';
        selectFileWrapperDom.style.display = 'none';
        selectFileWrapperDom.appendChild(selectFileDom);

        document.body.appendChild(selectFileWrapperDom);
        selectFile = document.getElementById('select_file');
        selectFile.addEventListener('change', parseInputXMLfile, false);
    }
    selectFile.click();
};

/**
 * Creates an XML file containing the blocks from the Blockly workspace and
 * prompts the users to save it into their local file system.
 */
BotlyApp.saveXmlFile = function () {
    BotlyApp.saveTextFileAs(
        document.getElementById('sketch_name').value + '.xml',
        BotlyApp.Blockly.generateXml());
};

/**
 * Creates an Arduino Sketch file containing the Arduino code generated from
 * the Blockly workspace and prompts the users to save it into their local file
 * system.
 */
BotlyApp.saveSketchFile = function () {
    BotlyApp.saveTextFileAs(
        document.getElementById('sketch_name').value + '.ino',
        BotlyApp.generateArduino());
};

/**
 * Creates an text file with the input content and files name, and prompts the
 * users to save it into their local file system.
 * @param {!string} fileName Name for the file to be saved.
 * @param {!string} content Text datd to be saved in to the file.
 */
BotlyApp.saveTextFileAs = function (fileName, content) {
    var blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    FileSaver.saveAs(blob, fileName);
};

/**
 * Retrieves the Settings from BotlyAppServer to populates the form data
 * and opens the Settings modal dialog.
 */
BotlyApp.openSettings = function () {
    // Language menu only set on page load within BotlyApp.initLanguage()
    BotlyApp.openSettingsModal();
};

/**

/** Populate the workspace blocks with the XML written in the XML text area. */
BotlyApp.XmlTextareaToBlocks = function () {
    var success = BotlyApp.replaceBlocksfromXml(
        document.getElementById('content_xml').value);
    if (success) {
        BotlyApp.renderContent();
    } else {
        BotlyApp.alertMessage(
            BotlyApp.getLocalStr('invalidXmlTitle'),
            BotlyApp.getLocalStr('invalidXmlBody'),
            false);
    }
};

/**
 * Private variable to save the previous version of the Arduino Code.
 * @type {!String}
 * @private
 */
BotlyApp.PREV_OUTPUT_CODE_ = 'void setup() {\n\n}\n\n\nvoid loop() {\n\n}';

/**
 * Populate the Arduino Code and Blocks XML panels with content generated from
 * the blocks.
 */
BotlyApp.renderContent = function () {
    // Only regenerate the code if a block is not being dragged

    if (BotlyApp.Blockly.blocklyIsDragging()) return;
    BotlyApp.Blockly.saveSessionStorageBlocks();
    // Render Arduino Code with latest change highlight and syntax highlighting


    Botly.API.renderContent();
    // Generate plain XML into element
    document.getElementById('content_xml').value = BotlyApp.Blockly.generateXml();
};


/**
 * Private variable to indicate if the toolbox is meant to be shown.
 * @type {!boolean}
 * @private
 */
BotlyApp.TOOLBAR_SHOWING_ = true;

/**
 * Toggles the blockly toolbox and the BotlyApp toolbox button On and Off.
 * Uses namespace member variable TOOLBAR_SHOWING_ to toggle state.
 */
BotlyApp.toogleToolbox = function () {
    if (BotlyApp.TOOLBAR_SHOWING_) {
        BotlyApp.blocklyCloseToolbox();
        BotlyApp.displayToolbox(false);
    } else {
        BotlyApp.displayToolbox(true);
    }
    BotlyApp.TOOLBAR_SHOWING_ = !BotlyApp.TOOLBAR_SHOWING_;
};

/** @return {boolean} Indicates if the toolbox is currently visible. */
BotlyApp.isToolboxVisible = function () {
    return BotlyApp.TOOLBAR_SHOWING_;
};

/**
 * Lazy loads the additional block JS files from the ./block directory.
 * Initialises any additional BotlyApp extensions.
 * TODO: Loads the examples into the examples modal
 */
BotlyApp.importExtraBlocks = function () {
    /**
     * Parses the JSON data to find the block and languages js files.
     * @param {jsonDataObj} jsonDataObj JSON in JavaScript object format, null
     *     indicates an error occurred.
     * @return {undefined} Might exit early if response is null.
     */
    var jsonDataCb = function (jsonDataObj) {
        if (jsonDataObj.categories !== undefined) {
            var head = document.getElementsByTagName('head')[0];
            for (var catDir in jsonDataObj.categories) {
                var blocksJsLoad = document.createElement('script');
                blocksJsLoad.src = '../blocks/' + catDir + '/blocks.js';
                head.appendChild(blocksJsLoad);

                var blocksLangJsLoad = document.createElement('script');
                blocksLangJsLoad.src = '../blocks/' + catDir + '/msg/' + 'messages.js';
                //'lang/' + BotlyApp.LANG + '.js';
                head.appendChild(blocksLangJsLoad);

                var blocksGeneratorJsLoad = document.createElement('script');
                blocksGeneratorJsLoad.src = '../blocks/' + catDir +
                    '/generator_arduino.js';
                head.appendChild(blocksGeneratorJsLoad);

                // Check if the blocks add additional BotlyApp functionality
                var extensions = jsonDataObj.categories[catDir].extensions;
                if (extensions) {
                    for (var i = 0; i < extensions.length; i++) {
                        var blockExtensionJsLoad = document.createElement('script');
                        blockExtensionJsLoad.src = '../blocks/' + catDir + '/extensions.js';
                        head.appendChild(blockExtensionJsLoad);
                        // Add function to scheduler as lazy loading has to complete first
                        setTimeout(function (category, extension) {
                            var extensionNamespaces = extension.split('.');
                            var extensionCall = window;
                            var invalidFunc = false;
                            for (var j = 0; j < extensionNamespaces.length; j++) {
                                extensionCall = extensionCall[extensionNamespaces[j]];
                                if (extensionCall === undefined) {
                                    invalidFunc = true;
                                    break;
                                }
                            }
                            if (typeof extensionCall != 'function') {
                                invalidFunc = true;
                            }
                            if (invalidFunc) {
                                throw 'Blocks ' + category.categoryName + ' extension "' +
                                extension + '" is not a valid function.';
                            } else {
                                extensionCall();
                            }
                        }, 800, jsonDataObj.categories[catDir], extensions[i]);
                    }
                }
            }
        }
    };
    // Reads the JSON data containing all block categories from ./blocks directory
    // TODO: Now reading a local file, to be replaced by server generated JSON
    BotlyApp.getJsonData('../blocks/blocks_data.json', jsonDataCb);
};

/** Opens a modal with a list of categories to add or remove to the toolbox */
BotlyApp.openExtraCategoriesSelect = function () {
    /**
     * Parses the JSON data from the server into a list of additional categories.
     * @param {jsonDataObj} jsonDataObj JSON in JavaScript object format, null
     *     indicates an error occurred.
     * @return {undefined} Might exit early if response is null.
     */
    var jsonDataCb = function (jsonDataObj) {
        var htmlContent = document.createElement('div');
        if (jsonDataObj.categories !== undefined) {
            for (var catDir in jsonDataObj.categories) {
                // Function required to maintain each loop variable scope separated
                (function (cat) {
                    var clickBind = function (tickValue) {
                        if (tickValue) {
                            var catDom = (new DOMParser()).parseFromString(
                                cat.toolbox.join(''), 'text/xml').firstChild;
                            BotlyApp.addToolboxCategory(cat.toolboxName, catDom);
                        } else {
                            BotlyApp.removeToolboxCategory(cat.toolboxName);
                        }
                    };
                    htmlContent.appendChild(BotlyApp.createExtraBlocksCatHtml(
                        cat.categoryName, cat.description, clickBind));
                })(jsonDataObj.categories[catDir]);
            }
        }
        BotlyApp.openAdditionalBlocksModal(htmlContent);
    };
    // Reads the JSON data containing all block categories from ./blocks directory
    // TODO: Now reading a local file, to be replaced by server generated JSON
    BotlyApp.getJsonData('../blocks/blocks_data.json', jsonDataCb);
};

/** Informs the user that the selected function is not yet implemented. */
BotlyApp.notImplemented = function () {
    BotlyApp.shortMessage('Function not yet implemented');
};

/**
 * Interface to display messages with a possible action.
 * @param {!string} title HTML to include in title.
 * @param {!element} body HTML to include in body.
 * @param {boolean=} confirm Indicates if the user is shown a single option (ok)
 *     or an option to cancel, with an action applied to the "ok".
 * @param {string=|function=} callback If confirm option is selected this would
 *     be the function called when clicked 'OK'.
 */
BotlyApp.alertMessage = function (title, body, confirm, callback) {
    BotlyApp.materialAlert(title, body, confirm, callback);
};

/**
 * Interface to displays a short message, which disappears after a time out.
 * @param {!string} message Text to be temporarily displayed.
 */
BotlyApp.shortMessage = function (message) {
    BotlyApp.MaterialToast(message);
};

/**
 * Bind a function to a button's click event.
 * On touch enabled browsers, ontouchend is treated as equivalent to onclick.
 * @param {!Element|string} el Button element or ID thereof.
 * @param {!function} func Event handler to bind.
 * @private
 */
BotlyApp.bindClick_ = function (el, func) {
    if (typeof el == 'string') {
        el = document.getElementById(el);
    }
    // Need to ensure both, touch and click, events don't fire for the same thing
    var propagateOnce = function (e) {
        e.stopPropagation();
        e.preventDefault();
        func();
    };
    el.addEventListener('ontouchend', propagateOnce);
    el.addEventListener('click', propagateOnce);
};


module.exports = BotlyApp;
/** Create a namespace for the application. */
module.exports = function(app) {
    app.Blockly = {};
    /**
     * Blockly main workspace.
     * @type Blockly.WorkspaceSvg
     */
    app.Blockly.workspace = null;

    /**
     * Blockly workspace toolbox XML.
     * @type Element
     */
    app.Blockly.xmlTree = null;

    /**
     * Injects Blockly into a given HTML element. Toolbox XMl has to be a string.
     * @param {!Element} blocklyEl Element to inject Blockly into.
     * @param {!string} toolboxXml String containing the toolbox XML content.
     * @param {!string} blocklyPath String containing the Blockly directory path.
     */
    app.Blockly.injectBlockly = function(blocklyEl, toolboxXml, blocklyPath) {

        app.Blockly.xmlTree = toolboxXml;
        // The Toolbox menu language is edited directly from the XML nodes.
        app.Blockly.updateToolboxLanguage();
        app.Blockly.workspace = Blockly.inject(blocklyEl, {
            collapse: true,
            comments: true,
            css: true,
            disable: true,
            grid: false,
            maxBlocks: Infinity,
            media: blocklyPath,
            rtl: false,
            scrollbars: true,
            sounds: true,
            toolbox: app.Blockly.xmlTree,
            trashcan: true,
            zoom: {
                controls: true,
                wheel: false,
                startScale: 1.0,
                maxScale: 2,
                minScale: 0.2,
                scaleSpeed: 1.2
            }
        });
        // On language change the blocks have been stored in session storage
        app.Blockly.loadSessionStorageBlocks();
    };

    app.Blockly.applyToolbox = function() {
        app.Blockly.xmlTree = app.Toolbox.TOOLBOX_XML;
        app.Blockly.updateToolboxLanguage();
        app.Blockly.workspace.updateToolbox(app.Blockly.xmlTree);
    }

    /** Binds the event listeners relevant to Blockly. */
    app.Blockly.bindBlocklyEventListeners = function() {
        app.Blockly.workspace.addChangeListener(app.renderContent);

        // Ensure the Blockly workspace resizes accordingly
        /*
        window.addEventListener('resize',
            function() {
                Blockly.asyncSvgResize(app.Blockly.workspace);
            }, false);*/
    };

    /** @return {!string} Generated Arduino code from the Blockly workspace. */
    app.Blockly.generateArduino = function() {
        return Blockly.Arduino.workspaceToCode(app.Blockly.workspace);
    };


    /** @return {!string} Generated Javascript code from the Blockly workspace. */
    app.Blockly.generateJavaScript = function() {
        return Blockly.JavaScript.workspaceToCode(app.Blockly.workspace);
    };


    /** @return {!string} Generated Python code from the Blockly workspace. */
    app.Blockly.generatePython = function() {
        return Blockly.Python.workspaceToCode(app.Blockly.workspace);
    };

    /** @return {!string} Generated XML code from the Blockly workspace. */
    app.Blockly.generateXml = function() {
        var xmlDom = Blockly.Xml.workspaceToDom(app.Blockly.workspace);
        var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
        return xmlText;
    };

    /**
     * Loads an XML file from the server and replaces the current blocks into the
     * Blockly workspace.
     * @param {!string} xmlFile XML file path in a reachable server (no local path).
     * @param {!function} cbSuccess Function to be called once the file is loaded.
     * @param {!function} cbError Function to be called if there is a connection
     *     error to the XML server.
     */
    app.Blockly.loadXmlBlockFile = function(xmlFile, cbSuccess, cbError) {
        var request = app.Blockly.ajaxRequest();
        var requestCb = function() {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    var success = app.Blockly.replaceBlocksfromXml(request.responseText);
                    cbSuccess(success);
                } else {
                    cbError();
                }
            }
        };
        try {
            request.open('GET', xmlFile, true);
            request.onreadystatechange = requestCb;
            request.send(null);
        } catch (e) {
            cbError();
        }
    };

    /**
     * Parses the XML from its argument input to generate and replace the blocks
     * in the Blockly workspace.
     * @param {!string} blocksXml String of XML code for the blocks.
     * @return {!boolean} Indicates if the XML into blocks parse was successful.
     */
    app.Blockly.replaceBlocksfromXml = function(blocksXml) {
        var xmlDom = null;
        try {
            xmlDom = Blockly.Xml.textToDom(blocksXml);
        } catch (e) {
            return false;
        }
        app.Blockly.workspace.clear();
        var sucess = false;
        if (xmlDom) {
            sucess = app.Blockly.loadBlocksfromXmlDom(xmlDom);
        }
        return sucess;
    };

    /**
     * Parses the XML from its argument input to generate and add blocks to the
     * Blockly workspace.
     * @param {!string} blocksXmlDom String of XML DOM code for the blocks.
     * @return {!boolean} Indicates if the XML into blocks parse was successful.
     */
    app.Blockly.loadBlocksfromXmlDom = function(blocksXmlDom) {
        try {
            Blockly.Xml.domToWorkspace(blocksXmlDom, app.Blockly.workspace);
        } catch (e) {
            return false;
        }
        return true;
    };

    /**
     * Save blocks into session storage. Note that MSIE 11 does not support
     * sessionStorage on file:// URLs.
     */
    app.Blockly.saveSessionStorageBlocks = function() {
        if (window.sessionStorage) {
            var xml = Blockly.Xml.workspaceToDom(app.Blockly.workspace);
            var text = Blockly.Xml.domToText(xml);
            window.sessionStorage.loadOnceBlocks = text;
        }
    };

    /** Load blocks saved on session storage and deletes them from storage. */
    app.Blockly.loadSessionStorageBlocks = function() {
        try {
            var loadOnce = window.sessionStorage.loadOnceBlocks;
        } catch (e) {
            // Firefox sometimes throws a SecurityError when accessing sessionStorage.
            // Restarting Firefox fixes this, so it looks like a bug.
            var loadOnce = null;
        }
        if (loadOnce) {
            if (loadOnce.length > 0) {
                delete window.sessionStorage.loadOnceBlocks;
                var xml = Blockly.Xml.textToDom(loadOnce);
                Blockly.Xml.domToWorkspace(xml, app.Blockly.workspace);
            }
        }
    };

    /** Discard all blocks from the workspace. */
    app.Blockly.discardAllBlocks = function() {
        var blockCount = app.Blockly.workspace.getAllBlocks().length;
        if (blockCount == 1) {
            app.Blockly.workspace.clear();
            app.Blockly.renderContent();
        } else if (blockCount > 1) {
            app.Blockly.alertMessage(
                app.Blockly.getLocalStr('discardBlocksTitle'),
                app.Blockly.getLocalStr('discardBlocksBody')
                .replace('%1', blockCount),
                true,
                function() {
                    app.Blockly.workspace.clear();
                    app.Blockly.renderContent();
                });
        }
    };

    /** @return {!boolean} Indicates if the Blockly workspace has blocks. */
    app.Blockly.isWorkspaceEmpty = function() {
        return app.Blockly.workspace.getAllBlocks().length ? false : true;
    };

    /**
     * Changes the Arduino board profile if different from the currently set one.
     * @param {string} newBoard Name of the new profile to set.
     */
    app.Blockly.changeBlocklyArduinoBoard = function(newBoard) {
        if (Blockly.Arduino.Boards.selected !== Blockly.Arduino.Boards[newBoard]) {
            Blockly.Arduino.Boards.changeBoard(app.Blockly.workspace, newBoard);
        }
    };

    /** Update the toolbox categories language. */
    app.Blockly.updateToolboxLanguage = function() {
        var categories = ['catBotly', 'catLogic', 'catLoops', 'catMath', 'catText',
            'catVariables', 'catFunctions', 'catInputOutput',
            'catTime', 'catAudio', 'catMotors', 'catComms'
        ];
        var categoryNodes = app.Blockly.xmlTree.getElementsByTagName('category');
        for (var i = 0, cat; cat = categoryNodes[i]; i++) {
            var catId = cat.getAttribute('id');
            var catText = app.Lang.getLocalStr(catId);
            if (catText) {
                cat.setAttribute('name', catText);
            }
        }
    };

    /**
     * Adds a category to the current toolbox.
     * @param {!string} categoryTitle Toolbox category title.
     * @param {!Element} categoryDom Toolbox category to add add the end of tree.
     */
    app.Blockly.addToolboxCategory = function(categoryTitle, categoryDom) {
        categoryDom.id = 'cat' + categoryTitle.replace(/\s+/g, '');
        categoryDom.setAttribute('name', categoryTitle);
        app.Blockly.xmlTree.appendChild(document.createElement('sep'));
        app.Blockly.xmlTree.appendChild(categoryDom);
        app.Blockly.workspace.updateToolbox(app.Blockly.xmlTree);
    };

    /**
     * Removes a category to the current toolbox.
     * @param {!String} categoryTitle Toolbox category name to remove from tree.
     */
    app.Blockly.removeToolboxCategory = function(categoryTitle) {
        var categoryId = 'cat' + categoryTitle.replace(/\s+/g, '');
        var categoryNodes = app.Blockly.xmlTree.getElementsByTagName('category');
        for (var i = 0; i < categoryNodes.length; i++) {
            if (categoryNodes[i].getAttribute('id') === categoryId) {
                var previousNode = categoryNodes[i].previousElementSibling;
                app.Blockly.xmlTree.removeChild(categoryNodes[i]);
                if (previousNode && previousNode.nodeName == 'sep') {
                    app.Blockly.xmlTree.removeChild(previousNode);
                }
            }
        }
        app.Blockly.workspace.updateToolbox(app.Blockly.xmlTree);
    };

    /** Closes the toolbox block container sub-menu. */
    app.Blockly.blocklyCloseToolbox = function() {
        app.Blockly.workspace.toolbox_.flyout_.hide();
    };

    /** @return {!integer} The width of the blockly workspace toolbox. */
    app.Blockly.blocklyToolboxWidth = function() {
        return app.Blockly.workspace.toolbox_.width;
    };

    /** @return {!boolean} Indicates if a block is currently being dragged. */
    app.Blockly.blocklyIsDragging = function() {
        return app.Blockly.workspace.isDragging();
    };

    /** Wraps the blockly 'cut' functionality. */
    app.Blockly.blocklyCut = function() {
        if (Blockly.selected) {
            Blockly.copy_(Blockly.selected);
            Blockly.selected.dispose(true, true);
        }
    };

    /** Wraps the blockly 'copy' functionality. */
    app.Blockly.blocklyCopy = function() {
        if (Blockly.selected) {
            Blockly.copy_(Blockly.selected);
        }
    };

    /** Wraps the blockly 'paste' functionality. */
    app.Blockly.blocklyPaste = function() {
        if (Blockly.clipboardXml_) {
            Blockly.hideChaff();
            Blockly.clipboardSource_.paste(Blockly.clipboardXml_);
        }
    };

    /** Wraps the blockly 'delete' functionality. */
    app.Blockly.blocklyDelete = function() {
        if (Blockly.selected && Blockly.selected.isDeletable()) {
            Blockly.hideChaff();
            Blockly.selected.dispose(true, true);
        }
    };

    /** @return {XMLHttpRequest} An XML HTTP Request multi-browser compatible. */
    app.Blockly.ajaxRequest = function() {
        var request;
        try {
            // Firefox, Chrome, IE7+, Opera, Safari
            request = new XMLHttpRequest();
        } catch (e) {
            try {
                // IE6 and earlier
                request = new ActiveXObject('Msxml2.XMLHTTP');
            } catch (e) {
                try {
                    request = new ActiveXObject('Microsoft.XMLHTTP');
                } catch (e) {
                    throw 'Your browser does not support AJAX';
                    request = null;
                }
            }
        }
        return request;
    };
}
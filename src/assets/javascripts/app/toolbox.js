module.exports = function(app) {
    app.Toolbox = {};
    app.Toolbox.TOOLBOX_XML = "";
    var parser = new DOMParser();

    app.Toolbox.changeToolbox = function() {
        if (app.Difficulty.DIFFICULTY == 1) {
            var rawXml = require('../../xml/newbie.xml').default;
            app.Toolbox.TOOLBOX_XML = parser.parseFromString(rawXml, "text/xml").children[0];
        }
        if (app.Difficulty.DIFFICULTY == 2) {
            var rawXml = require('../../xml/easy.xml').default;
            app.Toolbox.TOOLBOX_XML = parser.parseFromString(rawXml, "text/xml").children[0];
        }
        if (app.Difficulty.DIFFICULTY == 3) {
            var rawXml = require('../../xml/medium.xml').default;
            app.Toolbox.TOOLBOX_XML = parser.parseFromString(rawXml, "text/xml").children[0];
        }
        if (app.Difficulty.DIFFICULTY == 4) {
            var rawXml = require('../../xml/hard.xml').default;
            app.Toolbox.TOOLBOX_XML = parser.parseFromString(rawXml, "text/xml").children[0];

        }
    }
}
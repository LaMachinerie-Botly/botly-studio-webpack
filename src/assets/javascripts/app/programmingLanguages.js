//PL Programming language

module.exports = function(app) {
    app.PL = {};

    app.PL.OUTPUT_LANGUAGE_NAME = {
        1: 'Arduino',
        2: 'Python',
        3: 'Javascript',
    };

    app.PL.OUTPUT_LANGUAGE = 1;

    app.PL.init = function() {
        app.PL.populateOutputLangMenu(app.PL.OUTPUT_LANGUAGE);
    };

    app.PL.populateOutputLangMenu = function(selectedOutputLang) {
        var outputLangMenu = document.getElementById('outputLang');
        outputLangMenu.options.length = 0;

        for (var outputLang in app.PL.OUTPUT_LANGUAGE_NAME) {
            var option = new Option(app.PL.OUTPUT_LANGUAGE_NAME[outputLang], outputLang);
            if (outputLang == selectedOutputLang) {
                option.selected = true;
            }
            outputLangMenu.options.add(option);
        }
        outputLangMenu.onchange = app.PL.changeOutputLang;
    };

    /** Saves the blocks and reloads with a different language. */
    app.PL.changeOutputLang = function() {
        var outputLangMenu = document.getElementById('outputLang');
        var newOutputLang = encodeURIComponent(
            outputLangMenu.options[outputLangMenu.selectedIndex].value);
        var outLang = outputLangMenu.options[outputLangMenu.selectedIndex].value;
        app.PL.OUTPUT_LANGUAGE = outLang;
        app.renderContent();
        return;
    };
}
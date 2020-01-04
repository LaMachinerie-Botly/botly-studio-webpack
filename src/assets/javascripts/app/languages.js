import En from 'node-blockly/lib/i18n/en';
import Es from 'node-blockly/lib/i18n/es';
import Fr from 'node-blockly/lib/i18n/fr';
import Nl from 'node-blockly/lib/i18n/nl';
import Pt from 'node-blockly/lib/i18n/pt';

module.exports = function(app) {
    app.Lang = {};
    /** Lookup for names of supported languages. Keys in ISO 639 format. */
    app.Lang.LANGUAGE_NAME = {
        'fr': 'Français',
        'en': 'English',
        'es': 'Español',
        'nl': 'Nederlands',
        'pt': 'Português'
    };

    /**
     * Selected language, default English.
     * @type {string}
     */
    app.Lang.LANG = 'fr';

    /**
     * We keep a local copy of the default language in case translations cannot
     * be found in the injected language file.
     * @type {Object}
     */
    app.Lang.DEFAULT_LANG_TEXT = {};

    app.Lang.preload = function() {
        app.Lang.LANG = app.Lang.getUrlLanguage() ||
            app.Lang.getLanguageSetting() || app.Lang.LANG;
        app.Lang.injectLanguageJsSources(app.Lang.LANG);
    }

    /** Initialize the page language. */
    app.Lang.init = function() {
        app.Lang.populateLanguageMenu(app.Lang.LANG);
        app.Lang.duplicateDefaultLang();
        app.Lang.updateLanguageText();

    };

    /**
     * Get the language previously set by the user from the server settings.
     * @return {string} Language saved in the server settings.
     */
    app.Lang.getLanguageSetting = function() {
        //TODO: Server feature still to be implemented, for now return default
        return null;
    };

    /**
     * Get the language selected from the URL, format '?lang=en'.
     * @return {string} Selected language.
     */
    app.Lang.getUrlLanguage = function() {
        var langKey = 'lang';
        var val = location.search.match(new RegExp('[?&]' + langKey + '=([^&]+)'));
        var language = val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : '';
        if (app.Lang.LANGUAGE_NAME[language] === undefined) {
            language = null;
        }
        return language;
    };

    /**
     * Populates the settings language selection menu.
     * @param {!string} selectedLang Language to be marked as selected.
     */
    app.Lang.populateLanguageMenu = function(selectedLang) {
        var languageMenu = document.getElementById('language');
        languageMenu.options.length = 0;

        for (var lang in app.Lang.LANGUAGE_NAME) {
            var option = new Option(app.Lang.LANGUAGE_NAME[lang], lang);
            if (lang == selectedLang) {
                option.selected = true;
            }
            languageMenu.options.add(option);
        }
        languageMenu.onchange = app.Lang.changeLanguage;
    };

    /**
     * Because new languages are injected by overwriting app.Lang.LOCALISED_TEXT
     * we keep a local copy of the default language (included in the html header) so
     * that we can still retrieve these strings if the translation cannot be found.
     */
    app.Lang.duplicateDefaultLang = function() {
        for (var textId in app.Lang.LOCALISED_TEXT) {
            app.Lang.DEFAULT_LANG_TEXT[textId] = app.Lang.LOCALISED_TEXT[textId];
        }
    };

    /** Updates the page text strings with the new language. */
    app.Lang.updateLanguageText = function() {
        for (var textId in app.Lang.LOCALISED_TEXT) {
            var textStrings = document.getElementsByClassName('translatable_' + textId);
            for (var i = 0; i < textStrings.length; i++) {
                textStrings[i].innerHTML = app.Lang.getLocalStr(textId);
            }
        }
    };

    /**
     * Injects the language JavaScript files into the html head element.
     * @param {string} langKey Dictionary key for the language to inject, must also
     *     be JS file name.
     */
    app.Lang.injectLanguageJsSources = function(langKey) {
        switch (langKey) {
            case 'fr':
                Blockly.setLocale(Fr);
                require('../locales/fr.js')(app)
                break;
            case 'en':
                Blockly.setLocale(En);
                require('../locales/en.js')(app)
                break;
            case 'nl':
                Blockly.setLocale(Nl);
                require('../locales/nl.js')(app)
                break;
            case 'pt':
                Blockly.setLocale(Pt);
                require('../locales/pt.js')(app)
                break;
            case 'es':
                Blockly.setLocale(Es);
                require('../locales/es.js')(app)
                break;
            default:
                Blockly.setLocale(Fr);
                require('../locales/fr.js')(app)
                break;
        }
    };

    /** Saves the blocks and reloads with a different language. */
    app.Lang.changeLanguage = function() {
        // Store the blocks for the duration of the reload only
        app.Blockly.saveSessionStorageBlocks();

        var languageMenu = document.getElementById('language');
        var newLang = encodeURIComponent(
            languageMenu.options[languageMenu.selectedIndex].value);
        var search = window.location.search;
        if (search.length <= 1) {
            search = '?lang=' + newLang;
        } else if (search.match(/[?&]lang=[^&]*/)) {
            search = search.replace(/([?&]lang=)[^&]*/, '$1' + newLang);
        } else {
            search = search.replace(/\?/, '?lang=' + newLang + '&');
        }

        window.location = window.location.protocol + '//' +
            window.location.host + window.location.pathname + search;
    };

    /**
     * Finds and returns the requests string in the localised language.
     * If the translation is not returned, it fetches the original language string.
     * @param {string} stringId
     * @return {!string} The localised, original, or an empty string.
     */
    app.Lang.getLocalStr = function(stringId) {
        var text = app.LOCALISED_TEXT[stringId];
        if (!text) {
            console.log('Localised text string ID "' + stringId + '" does not exists!');
        }
        return text || app.Lang.DEFAULT_LANG_TEXT[stringId] || '';
    };
}
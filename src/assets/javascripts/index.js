window.$ = require('jquery');

import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import '../../../node_modules/materialize-css/dist/js/materialize.min.js';

require("../stylesheets/styles.css")
require("../../../node_modules/@mdi/font/css/materialdesignicons.min.css");

require('../images/botly.jpg')
require('../images/openbot.png')
require('../icons/logo.ico')

window.Blockly = require('node-blockly/browser')

require('./blockly/arduino.js')(window.Blockly)
require('./blockly/blocks/arduino/io.js')(window.Blockly);
require('./blockly/blocks/arduino/map.js')(window.Blockly);
require('./blockly/blocks/arduino/procedures.js')(window.Blockly);
require('./blockly/blocks/arduino/serial.js')(window.Blockly);
require('./blockly/blocks/arduino/time.js')(window.Blockly);
require('./blockly/blocks/arduino/variables.js')(window.Blockly);

require('./blockly/generators/arduino/boards.js')
require('./blockly/generators/arduino/colour.js')(window.Blockly);
require('./blockly/generators/arduino/io.js')(window.Blockly);
require('./blockly/generators/arduino/lists.js')(window.Blockly);
require('./blockly/generators/arduino/logic.js')(window.Blockly);
require('./blockly/generators/arduino/loops.js')(window.Blockly);
require('./blockly/generators/arduino/map.js')(window.Blockly);
require('./blockly/generators/arduino/math.js')(window.Blockly);
require('./blockly/generators/arduino/procedures.js')(window.Blockly);
require('./blockly/generators/arduino/serial.js')(window.Blockly);
require('./blockly/generators/arduino/text.js')(window.Blockly);
require('./blockly/generators/arduino/time.js')(window.Blockly);
require('./blockly/generators/arduino/variables.js')(window.Blockly);




import en from './locales/en.js'
import es from './locales/es.js'
import fr from './locales/fr.js'
import nl from './locales/nl.js'
import pt from './locales/pt.js'



import En from 'node-blockly/lib/i18n/en';
import Es from 'node-blockly/lib/i18n/es';
import Fr from 'node-blockly/lib/i18n/fr';
import Nl from 'node-blockly/lib/i18n/nl';
import Pt from 'node-blockly/lib/i18n/pt';

Blockly.setLocale(Fr)

var BotlyApp = require('./botlystudio.js')
window.BotlyAPI = BotlyApp.API;
window.Botly = BotlyApp;

require('./blockly/blocks/botly/botly-blocks.js')(window.Blockly, window.Botly.LOCALISED_TEXT)
require('./blockly/blocks/botly/botly-generator.js')(window.Blockly)

window.addEventListener('load', function load(event) {
    window.removeEventListener('load', load, false);
    BotlyApp.init();
});
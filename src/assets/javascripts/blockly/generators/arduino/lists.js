module.exports = function(Blockly) {
    Blockly.Arduino.lists = Blockly.Arduino.lists || {};

    Blockly.Arduino = require("node-blockly/browser").Arduino;

    Blockly.Arduino['lists_create_empty'] = Blockly.Arduino.noGeneratorCodeInline;

    Blockly.Arduino['lists_create_with'] = Blockly.Arduino.noGeneratorCodeInline;

    Blockly.Arduino['lists_repeat'] = Blockly.Arduino.noGeneratorCodeInline;

    Blockly.Arduino['lists_length'] = Blockly.Arduino.noGeneratorCodeInline;

    Blockly.Arduino['lists_isEmpty'] = Blockly.Arduino.noGeneratorCodeInline;

    Blockly.Arduino['lists_indexOf'] = Blockly.Arduino.noGeneratorCodeInline;

    Blockly.Arduino['lists_getIndex'] = Blockly.Arduino.noGeneratorCodeInline;

    Blockly.Arduino['lists_setIndex'] = Blockly.Arduino.noGeneratorCodeLine;
}
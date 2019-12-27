module.exports = function(Blockly) {
    Blockly.Arduino.variables = Blockly.Arduino.variables || {};

    Blockly.Arduino = require("node-blockly/browser").Arduino;


    /**
     * Code generator for variable (X) getter.
     * Arduino code: loop { X }
     * @param {Blockly.Block} block Block to generate the code from.
     * @return {array} Completed code with order of operation.
     */
    Blockly.Arduino['variables_get'] = function(block) {
        var code = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'),
            Blockly.Variables.NAME_TYPE);
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    /**
     * Code generator for variable (X) setter (Y).
     * Arduino code: type X;
     *               loop { X = Y; }
     * @param {Blockly.Block} block Block to generate the code from.
     * @return {string} Completed code.
     */
    Blockly.Arduino['variables_set'] = function(block) {
        var argument0 = Blockly.Arduino.valueToCode(block, 'VALUE',
            Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
        var varName = Blockly.Arduino.variableDB_.getName(
            block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
        return varName + ' = ' + argument0 + ';\n';
    };
}
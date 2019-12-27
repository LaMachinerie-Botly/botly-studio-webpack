module.exports = function(Blockly) {
    Blockly.Arduino.map = Blockly.Arduino.map || {};

    /**
     * Code generator for the map block.
     * Arduino code: loop { map(x, 0, 1024, 0, y) }
     * @param {!Blockly.Block} block Block to generate the code from.
     * @return {array} Completed code with order of operation.
     */
    Blockly.Arduino['base_map'] = function(block) {
        var valueNum = Blockly.Arduino.valueToCode(
            block, 'NUM', Blockly.Arduino.ORDER_NONE) || '0';
        var valueDmax = Blockly.Arduino.valueToCode(
            block, 'DMAX', Blockly.Arduino.ORDER_ATOMIC) || '0';

        var code = 'map(' + valueNum + ', 0, 1024, 0, ' + valueDmax + ')';
        return [code, Blockly.Arduino.ORDER_NONE];
    };
}
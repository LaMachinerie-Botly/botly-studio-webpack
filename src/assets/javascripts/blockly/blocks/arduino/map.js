module.exports = function(Blockly) {


    Blockly.Blocks.map = Blockly.map || {};

    /** Common HSV hue for all blocks in this category. */
    Blockly.Blocks.map.HUE = 230;

    Blockly.Blocks['base_map'] = {
        /**
         * Block for creating a the map function.
         * @this Blockly.Block
         */
        init: function() {
            this.setHelpUrl('http://arduino.cc/en/Reference/map');
            this.setColour(Blockly.Blocks.map.HUE);
            this.appendValueInput('NUM')
                .appendField(Blockly.Msg.ARD_MAP)
                .setCheck('number');
            this.appendValueInput('DMAX')
                .appendField(Blockly.Msg.ARD_MAP_VAL)
                .setCheck('number');
            this.appendDummyInput()
                .appendField(']');
            this.setInputsInline(true);
            this.setOutput(true);
            this.setTooltip(Blockly.Msg.ARD_MAP_TIP);
        },
        /** @return {string} The type of return value for the block, an integer. */
        getBlockType: function() {
            return Blockly.Types.NUMBER;
        }
    };
}
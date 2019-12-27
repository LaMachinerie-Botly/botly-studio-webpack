module.exports = function(Blockly) {

    Blockly.Blocks.logo = Blockly.logo || {};
    /** Common HSV hue for all blocks in this category. */
    Blockly.Blocks.procedures.HUE = 290;

    Blockly.Blocks['arduino_functions'] = {
        /**
         * Block for defining the Arduino setup() and loop() functions.
         * @this Blockly.Block
         */
        init: function() {
            this.appendDummyInput()
                .appendField(Blockly.Msg.ARD_FUN_RUN_SETUP);
            this.appendStatementInput('SETUP_FUNC');
            this.appendDummyInput()
                .appendField(Blockly.Msg.ARD_FUN_RUN_LOOP);
            this.appendStatementInput('LOOP_FUNC');
            this.setInputsInline(false);
            this.setColour(Blockly.Blocks.procedures.HUE);
            this.setTooltip(Blockly.Msg.ARD_FUN_RUN_TIP);
            this.setHelpUrl('https://arduino.cc/en/Reference/Loop');
            this.contextMenu = false;
        },
        /** @return {!boolean} True if the block instance is in the workspace. */
        getArduinoLoopsInstance: function() {
            return true;
        }
    };
}
module.exports = function(Blockly) {


    Blockly.Blocks.time = Blockly.time || {};
    /** Common HSV hue for all blocks in this category. */
    Blockly.Blocks.time.HUE = 140;

    Blockly.Blocks['time_delay'] = {
        /**
         * Delay block definition
         * @this Blockly.Block
         */
        init: function() {
            this.setHelpUrl('http://arduino.cc/en/Reference/Delay');
            this.setColour(Blockly.Blocks.time.HUE);
            this.appendValueInput('DELAY_TIME_MILI')
                .setCheck('Number')
                .appendField(Blockly.Msg.ARD_TIME_DELAY);
            this.appendDummyInput()
                .appendField(Blockly.Msg.ARD_TIME_MS);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip(Blockly.Msg.ARD_TIME_DELAY_TIP);
        }
    };

    Blockly.Blocks['time_delaymicros'] = {
        /**
         * delayMicroseconds block definition
         * @this Blockly.Block
         */
        init: function() {
            this.setHelpUrl('http://arduino.cc/en/Reference/DelayMicroseconds');
            this.setColour(Blockly.Blocks.time.HUE);
            this.appendValueInput('DELAY_TIME_MICRO')
                .setCheck('Number')
                .appendField(Blockly.Msg.ARD_TIME_DELAY);
            this.appendDummyInput()
                .appendField(Blockly.Msg.ARD_TIME_DELAY_MICROS);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip(Blockly.Msg.ARD_TIME_DELAY_MICRO_TIP);
        }
    };

    Blockly.Blocks['time_millis'] = {
        /**
         * Elapsed time in milliseconds block definition
         * @this Blockly.Block
         */
        init: function() {
            this.setHelpUrl('http://arduino.cc/en/Reference/Millis');
            this.setColour(Blockly.Blocks.time.HUE);
            this.appendDummyInput()
                .appendField(Blockly.Msg.ARD_TIME_MILLIS);
            this.setOutput(true, 'Number');
            this.setTooltip(Blockly.Msg.ARD_TIME_MILLIS_TIP);
        },
        /** @return {string} The type of return value for the block, an integer. */
        getBlockType: function() {
            return 'Number';
        }
    };

    Blockly.Blocks['time_micros'] = {
        /**
         * Elapsed time in microseconds block definition
         * @this Blockly.Block
         */
        init: function() {
            this.setHelpUrl('http://arduino.cc/en/Reference/Micros');
            this.setColour(Blockly.Blocks.time.HUE);
            this.appendDummyInput()
                .appendField(Blockly.Msg.ARD_TIME_MICROS);
            this.setOutput(true, 'Number');
            this.setTooltip(Blockly.Msg.ARD_TIME_MICROS_TIP);
        },
        /**
         * Should be a long (32bit), but  for for now an int.
         * @return {string} The type of return value for the block, an integer.
         */
        getBlockType: function() {
            return 'Number';
        }
    };

    Blockly.Blocks['infinite_loop'] = {
        /**
         * Waits forever, end of program.
         * @this Blockly.Block
         */
        init: function() {
            this.setHelpUrl('');
            this.setColour(Blockly.Blocks.time.HUE);
            this.appendDummyInput()
                .appendField(Blockly.Msg.ARD_TIME_INF);
            this.setInputsInline(true);
            this.setPreviousStatement(true);
            this.setTooltip(Blockly.Msg.ARD_TIME_INF_TIP);
        }
    };

}
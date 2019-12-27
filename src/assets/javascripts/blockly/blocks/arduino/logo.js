module.exports = function(Blockly) {



    Blockly.Blocks.logo = Blockly.logo || {};

    Blockly.Blocks.logo.HUE = 180;

    /* Ardublockly block */
    Blockly.Blocks['ardublockly_name_top'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Ardublockly");
            this.setPreviousStatement(true);
            this.setColour(Blockly.Blocks.logo.HUE);
        }
    };

    Blockly.Blocks['ardublockly_name_bottom'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Ardublockly");
            this.setNextStatement(true);
            this.setColour(Blockly.Blocks.logo.HUE);
            this.setTooltip('');
        }
    };

    /* Plus block */
    Blockly.Blocks['ardublockly_plus_top_large'] = {
        init: function() {
            this.appendValueInput("NAME")
                .appendField("     +");
            this.setNextStatement(true);
            this.setColour(Blockly.Blocks.logo.HUE);
        }
    };

    Blockly.Blocks['ardublockly_plus_top_small'] = {
        init: function() {
            this.appendValueInput("NAME")
                .appendField("  +");
            this.setNextStatement(true);
            this.setColour(Blockly.Blocks.logo.HUE);
        }
    };

    Blockly.Blocks['ardublockly_plus_bottom_large'] = {
        init: function() {
            this.appendValueInput("NAME")
                .appendField("     +");
            this.setPreviousStatement(true);
            this.setColour(Blockly.Blocks.logo.HUE);
        }
    };

    Blockly.Blocks['ardublockly_plus_bottom_small'] = {
        init: function() {
            this.appendValueInput("NAME")
                .appendField("  +");
            this.setPreviousStatement(true);
            this.setColour(Blockly.Blocks.logo.HUE);
        }
    };

    Blockly.Blocks['ardublockly_plus_both_small'] = {
        init: function() {
            this.appendValueInput("NAME")
                .appendField("  +");
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setColour(Blockly.Blocks.logo.HUE);
        }
    };

    Blockly.Blocks['ardublockly_plus_both_large'] = {
        init: function() {
            this.appendValueInput("NAME")
                .appendField("     +");
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setColour(Blockly.Blocks.logo.HUE);
        }
    };

    /* Minus block */
    Blockly.Blocks['ardublockly_minus_large'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("-     ");
            this.setInputsInline(false);
            this.setOutput(true);
            this.setColour(Blockly.Blocks.logo.HUE);
        }
    };

    Blockly.Blocks['ardublockly_minus_small'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("-  ");
            this.setInputsInline(false);
            this.setOutput(true);
            this.setColour(Blockly.Blocks.logo.HUE);
        }
    };
}
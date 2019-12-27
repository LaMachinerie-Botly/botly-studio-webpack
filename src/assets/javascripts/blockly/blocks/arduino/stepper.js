module.exports = function(Blockly) {


    Blockly.Blocks.stepper = Blockly.stepper || {};
    /** Common HSV hue for all blocks in this category. */
    Blockly.Blocks.stepper.HUE = 80;

    Blockly.Blocks['stepper_config'] = {
        /**
         * Block for for the stepper generator configuration including creating
         * an object instance and setting up the speed. Info in the setHelpUrl link.
         * @this Blockly.Block
         */
        init: function() {
            this.setHelpUrl('http://arduino.cc/en/Reference/StepperConstructor');
            this.setColour(Blockly.Blocks.stepper.HUE);
            this.appendDummyInput()
                .appendField(Blockly.Msg.ARD_STEPPER_SETUP)
                .appendField(
                    new Blockly.FieldInstance('Stepper',
                        Blockly.Msg.ARD_STEPPER_DEFAULT_NAME,
                        true, true, false),
                    'STEPPER_NAME')
                .appendField(Blockly.Msg.ARD_STEPPER_MOTOR);
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.ARD_STEPPER_PIN1)
                .appendField(new Blockly.FieldDropdown(
                    Blockly.Arduino.Boards.selected.digitalPins), 'STEPPER_PIN1')
                .appendField(Blockly.Msg.ARD_STEPPER_PIN2)
                .appendField(new Blockly.FieldDropdown(
                    Blockly.Arduino.Boards.selected.digitalPins), 'STEPPER_PIN2');
            this.appendValueInput('STEPPER_STEPS')
                .setCheck(Blockly.Types.NUMBER.checkList)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.ARD_STEPPER_REVOLVS);
            this.appendValueInput('STEPPER_SPEED')
                .setCheck(Blockly.Types.NUMBER.checkList)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.ARD_STEPPER_SPEED);
            this.setTooltip(Blockly.Msg.ARD_STEPPER_SETUP_TIP);
        },
        /**
         * Updates the content of the the pin related fields.
         * @this Blockly.Block
         */
        updateFields: function() {
            Blockly.Boards.refreshBlockFieldDropdown(
                this, 'STEPPER_PIN1', 'digitalPins');
            Blockly.Boards.refreshBlockFieldDropdown(
                this, 'STEPPER_PIN2', 'digitalPins');
        }
    };

    Blockly.Blocks['stepper_step'] = {
        /**
         * Block for for the stepper 'step()' function.
         * @this Blockly.Block
         */
        init: function() {
            this.setHelpUrl('http://arduino.cc/en/Reference/StepperStep');
            this.setColour(Blockly.Blocks.stepper.HUE);
            this.appendDummyInput()
                .appendField(Blockly.Msg.ARD_STEPPER_STEP)
                .appendField(
                    new Blockly.FieldInstance('Stepper',
                        Blockly.Msg.ARD_STEPPER_DEFAULT_NAME,
                        false, true, false),
                    'STEPPER_NAME');
            this.appendValueInput('STEPPER_STEPS')
                .setCheck(Blockly.Types.NUMBER.checkList);
            this.appendDummyInput()
                .appendField(Blockly.Msg.ARD_STEPPER_STEPS);
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setTooltip(Blockly.Msg.ARD_STEPPER_STEP_TIP);
        },
        /**
         * Called whenever anything on the workspace changes.
         * It checks/warns if the selected stepper instance has a config block.
         * @this Blockly.Block
         */
        onchange: function() {
            if (!this.workspace) return; // Block has been deleted.

            var instanceName = this.getFieldValue('STEPPER_NAME')
            if (Blockly.Instances.isInstancePresent(instanceName, 'Stepper', this)) {
                this.setWarningText(null);
            } else {
                // Set a warning to select a valid stepper config block
                this.setWarningText(
                    Blockly.Msg.ARD_COMPONENT_WARN1.replace(
                        '%1', Blockly.Msg.ARD_STEPPER_COMPONENT).replace(
                        '%2', instanceName));
            }
        }
    };
}
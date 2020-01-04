/**
 *	Botly Robot Blocks Library
 *	    La Machinerie 2017
 *
 *
 *   Author: Adrien Bracq, Jules Topart
 */

module.exports = function(Blockly, MSG) {
    /** Common HSV hue for all blocks in this category. */
    //Blockly.Blocks.botly.HUE = 60;
    Blockly.FieldAngle.OFFSET = 90;
    Blockly.Blocks['start_mutator_setup'] = {
        init: function() {
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(MSG['botlyStartSetup'])
                .appendField(new Blockly.FieldCheckbox("FALSE"), "SETUP");
            this.setInputsInline(false);
            this.setPreviousStatement(false, null);
            this.setNextStatement(true, null);
            this.setColour(180);
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['start'] = {
        init: function() {
            //Blockly.BlockSvg.START_HAT = true;
            this.appendDummyInput()
                .appendField(MSG['botlyStartTitle']);
            this.appendDummyInput('DUMLOOP')
                .appendField(new Blockly.FieldImage("https://cdn1.iconfinder.com/data/icons/materia-arrows-symbols-vol-4/24/018_083_arrow_lap_cycle_repeat-256.png", 25, 25, "*"))
                .appendField(MSG['botlyStartMainLoop']);
            this.appendStatementInput("LOOP");
            this.setInputsInline(true);
            this.setPreviousStatement(false, null);
            this.setNextStatement(false, null);
            this.setColour(180);
            this.setTooltip(MSG["botlyStartTooltip"]);
            this.setHelpUrl("");
            this.setStyle("hat_blocks");
            this.setInputsInline(false);
            this.jsonInit({ "mutator": "start_mutator_setup" });
        }
    };



    var LOOP_MUTATOR_MIXIN = {
        setup_: false,
        loop_: true,
        isRendered: false,
        /**
         * Create XML to represent the number inputs.
         * @return {Element} XML storage element.
         * @this Blockly.Block
         */
        mutationToDom: function() {
            if (!this.setup_) {
                return null;
            }
            var container = document.createElement('mutation');
            if (this.setup_) {
                container.setAttribute('setup', this.setup_);
            }
            return container;
        },
        /**
         * Parse XML to restore the inputs.
         * @param {!Element} xmlElement XML storage element.
         * @this Blockly.Block
         */
        domToMutation: function(xmlElement) {
            this.setup_ = xmlElement.getAttribute('setup') || false;
            this.updateShape_();
        },
        /**
         * Populate the mutator's dialog with this block's components.
         * @param {!Blockly.Workspace} workspace Mutator's workspace.
         * @return {!Blockly.Block} Root block in mutator.
         * @this Blockly.Block
         */
        decompose: function(workspace) {
            var containerBlock = workspace.newBlock('start_mutator_setup');
            containerBlock.setFieldValue(new Blockly.FieldCheckbox(this.setup_), "SETUP");
            containerBlock.initSvg();
            return containerBlock;
        },
        /**
         * Reconfigure this block based on the mutator dialog's components.
         * @param {!Blockly.Block} containerBlock Root block in mutator.
         * @this Blockly.Block
         */
        compose: function(containerBlock) {
            // Set states
            this.setup_ = (containerBlock.getFieldValue("SETUP") == "TRUE");
            this.updateShape_();
            // Reconnect any child blocks.
            Blockly.Mutator.reconnect(containerBlock.valueConnection_, this, 'LOOP');
        },
        /**
         * Store pointers to any connected child blocks.
         * @param {!Blockly.Block} containerBlock Root block in mutator.
         * @this Blockly.Block
         */
        saveConnections: function(containerBlock) {
            var loop = this.getInput('LOOP');
            containerBlock.valueConnection_ = loop && loop.connection.targetConnection;
        },
        /**
         * Modify this block to have the correct number of inputs.
         * @this Blockly.Block
         * @private
         */
        updateShape_: function() {
            // Delete everything.
            if (this.getInput('SETUP')) this.removeInput('SETUP');
            if (this.getInput('DUMSETUP')) this.removeInput('DUMSETUP');
            if (this.getInput('LOOP')) this.removeInput('LOOP');
            if (this.getInput('DUMLOOP')) this.removeInput('DUMLOOP');
            // Rebuild block.
            if (this.setup_) {
                this.appendDummyInput('DUMSETUP')
                    .appendField(new Blockly.FieldImage("https://cdn1.iconfinder.com/data/icons/media-60/12/Vector-3-512.png", 25, 25, "*"))
                    .appendField(MSG["botlyStartSetup"]);
                this.appendStatementInput("SETUP");

            }
            this.appendDummyInput('DUMLOOP')
                .appendField(new Blockly.FieldImage("https://cdn1.iconfinder.com/data/icons/materia-arrows-symbols-vol-4/24/018_083_arrow_lap_cycle_repeat-256.png", 25, 25, "*"))
                .appendField(MSG["botlyStartMainLoop"]);
            this.appendStatementInput("LOOP");
        }
    };

    Blockly.Extensions.registerMutator('start_mutator_setup', LOOP_MUTATOR_MIXIN, null, [""])

    Blockly.Blocks['botly_angle'] = {
        init: function() {
            this.appendDummyInput()
                .appendField(new Blockly.FieldAngle(90), "ANGLE");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        },
        onchange: function(e) {
            var pBlock = this.getParent();
            if (pBlock)
                if (e.blockId == pBlock.id || e.newValue == pBlock.id) {
                    var dir = pBlock.getFieldValue('DIR');
                    if (dir == 'gauche') {
                        Blockly.FieldAngle.CLOCKWISE = false;
                    } else
                    if (dir == 'droite') {
                        Blockly.FieldAngle.CLOCKWISE = true;
                    }
                }
        }
    };

    Blockly.Blocks['botly_deplacement'] = {
        init: function() {
            this.appendDummyInput()
                .appendField(new Blockly.FieldDropdown([
                    [MSG["botlyForward"], "avancer"],
                    [MSG["botlyBackward"], "reculer"]
                ]), 'DIR')
                .appendField(MSG["botlyBy"])
                .appendField(
                    new Blockly.FieldTextInput(
                        '50', Blockly.FieldTextInput.numberValidator),
                    'VALUE')
                .appendField("mm");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };


    Blockly.Blocks['botly_rotation'] = {
        init: function() {
            this.appendDummyInput()
                .appendField(MSG["botlyTurn"])
                .appendField(new Blockly.FieldDropdown([
                    [MSG["botlyLeft"], "gauche"],
                    [MSG["botlyRight"], "droite"]
                ]), "DIR")
                .appendField(MSG["botlyBy"])
                .appendField(new Blockly.FieldAngle(90), "VALUE")
                .appendField("°");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        },
        onchange: function(e) {
            if (e) {
                if (e.blockId == this.id || e.newValue == this.id) {
                    var dir = this.getFieldValue('DIR');
                    if (dir == 'gauche') {
                        Blockly.FieldAngle.CLOCKWISE = false;
                    } else
                    if (dir == 'droite') {
                        Blockly.FieldAngle.CLOCKWISE = true;
                    }
                }
            }
        }
    };

    Blockly.Blocks['botly_deplacement_adv'] = {
        init: function() {
            this.appendDummyInput()
                .appendField(new Blockly.FieldDropdown([
                    [MSG["botlyForward"], "avancer"],
                    [MSG["botlyBackward"], "reculer"]
                ]), 'DIR')
                .appendField(MSG["botlyBy"]);
            this.appendValueInput('dist')
                .setCheck("Number");
            this.appendDummyInput()
                .appendField("mm");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setInputsInline(true);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };


    Blockly.Blocks['botly_rotation_adv'] = {
        init: function() {
            this.appendDummyInput()
                .appendField(MSG["botlyTurn"])
                .appendField(new Blockly.FieldDropdown([
                    [MSG["botlyLeft"], "gauche"],
                    [MSG["botlyRight"], "droite"]
                ]), "DIR")
                .appendField(MSG["botlyBy"]);
            this.appendValueInput('angle')
                .setCheck("Number");
            this.appendDummyInput()
                .appendField("°");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setInputsInline(true);
            this.setHelpUrl("");
        }
    };



    Blockly.Blocks['botly_stop'] = {
        init: function() {
            this.appendDummyInput()
                .appendField(MSG["botlyStop"])
                .appendField(
                    new Blockly.FieldTextInput(
                        '10', Blockly.FieldTextInput.numberValidator),
                    'time')
                .appendField("ms");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(180);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['botly_stop_adv'] = {
        init: function() {
            this.appendDummyInput()
                .appendField(MSG["botlyStop"])
            this.appendValueInput('time')
                .setCheck('Number');
            this.appendDummyInput()
                .appendField("ms");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(180);
            this.setTooltip("");
            this.setHelpUrl("");
            this.setInputsInline(true);
        }
    };

    Blockly.Blocks['botly_turn_go'] = {
        init: function() {
            this.appendDummyInput()
                .appendField(MSG["botlyTurnAdv"]);
            this.appendValueInput('angle')
                .setCheck("Number")
            this.appendDummyInput()
                .appendField("°")
                .appendField(MSG["botlyAndGo"]);
            this.appendValueInput('dist')
                .setCheck("Number")
                .appendField("mm");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(180);
            this.setInputsInline(true);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };


    Blockly.Blocks['botly_crayon_adv'] = {
        init: function() {
            this.appendDummyInput()
                .appendField(MSG["botlyPenAdv"]);
            this.appendValueInput('PEN')
                .setCheck('Boolean');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(60);
            this.setTooltip("");
            this.setInputsInline(true);
            this.setHelpUrl("");
        }
    };


    Blockly.Blocks['botly_crayon'] = {
        init: function() {
            this.appendDummyInput()
                .appendField(new Blockly.FieldDropdown([
                    [MSG["botlyPenUp"], "leverCrayon"],
                    [MSG["botlyPenDown"], "poserCrayon"]
                ]), "PEN")
                .appendField(MSG["boltyPen"]);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(60);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };


    Blockly.Blocks['botly_calibration'] = {
        init: function() {
            this.appendDummyInput()
                .appendField(MSG["botlyCalibration"])
                .appendField(new Blockly.FieldNumber(345, 0), "MM_TO_STEP")
                .appendField("pas/mm ")
                .appendField(new Blockly.FieldNumber(1861), "RAD_TO_STEP")
                .appendField("pas/rad");
            this.setNextStatement(false, null);
            this.setColour(300);
            this.setTooltip("");
            this.setHelpUrl("");
            this.setStyle("hat_blocks");
        }
    };


    Blockly.Blocks['botly_proximity'] = {
        init: function() {
            this.appendDummyInput()
                .appendField(new Blockly.FieldLabelSerializable("le robot"))
                .appendField(new Blockly.FieldDropdown([
                    ["ne détecte pas", "NON"],
                    ["détecte", "OUI"]
                ]), "ETAT")
                .appendField(new Blockly.FieldLabelSerializable("l'obstacle"));
            this.setInputsInline(true);
            this.setOutput(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

}


/**********************************
 *       
 *   Overwrite Blockly blocks
 *
 ***********************************/


Blockly.Blocks['controls_repeat_ext'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(decomposeMsg(Blockly.Msg["CONTROLS_REPEAT_TITLE"]).pre);
        this.appendValueInput("TIMES")
            .setCheck("Number")
        this.appendDummyInput()
            .appendField(decomposeMsg(Blockly.Msg["CONTROLS_REPEAT_TITLE"]).suf);
        this.appendStatementInput("DO")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip(Blockly.Msg["CONTROLS_REPEAT_TOOLTIP"]);
        this.setHelpUrl(Blockly.Msg["CONTROLS_REPEAT_HELPURL"]);
    }
};


function decomposeMsg(msg) {
    var prefix = '',
        valueId = 0,
        suffix = '';

    var i = msg.indexOf('%');
    if (i) {
        prefix = msg.substring(0, i);
        valueId = msg.substring(i + 1, i + 2);
        suffix = msg.substring(i + 2);
    }



    return { pre: prefix, val: valueId, suf: suffix }
}
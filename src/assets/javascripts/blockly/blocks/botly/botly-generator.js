module.exports = function(Blockly) {

    Blockly.Arduino['start'] = function(block) {
        //-------------------------------------------------------------------
        Blockly.Arduino.addInclude('Botly', '//Importation de la librarie Botly : \n#include <Botly.h>');
        Blockly.Arduino.addDeclaration('Botly', '//Déclaration du robot :\nBotly robot;');

        var setupCode = '//Initialisation du robot :\n  robot.init();';
        Blockly.Arduino.addSetup('Botly', setupCode, true);
        Blockly.Arduino.addSetup('Statement', '\n' + Blockly.Arduino.statementToCode(block, 'SETUP'), true);
        //-------------------------------------------------------------------
        var code = Blockly.Arduino.statementToCode(block, 'LOOP');
        return code;
    };

    Blockly.Arduino['botly_angle'] = function(block) {
        var value_angle = block.getFieldValue('ANGLE');
        var code = value_angle;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino['botly_turn_go'] = function(block) {
        var turn_go_angle = Blockly.Arduino.valueToCode(block, 'angle', Blockly.Arduino.ORDER_ATOMIC);

        var turn_go_distance = Blockly.Arduino.valueToCode(block, 'dist', Blockly.Arduino.ORDER_ATOMIC);

        //-------------------------------------------------------------------
        Blockly.Arduino.addInclude('Botly', '//Importation de la librarie Botly : \n#include <Botly.h>');
        Blockly.Arduino.addDeclaration('Botly', '//Déclaration du robot :\nBotly robot;');

        var setupCode = '//Initialisation du robot :\n  robot.init();';
        Blockly.Arduino.addSetup('Botly', setupCode, true);
        //-------------------------------------------------------------------
        var code = 'robot.turnGoDegree(' + turn_go_angle + ',' + turn_go_distance + ');\n';
        return code;
    };

    Blockly.Arduino['botly_deplacement'] = function(block) {
        var value_distance = block.getFieldValue('VALUE');
        var dropdown_type = block.getFieldValue('DIR');
        var code;
        //-------------------------------------------------------------------
        Blockly.Arduino.addInclude('Botly', '//Importation de la librarie Botly : \n#include <Botly.h>');
        Blockly.Arduino.addDeclaration('Botly', '//Déclaration du robot :\nBotly robot;');

        var setupCode = '//Initialisation du robot :\n  robot.init();';
        Blockly.Arduino.addSetup('Botly', setupCode, true);
        //-------------------------------------------------------------------
        switch (dropdown_type) {
            case 'avancer':
                code = 'robot.avancer(' + value_distance + ');\n';
                break;
            case 'reculer':
                code = 'robot.reculer(' + value_distance + ');\n';
                break;
        }
        return code;
    };

    Blockly.Arduino['botly_rotation'] = function(block) {
        var value_angle = block.getFieldValue('VALUE');
        var dropdown_type = block.getFieldValue('DIR');
        var code;
        //-------------------------------------------------------------------
        Blockly.Arduino.addInclude('Botly', '//Importation de la librarie Botly : \n#include <Botly.h>');
        Blockly.Arduino.addDeclaration('Botly', '//Déclaration du robot :\nBotly robot;');

        var setupCode = '//Initialisation du robot :\n  robot.init();';
        Blockly.Arduino.addSetup('Botly', setupCode, true);
        //-------------------------------------------------------------------
        switch (dropdown_type) {
            case 'droite':
                code = 'robot.tournerDroite(' + value_angle + ');\n';
                break;
            case 'gauche':
                code = 'robot.tournerGauche(' + value_angle + ');\n';
                break;
        }
        return code;
    };

    Blockly.Arduino['botly_crayon'] = function(block) {
        var dropdown_type = block.getFieldValue('PEN');
        var code;
        //-------------------------------------------------------------------
        Blockly.Arduino.addInclude('Botly', '//Importation de la librarie Botly : \n#include <Botly.h>');
        Blockly.Arduino.addDeclaration('Botly', '//Déclaration du robot :\nBotly robot;');

        var setupCode = '//Initialisation du robot :\n  robot.init();';
        Blockly.Arduino.addSetup('Botly', setupCode, true);
        //-------------------------------------------------------------------
        switch (dropdown_type) {
            case 'leverCrayon':
                code = 'robot.leverCrayon();\n';
                break;
            case 'poserCrayon':
                code = 'robot.poserCrayon();\n';
                break;
        }
        return code;
    };


    //ADV

    Blockly.Arduino['botly_deplacement_adv'] = function(block) {
        var value_distance = Blockly.Arduino.valueToCode(block, 'dist', Blockly.Arduino.ORDER_ATOMIC);
        var dropdown_type = block.getFieldValue('DIR');
        var code;
        //-------------------------------------------------------------------
        Blockly.Arduino.addInclude('Botly', '//Importation de la librarie Botly : \n#include <Botly.h>');
        Blockly.Arduino.addDeclaration('Botly', '//Déclaration du robot :\nBotly robot;');

        var setupCode = '//Initialisation du robot :\n  robot.init();';
        Blockly.Arduino.addSetup('Botly', setupCode, true);
        //-------------------------------------------------------------------
        switch (dropdown_type) {
            case 'avancer':
                code = 'robot.avancer(' + value_distance + ');\n';
                break;
            case 'reculer':
                code = 'robot.reculer(' + value_distance + ');\n';
                break;
        }
        return code;
    };

    Blockly.Arduino['botly_rotation_adv'] = function(block) {
        var value_angle = Blockly.Arduino.valueToCode(block, 'angle', Blockly.Arduino.ORDER_ATOMIC);
        var dropdown_type = block.getFieldValue('DIR');
        var code;
        //-------------------------------------------------------------------
        Blockly.Arduino.addInclude('Botly', '//Importation de la librarie Botly : \n#include <Botly.h>');
        Blockly.Arduino.addDeclaration('Botly', '//Déclaration du robot :\nBotly robot;');

        var setupCode = '//Initialisation du robot :\n  robot.init();';
        Blockly.Arduino.addSetup('Botly', setupCode, true);
        //-------------------------------------------------------------------
        switch (dropdown_type) {
            case 'droite':
                code = 'robot.tournerDroite(' + value_angle + ');\n';
                break;
            case 'gauche':
                code = 'robot.tournerGauche(' + value_angle + ');\n';
                break;
        }
        return code;
    };

    Blockly.Arduino['botly_crayon_adv'] = function(block) {
        var dropdown_type = Blockly.Arduino.valueToCode(block, 'PEN', Blockly.Arduino.ORDER_NONE);
        var code;
        //-------------------------------------------------------------------
        Blockly.Arduino.addInclude('Botly', '//Importation de la librarie Botly : \n#include <Botly.h>');
        Blockly.Arduino.addDeclaration('Botly', '//Déclaration du robot :\nBotly robot;');

        var setupCode = '//Initialisation du robot :\n  robot.init();';
        Blockly.Arduino.addSetup('Botly', setupCode, true);
        //-------------------------------------------------------------------
        if (dropdown_type == 'true') {
            code = 'robot.poserCrayon();\n';
        } else {
            code = 'robot.leverCrayon();\n';
        }
        return code;
    };

    Blockly.Arduino['botly_stop_adv'] = function(block) {
        var dropdown_type = Blockly.Arduino.valueToCode(block, 'time', Blockly.Arduino.ORDER_ATOMIC);
        var code;
        //-------------------------------------------------------------------
        Blockly.Arduino.addInclude('Botly', '//Importation de la librarie Botly : \n#include <Botly.h>');
        Blockly.Arduino.addDeclaration('Botly', '//Déclaration du robot :\nBotly robot;');

        var setupCode = '//Initialisation du robot :\n  robot.init();';
        Blockly.Arduino.addSetup('Botly', setupCode, true);
        //-------------------------------------------------------------------

        code = 'robot.stop(' + dropdown_type + ');\n';

        return code;
    };


    Blockly.Arduino['botly_calibration'] = function(block) {
        var number_mm_to_step = block.getFieldValue('MM_TO_STEP');
        var number_rad_to_step = block.getFieldValue('RAD_TO_STEP');
        var code = '';
        //-------------------------------------------------------------------
        Blockly.Arduino.addInclude('Botly', '//Importation de la librarie Botly : \n#include <Botly.h>');
        Blockly.Arduino.addDeclaration('Botly', '//Déclaration du robot :\nBotly robot;');

        var setupCode = '//Initialisation du robot :\n  robot.init();'
        Blockly.Arduino.addSetup('Botly', setupCode, true);
        setupCode = 'robot.setCalibration(' + number_mm_to_step + ',' + number_rad_to_step + ');\n';
        Blockly.Arduino.addSetup('calibration', setupCode, true);

        return code;
    };



    /*************************************
     *                                   *
     *        Python Generator           *
     *                                   *
     *************************************/

    //Python Botly block generator


    Blockly.Python['start'] = function(block) {

        var code = '# Déclaration: \ndef setup():\n';
        code += Blockly.Python.statementToCode(block, 'SETUP');
        code += 'def loop():\n';
        code += Blockly.Python.statementToCode(block, 'LOOP');
        code += '\n# Traitement: \nsetup()\n'
        code += '\nwhile True:\n  loop()'
        return code;
    };

    Blockly.Python['botly_angle'] = function(block) {
        var value_angle = block.getFieldValue('ANGLE');
        var code = value_angle;
        return [code, Blockly.Python.ORDER_ATOMIC];
    };


    Blockly.Python['botly_stop'] = function(block) {
        var stop_time = block.getFieldValue('time');
        var code = 'stop(' + stop_time + ');\n';
        return code;
    };


    Blockly.Python['botly_turn_go'] = function(block) {
        var turn_go_angle = block.getFieldValue('angle');
        var turn_go_distance = block.getFieldValue('distance');
        var code = 'turnGo(' + turn_go_angle + ',' + turn_go_distance + ');\n';
        return code;
    };


    Blockly.Python['botly_deplacement'] = function(block) {
        // Generate JavaScript for moving forward or backwards.
        var value = block.getFieldValue('VALUE');
        return block.getFieldValue('DIR') +
            '(' + value + ');\n';
    };

    Blockly.Python['botly_rotation'] = function(block) {
        // Generate JavaScript for turning left or right.
        var value = block.getFieldValue('VALUE');
        return block.getFieldValue('DIR') +
            '(' + value + ');\n';
    };

    Blockly.Python['botly_crayon'] = function(block) {
        // Generate JavaScript for pen up/down.
        return block.getFieldValue('PEN') +
            '();\n';
    };


    Blockly.Python['botly_crayon_adv'] = function(block) {
        var state = Blockly.Python.valueToCode(block, 'PEN', Blockly.Arduino.ORDER_ATOMIC);
        // Generate JavaScript for pen up/down.
        if (state == 'true') {
            return 'poserCrayon();\n';
        } else {
            return 'leverCrayon();\n';
        }
    };

    Blockly.Python['botly_deplacement_adv'] = function(block) {
        // Generate JavaScript for moving forward or backwards.
        var value = Blockly.Python.valueToCode(block, 'dist', Blockly.Arduino.ORDER_ATOMIC);

        return block.getFieldValue('DIR') +
            '(' + value + ');\n';
    };

    Blockly.Python['botly_rotation_adv'] = function(block) {
        // Generate JavaScript for turning left or right.
        var value = Blockly.Python.valueToCode(block, 'angle', Blockly.Arduino.ORDER_ATOMIC);
        return block.getFieldValue('DIR') +
            '(' + value + ');\n';
    };

    Blockly.Python['botly_calibration'] = function(block) {
        var number_mm_to_step = block.getFieldValue('MM_TO_STEP');
        var number_rad_to_step = block.getFieldValue('RAD_TO_STEP');
        var code;

        code = 'setCalibration(' + number_mm_to_step + ',' + number_rad_to_step + ');\n';

        return code;
    };



    /*************************************
     *                                   *
     *        JS Generator           *
     *                                   *
     *************************************/

    Blockly.JavaScript['start'] = function(block) {
        var code = '//Déclaration : \nfunction setup(){\n';
        code += Blockly.JavaScript.statementToCode(block, 'SETUP');
        code += '}\n\nfunction loop(){\n';
        code += Blockly.JavaScript.statementToCode(block, 'LOOP');
        code += '}\n\n//Traitement : \nsetup();\n'
        code += '\nwhile(true){\n  loop();\n}'
        return code;
    };

    Blockly.JavaScript['botly_angle'] = function(block) {
        var value_angle = block.getFieldValue('ANGLE');
        var code = value_angle;
        return [code, Blockly.JavaScript.ORDER_ATOMIC];
    };

    Blockly.JavaScript['botly_deplacement'] = function(block) {
        // Generate JavaScript for moving forward or backwards.
        var value = block.getFieldValue('VALUE');
        return block.getFieldValue('DIR') +
            '(' + value + ', "' + block.id + '");\n';
    };

    Blockly.JavaScript['botly_rotation'] = function(block) {
        // Generate JavaScript for turning left or right.
        var value = block.getFieldValue('VALUE');
        return block.getFieldValue('DIR') +
            '(' + value + ', "' + block.id + '");\n';
    };

    Blockly.JavaScript['botly_crayon'] = function(block) {
        // Generate JavaScript for pen up/down.
        return block.getFieldValue('PEN') +
            '("' + block.id + '");\n';
    };

    Blockly.JavaScript['botly_crayon_adv'] = function(block) {
        var state = Blockly.JavaScript.valueToCode(block, 'PEN', Blockly.JavaScript.ORDER_ATOMIC);
        // Generate JavaScript for pen up/down.
        if (state == 'true') {
            return 'poserCrayon("' + block.id + '");\n';
        } else {
            return 'leverCrayon("' + block.id + '");\n';
        }
    };

    Blockly.JavaScript['botly_deplacement_adv'] = function(block) {
        // Generate JavaScript for moving forward or backwards.
        var value = Blockly.JavaScript.valueToCode(block, 'dist', Blockly.JavaScript.ORDER_ATOMIC);

        return block.getFieldValue('DIR') +
            '(' + value + ', "' + block.id + '");\n';
    };

    Blockly.JavaScript['botly_rotation_adv'] = function(block) {
        // Generate JavaScript for turning left or right.
        var value = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
        return block.getFieldValue('DIR') +
            '(' + value + ', "' + block.id + '");\n';
    };


    Blockly.JavaScript['botly_turn_go'] = function(block) {
        // Generate JavaScript for pen up/down.
        var angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
        var dist = Blockly.JavaScript.valueToCode(block, 'dist', Blockly.JavaScript.ORDER_ATOMIC);

        return 'turnGo' +
            '(' + angle + ', ' + dist + ', "' + block.id + '");\n';

    };

    Blockly.JavaScript['botly_stop'] = function(block) {
        return 'none' +
            '("' + block.id + '");\n';
    };

    Blockly.JavaScript['botly_stop_adv'] = function(block) {
        return 'none' +
            '("' + block.id + '");\n';
    };

    Blockly.JavaScript['botly_calibration'] = function(block) {
        return 'none' +
            '("' + block.id + '");\n';
    };


    Blockly.JavaScript['arduino_functions'] = function(block) {
        var branch = Blockly.JavaScript.statementToCode(block, 'SETUP_FUNC');
        var code = '';
        if (branch) {
            code += '//Setup :\n' + branch;
        }

        branch = Blockly.JavaScript.statementToCode(block, 'LOOP_FUNC');

        if (branch) {
            code += '//Loop :\nwhile(true){\n' + branch + '}';
        }
        return code + '\n';
    };

    /**
     * Code generator for the wait forever (end of program) block
     * Arduino code: loop { while(true); }
     * @param {!Blockly.Block} block Block to generate the code from.
     * @return {string} Completed code.
     */
    Blockly.JavaScript['infinite_loop'] = function(block) {
        return 'while(true);\n';
    };
}
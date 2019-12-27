var Blockly = Blockly || require('node-blockly/browser');

module.exports = function(app) {

    app.LOCALISED_TEXT = {
        translationLanguage: "English",
        title: "Botly-studio",
        blocks: "Blocks",
        /* Menu */
        open: "Open",
        save: "Save",
        deleteAll: "Delete All",
        settings: "Settings",
        documentation: "Documentation",
        reportBug: "Report Bug",
        examples: "Examples",
        /* Settings */
        defaultIdeButton: "Default IDE Button",
        defaultIdeButtonDefault: "IDE options unknown",
        language: "Language",
        languageDefault: "Language unknown",
        sketchName: "Sketch Name",
        /* Arduino console output */
        arduinoOpMainTitle: "Arduino IDE output",
        arduinoOpWaiting: "Waiting for the IDE output...",
        arduinoOpUploadedTitle: "Successfully Uploaded Sketch",
        arduinoOpVerifiedTitle: "Successfully Verified Sketch",
        arduinoOpOpenedTitle: "Sketch opened in IDE",
        arduinoOpOpenedBody: "The sketch should be loaded in the Arduino IDE.",
        arduinoOpErrorUpVerTitle: "Build or Upload failed",
        arduinoOpErrorSketchTitle: "Sketch not found",
        arduinoOpErrorFlagTitle: "Invalid command line argument",
        arduinoOpErrorFlagPrefTitle: "Preference passed to 'get-pref' flag does not exist",
        arduinoOpErrorIdeDirTitle: "Unable to find Arduino IDE",
        arduinoOpErrorIdeDirBody: "The compiler directory has not been set.<br>" +
            "Please set it in the Settings.",
        arduinoOpErrorIdeOptionTitle: "What should we do with the Sketch?",
        arduinoOpErrorIdeOptionBody: "The launch IDE option has not been set.<br>" +
            "Please select an IDE option in the Settings.",
        arduinoOpErrorIdePortTitle: "Serial Port unavailable",
        arduinoOpErrorIdePortBody: "The Serial Port is not accessible.<br>" +
            "Please check if the Arduino is correctly connected to the PC and select the Serial Port in the Settings.",
        arduinoOpErrorIdeBoardTitle: "Unknown Arduino Board",
        arduinoOpErrorIdeBoardBody: "The Arduino Board has not been set.<br>" +
            "Please select the appropriate Arduino Board from the settings.",
        /* Modals */
        noServerTitle: "Ardublockly app not running",
        noServerTitleBody: "<p>For all the Ardublockly features to be enabled, the Ardublockly desktop application must be running locally on your computer.</p>" +
            "<p>If you are using an online version you will not be able to configure the settings nor load the blocks code into an Arduino.</p>" +
            "<p>Installation instruction can be found in the <a href=\"https://github.com/carlosperate/ardublockly\">Ardublockly repository</a>.</p>" +
            "<p>If you have Ardublockly already installed, make sure the application is running correctly.</p>",
        noServerNoLangBody: "If the Ardublockly application is not running the language cannot be fully changed.",
        addBlocksTitle: "Additional Blocks",
        /* Alerts */
        loadNewBlocksTitle: "Load new blocks?",
        loadNewBlocksBody: "Loading a new XML file will replace the current blocks from the workspace.<br>" +
            "Are you sure you want to proceed?",
        discardBlocksTitle: "Delete blocks?",
        discardBlocksBody: "There are %1 blocks on the workspace.<br>" +
            "Are you sure you want to delete them?",
        invalidXmlTitle: "Invalid XML",
        invalidXmlBody: "The XML file was not successfully parsed into blocks. Please review the XML code and try again.",
        /* Tooltips */
        uploadingSketch: "Uploading Sketch into Arduino...",
        uploadSketch: "Upload Sketch to the Arduino",
        verifyingSketch: "Verifying Sketch...",
        verifySketch: "Verify the Sketch",
        openingSketch: "Opening Sketch in the Arduino IDE...",
        openSketch: "Open Sketch in IDE",
        notImplemented: "Function not yet implemented",
        /* Prompts */
        ok: "OK",
        okay: "Okay",
        cancel: "Cancel",
        return: "Return",
        /* Cards */
        arduinoSourceCode: "Arduino Source Code",
        blocksXml: "Blocks XML",
        /* Toolbox Categories*/
        catLogic: "Logic",
        catLoops: "Loops",
        catMath: "Math",
        catText: "Text",
        catVariables: "Variables",
        catFunctions: "Functions",
        catInputOutput: "Input/Output",
        catTime: "Time",
        catAudio: "Audio",
        catMotors: "Motors",
        catComms: "Comms",
    }


    Blockly.Msg.ADD_COMMENT = "Add Comment";
    Blockly.Msg.ARD_ANALOGREAD = "read analog pin#";
    Blockly.Msg.ARD_ANALOGREAD_TIP = "Return value between 0 and 1024";
    Blockly.Msg.ARD_ANALOGWRITE = "set analog pin#";
    Blockly.Msg.ARD_ANALOGWRITE_TIP = "Write analog value between 0 and 255 to a specific PWM Port";
    Blockly.Msg.ARD_BUILTIN_LED = "set built-in LED";
    Blockly.Msg.ARD_BUILTIN_LED_TIP = "Light on or off for the built-in LED of the Arduino";
    Blockly.Msg.ARD_COMPONENT_WARN1 = "A %1 configuration block with the same %2 name must be added to use this block!";
    Blockly.Msg.ARD_DEFINE = "Define";
    Blockly.Msg.ARD_DIGITALREAD = "read digital pin#";
    Blockly.Msg.ARD_DIGITALREAD_TIP = "Read digital value on a pin: HIGH or LOW";
    Blockly.Msg.ARD_DIGITALWRITE = "set digitial pin#";
    Blockly.Msg.ARD_DIGITALWRITE_TIP = "Write digital value HIGH or LOW to a specific Port";
    Blockly.Msg.ARD_FUN_RUN_LOOP = "Arduino loop forever:";
    Blockly.Msg.ARD_FUN_RUN_SETUP = "Arduino run first:";
    Blockly.Msg.ARD_FUN_RUN_TIP = "Defines the Arduino setup() and loop() functions.";
    Blockly.Msg.ARD_HIGH = "HIGH";
    Blockly.Msg.ARD_HIGHLOW_TIP = "Set a pin state logic High or Low.";
    Blockly.Msg.ARD_LOW = "LOW";
    Blockly.Msg.ARD_MAP = "Map";
    Blockly.Msg.ARD_MAP_TIP = "Re-maps a number from [0-1024] to another.";
    Blockly.Msg.ARD_MAP_VAL = "value to [0-";
    Blockly.Msg.ARD_NOTONE = "Turn off tone on pin #";
    Blockly.Msg.ARD_NOTONE_PIN = "No tone PIN#";
    Blockly.Msg.ARD_NOTONE_PIN_TIP = "Stop generating a tone on a pin";
    Blockly.Msg.ARD_NOTONE_TIP = "Turns the tone off on the selected pin";
    Blockly.Msg.ARD_PIN_WARN1 = "Pin %1 is needed for %2 as pin %3. Already used as %4.";
    Blockly.Msg.ARD_PULSEON = "pulse on pin #";
    Blockly.Msg.ARD_PULSEREAD = "Read";
    Blockly.Msg.ARD_PULSETIMEOUT = "timeout after";
    Blockly.Msg.ARD_PULSETIMEOUT_MS = "";
    Blockly.Msg.ARD_PULSETIMEOUT_TIP = "Measures the duration of a pulse on the selected pin, if it is within the timeout.";
    Blockly.Msg.ARD_PULSE_TIP = "Measures the duration of a pulse on the selected pin.";
    Blockly.Msg.ARD_SERIAL_BPS = "bps";
    Blockly.Msg.ARD_SERIAL_PRINT = "print";
    Blockly.Msg.ARD_SERIAL_PRINT_NEWLINE = "add new line";
    Blockly.Msg.ARD_SERIAL_PRINT_TIP = "Prints data to the console/serial port as human-readable ASCII text.";
    Blockly.Msg.ARD_SERIAL_PRINT_WARN = "A setup block for %1 must be added to the workspace to use this block!";
    Blockly.Msg.ARD_SERIAL_SETUP = "Setup";
    Blockly.Msg.ARD_SERIAL_SETUP_TIP = "Selects the speed for a specific Serial peripheral";
    Blockly.Msg.ARD_SERIAL_SPEED = ":  speed to";
    Blockly.Msg.ARD_SERVO_READ = "read SERVO from PIN#";
    Blockly.Msg.ARD_SERVO_READ_TIP = "Read a Servo angle";
    Blockly.Msg.ARD_SERVO_WRITE = "set SERVO from Pin";
    Blockly.Msg.ARD_SERVO_WRITE_DEG_180 = "Degrees (0~180)";
    Blockly.Msg.ARD_SERVO_WRITE_TIP = "Set a Servo to an specified angle";
    Blockly.Msg.ARD_SERVO_WRITE_TO = "to";
    Blockly.Msg.ARD_SETTONE = "Set tone on pin #";
    Blockly.Msg.ARD_SPI_SETUP = "Setup";
    Blockly.Msg.ARD_SPI_SETUP_CONF = "configuration:";
    Blockly.Msg.ARD_SPI_SETUP_DIVIDE = "clock divide";
    Blockly.Msg.ARD_SPI_SETUP_LSBFIRST = "LSBFIRST";
    Blockly.Msg.ARD_SPI_SETUP_MODE = "SPI mode (idle - edge)";
    Blockly.Msg.ARD_SPI_SETUP_MODE0 = "0 (Low - Falling)";
    Blockly.Msg.ARD_SPI_SETUP_MODE1 = "1 (Low - Rising)";
    Blockly.Msg.ARD_SPI_SETUP_MODE2 = "2 (High - Falling)";
    Blockly.Msg.ARD_SPI_SETUP_MODE3 = "3 (High - Rising)";
    Blockly.Msg.ARD_SPI_SETUP_MSBFIRST = "MSBFIRST";
    Blockly.Msg.ARD_SPI_SETUP_SHIFT = "data shift";
    Blockly.Msg.ARD_SPI_SETUP_TIP = "Configures the SPI peripheral.";
    Blockly.Msg.ARD_SPI_TRANSRETURN_TIP = "Send a SPI message to an specified slave device and get data back.";
    Blockly.Msg.ARD_SPI_TRANS_NONE = "none";
    Blockly.Msg.ARD_SPI_TRANS_SLAVE = "to slave pin";
    Blockly.Msg.ARD_SPI_TRANS_TIP = "Send a SPI message to an specified slave device.";
    Blockly.Msg.ARD_SPI_TRANS_VAL = "transfer";
    Blockly.Msg.ARD_SPI_TRANS_WARN1 = "A setup block for %1 must be added to the workspace to use this block!";
    Blockly.Msg.ARD_SPI_TRANS_WARN2 = "Old pin value %1 is no longer available.";
    Blockly.Msg.ARD_STEPPER_COMPONENT = "stepper";
    Blockly.Msg.ARD_STEPPER_DEFAULT_NAME = "MyStepper";
    Blockly.Msg.ARD_STEPPER_MOTOR = "stepper motor:";
    Blockly.Msg.ARD_STEPPER_PIN1 = "pin1#";
    Blockly.Msg.ARD_STEPPER_PIN2 = "pin2#";
    Blockly.Msg.ARD_STEPPER_REVOLVS = "how many steps per revolution";
    Blockly.Msg.ARD_STEPPER_SETUP = "Setup stepper motor";
    Blockly.Msg.ARD_STEPPER_SETUP_TIP = "Configures a stepper motor pinout and other settings.";
    Blockly.Msg.ARD_STEPPER_SPEED = "set speed (rpm) to";
    Blockly.Msg.ARD_STEPPER_STEP = "move stepper";
    Blockly.Msg.ARD_STEPPER_STEPS = "steps";
    Blockly.Msg.ARD_STEPPER_STEP_TIP = "Turns the stepper motor a specific number of steps.";
    Blockly.Msg.ARD_TIME_DELAY = "wait";
    Blockly.Msg.ARD_TIME_DELAY_MICROS = "microseconds";
    Blockly.Msg.ARD_TIME_DELAY_MICRO_TIP = "Wait specific time in microseconds";
    Blockly.Msg.ARD_TIME_DELAY_TIP = "Wait specific time in milliseconds";
    Blockly.Msg.ARD_TIME_INF = "wait forever (end program)";
    Blockly.Msg.ARD_TIME_INF_TIP = "Wait indefinitely, stopping the program.";
    Blockly.Msg.ARD_TIME_MICROS = "current elapsed Time (microseconds)";
    Blockly.Msg.ARD_TIME_MICROS_TIP = "Returns the number of microseconds since the Arduino board began running the current program. Has to be stored in a positive long integer";
    Blockly.Msg.ARD_TIME_MILLIS = "current elapsed Time (milliseconds)";
    Blockly.Msg.ARD_TIME_MILLIS_TIP = "Returns the number of milliseconds since the Arduino board began running the current program. Has to be stored in a positive long integer";
    Blockly.Msg.ARD_TIME_MS = "milliseconds";
    Blockly.Msg.ARD_TONEFREQ = "at frequency";
    Blockly.Msg.ARD_TONE_FREQ = "frequency";
    Blockly.Msg.ARD_TONE_PIN = "Tone PIN#";
    Blockly.Msg.ARD_TONE_PIN_TIP = "Generate audio tones on a pin";
    Blockly.Msg.ARD_TONE_TIP = "Sets tone on pin to specified frequency within range 31 - 65535";
    Blockly.Msg.ARD_TONE_WARNING = "Frequency must be in range 31 - 65535";
    Blockly.Msg.ARD_TYPE_ARRAY = "Array";
    Blockly.Msg.ARD_TYPE_BOOL = "Boolean";
    Blockly.Msg.ARD_TYPE_CHAR = "Character";
    Blockly.Msg.ARD_TYPE_CHILDBLOCKMISSING = "ChildBlockMissing";
    Blockly.Msg.ARD_TYPE_DECIMAL = "Decimal";
    Blockly.Msg.ARD_TYPE_LONG = "Large Number";
    Blockly.Msg.ARD_TYPE_NULL = "Null";
    Blockly.Msg.ARD_TYPE_NUMBER = "Number";
    Blockly.Msg.ARD_TYPE_SHORT = "Short Number";
    Blockly.Msg.ARD_TYPE_TEXT = "Text";
    Blockly.Msg.ARD_TYPE_UNDEF = "Undefined";
    Blockly.Msg.ARD_VAR_AS = "as";
    Blockly.Msg.ARD_VAR_AS_TIP = "Sets a value to a specific type";
    Blockly.Msg.ARD_WRITE_TO = "to";

    /// Ardublockly instances
    Blockly.Msg.NEW_INSTANCE = 'New instance...';
    Blockly.Msg.RENAME_INSTANCE = 'Rename instance...';
    Blockly.Msg.NEW_INSTANCE_TITLE = 'New instance name:';
    Blockly.Msg.RENAME_INSTANCE_TITLE = 'Rename all "%1" instance to:';
}
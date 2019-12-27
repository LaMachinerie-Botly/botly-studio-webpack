Blockly.Msg = Blockly.Msg || require('node-blockly/browser').Msg;

module.exports = function(app) {

    app.LOCALISED_TEXT = {
        translationLanguage: 'Español',
        title: "Botly Studio",
        blocks: "Bloques",
        /* Menu */
        open: "Abrir",
        save: "Guardar",
        deleteAll: "Borrar todo",
        settings: "Opciones",
        documentation: "Documentación",
        reportBug: "Reportar Fallo",
        examples: "Ejemplos",
        /* Settings */
        defaultIdeButton: "Botón de IDE por defecto",
        defaultIdeButtonDefault: "Opción de IDE desconocida",
        language: "Lenguaje",
        languageDefault: "Lenguaje desconocido",
        sketchName: "Nombre del Sketch",
        /* Arduino console output */
        arduinoOpMainTitle: "Salida del Arduino IDE",
        arduinoOpWaiting: "Esperando la salida del Arduino IDE...",
        arduinoOpUploadedTitle: "Sketch subido exitosamente",
        arduinoOpVerifiedTitle: "Sketch verificado exitosamente",
        arduinoOpOpenedTitle: "Sketch abierto en el IDE",
        arduinoOpOpenedBody: "El sketch debería estar cargado en el IDE de Arduino.",
        arduinoOpErrorUpVerTitle: "Fallo en la construcción o subida",
        arduinoOpErrorSketchTitle: "Sketch no encontrado",
        arduinoOpErrorFlagTitle: "Argumento invalido en la linea de comandos",
        arduinoOpErrorFlagPrefTitle: "Preferencia pasada a la bandera 'get-pref' no existe",
        arduinoOpErrorIdeDirTitle: "Incapaz de encontrar el Arduino IDE",
        arduinoOpErrorIdeDirBody: "El directorio del compilador no ha sido configurado.<br>" +
            "Por favor configuralo en las Opciones.",
        arduinoOpErrorIdeOptionTitle: "¿Que debemos hacer con el Sketch?",
        arduinoOpErrorIdeOptionBody: "La opción de cargar el Arduino IDE no ha sido configurada.<br>" +
            "Por favor, selecciona una opción del IDE en las Opciones.",
        arduinoOpErrorIdePortTitle: "Puerto communicaciones no disponible",
        arduinoOpErrorIdePortBody: "El puerto de comunicaciones no es accesible.<br>" +
            "Por favor, asegurate si el Arduino esta correctamente conectado al ordenador y si el puerto correcto esta selecionado en las Opciones.",
        arduinoOpErrorIdeBoardTitle: "Placa de Arduino desconocida",
        arduinoOpErrorIdeBoardBody: "La placa de Arduino no ha sido seleccionada.<br>" +
            "Por favor, selecciona la placa adecuada en las Opciones.",
        /* Modals */
        noServerTitle: "Aplicación Ardublockly sin ejecutar",
        noServerTitleBody: "<p>Para que todas las funciones de Ardublockly estén disponibles, la aplicación de escritorio de Ardublockly debe de estar ejecutándose en su ordenador.</p>" +
            "<p>Si estas usando una versión online no seras capaz de configurar las opciones o cargar el código de los bloques en un Arduino.</p>" +
            "<p>Puedes encontrar las instrucciones de instalación en el <a href=\"https://github.com/carlosperate/ardublockly\">repositorio de Ardublockly</a>.</p>" +
            "<p>Si ya tienes Ardublockly instalado, asegurate de que la aplicación este ejecutándose de forma correcta.</p>",
        noServerNoLangBody: "Si la aplicación de Ardublockly no esta ejecutándose el lenguaje no puede cargarse de forma completa.",
        addBlocksTitle: "Bloques Adicionales",
        /* Alerts */
        loadNewBlocksTitle: "¿Cargar bloques nuevos?",
        loadNewBlocksBody: "Cargar un nuevo archivo XML reemplazara los bloques actuales.<br>" +
            "¿Estas seguro de proceder?",
        discardBlocksTitle: "¿Borrar todos los bloques?",
        discardBlocksBody: "Hay %1 bloques en el area de trabajo.<br>" +
            "¿Estas seguro de borrarlos?",
        invalidXmlTitle: "XML invalido",
        invalidXmlBody: "El archivo XML no a sido convertido en bloques exitosamente. Por favor revisa el código XML e intentalo de nuevo.",
        /* Tooltips */
        uploadingSketch: "Subiendo el Sketch al Arduino...",
        uploadSketch: "Subir el Sketch al Arduino",
        verifyingSketch: "Verificando el Sketch...",
        verifySketch: "Verificar el Sketch",
        openingSketch: "Abriendo el Sketch en el Arduino IDE...",
        openSketch: "Abrir el Sketch en el IDE",
        notImplemented: "Función no implementada todavía",
        /* Prompts */
        ok: "OK",
        okay: "Okay",
        cancel: "Cancelar",
        return: "Volver",
        /* Cards */
        arduinoSourceCode: "Codigo de Arduino",
        blocksXml: "Bloques XML",
        /* Toolbox Categories*/
        catLogic: "Lógica",
        catLoops: "Secuencias",
        catMath: "Matemáticas",
        catText: "Texto",
        catVariables: "Variables",
        catFunctions: "Funciones",
        catInputOutput: "Input/Output",
        catTime: "Tiempo",
        catAudio: "Audio",
        catMotors: "Motores",
        catComms: "Comunicación",
    };

    Blockly.Msg.ADD_COMMENT = "Añadir comentario";
    Blockly.Msg.ARD_ANALOGREAD = "read analog pin#"; // untranslated
    Blockly.Msg.ARD_ANALOGREAD_TIP = "Return value between 0 and 1024"; // untranslated
    Blockly.Msg.ARD_ANALOGWRITE = "set analog pin#"; // untranslated
    Blockly.Msg.ARD_ANALOGWRITE_TIP = "Write analog value between 0 and 255 to a specific PWM Port"; // untranslated
    Blockly.Msg.ARD_BUILTIN_LED = "set built-in LED"; // untranslated
    Blockly.Msg.ARD_BUILTIN_LED_TIP = "Light on or off for the built-in LED of the Arduino"; // untranslated
    Blockly.Msg.ARD_COMPONENT_WARN1 = "A %1 configuration block with the same %2 name must be added to use this block!"; // untranslated
    Blockly.Msg.ARD_DEFINE = "Define"; // untranslated
    Blockly.Msg.ARD_DIGITALREAD = "read digital pin#"; // untranslated
    Blockly.Msg.ARD_DIGITALREAD_TIP = "Read digital value on a pin: HIGH or LOW"; // untranslated
    Blockly.Msg.ARD_DIGITALWRITE = "set digitial pin#"; // untranslated
    Blockly.Msg.ARD_DIGITALWRITE_TIP = "Write digital value HIGH or LOW to a specific Port"; // untranslated
    Blockly.Msg.ARD_FUN_RUN_LOOP = "Arduino loop forever:"; // untranslated
    Blockly.Msg.ARD_FUN_RUN_SETUP = "Arduino run first:"; // untranslated
    Blockly.Msg.ARD_FUN_RUN_TIP = "Defines the Arduino setup() and loop() functions."; // untranslated
    Blockly.Msg.ARD_HIGH = "HIGH"; // untranslated
    Blockly.Msg.ARD_HIGHLOW_TIP = "Set a pin state logic High or Low."; // untranslated
    Blockly.Msg.ARD_LOW = "LOW"; // untranslated
    Blockly.Msg.ARD_MAP = "Map"; // untranslated
    Blockly.Msg.ARD_MAP_TIP = "Re-maps a number from [0-1024] to another."; // untranslated
    Blockly.Msg.ARD_MAP_VAL = "value to [0-"; // untranslated
    Blockly.Msg.ARD_NOTONE = "Turn off tone on pin #"; // untranslated
    Blockly.Msg.ARD_NOTONE_PIN = "No tone PIN#"; // untranslated
    Blockly.Msg.ARD_NOTONE_PIN_TIP = "Stop generating a tone on a pin"; // untranslated
    Blockly.Msg.ARD_NOTONE_TIP = "Turns the tone off on the selected pin"; // untranslated
    Blockly.Msg.ARD_PIN_WARN1 = "Pin %1 is needed for %2 as pin %3. Already used as %4."; // untranslated
    Blockly.Msg.ARD_PULSEON = "pulse on pin #"; // untranslated
    Blockly.Msg.ARD_PULSEREAD = "Read"; // untranslated
    Blockly.Msg.ARD_PULSETIMEOUT = "timeout after"; // untranslated
    Blockly.Msg.ARD_PULSETIMEOUT_MS = ""; // untranslated
    Blockly.Msg.ARD_PULSETIMEOUT_TIP = "Measures the duration of a pulse on the selected pin, if it is within the timeout."; // untranslated
    Blockly.Msg.ARD_PULSE_TIP = "Measures the duration of a pulse on the selected pin."; // untranslated
    Blockly.Msg.ARD_SERIAL_BPS = "bps"; // untranslated
    Blockly.Msg.ARD_SERIAL_PRINT = "print"; // untranslated
    Blockly.Msg.ARD_SERIAL_PRINT_NEWLINE = "add new line"; // untranslated
    Blockly.Msg.ARD_SERIAL_PRINT_TIP = "Prints data to the console/serial port as human-readable ASCII text."; // untranslated
    Blockly.Msg.ARD_SERIAL_PRINT_WARN = "A setup block for %1 must be added to the workspace to use this block!"; // untranslated
    Blockly.Msg.ARD_SERIAL_SETUP = "Setup"; // untranslated
    Blockly.Msg.ARD_SERIAL_SETUP_TIP = "Selects the speed for a specific Serial peripheral"; // untranslated
    Blockly.Msg.ARD_SERIAL_SPEED = ":  speed to"; // untranslated
    Blockly.Msg.ARD_SERVO_READ = "read SERVO from PIN#"; // untranslated
    Blockly.Msg.ARD_SERVO_READ_TIP = "Read a Servo angle"; // untranslated
    Blockly.Msg.ARD_SERVO_WRITE = "set SERVO from Pin"; // untranslated
    Blockly.Msg.ARD_SERVO_WRITE_DEG_180 = "Degrees (0~180)"; // untranslated
    Blockly.Msg.ARD_SERVO_WRITE_TIP = "Set a Servo to an specified angle"; // untranslated
    Blockly.Msg.ARD_SERVO_WRITE_TO = "to"; // untranslated
    Blockly.Msg.ARD_SETTONE = "Set tone on pin #"; // untranslated
    Blockly.Msg.ARD_SPI_SETUP = "Setup"; // untranslated
    Blockly.Msg.ARD_SPI_SETUP_CONF = "configuration:"; // untranslated
    Blockly.Msg.ARD_SPI_SETUP_DIVIDE = "clock divide"; // untranslated
    Blockly.Msg.ARD_SPI_SETUP_LSBFIRST = "LSBFIRST"; // untranslated
    Blockly.Msg.ARD_SPI_SETUP_MODE = "SPI mode (idle - edge)"; // untranslated
    Blockly.Msg.ARD_SPI_SETUP_MODE0 = "0 (Low - Falling)"; // untranslated
    Blockly.Msg.ARD_SPI_SETUP_MODE1 = "1 (Low - Rising)"; // untranslated
    Blockly.Msg.ARD_SPI_SETUP_MODE2 = "2 (High - Falling)"; // untranslated
    Blockly.Msg.ARD_SPI_SETUP_MODE3 = "3 (High - Rising)"; // untranslated
    Blockly.Msg.ARD_SPI_SETUP_MSBFIRST = "MSBFIRST"; // untranslated
    Blockly.Msg.ARD_SPI_SETUP_SHIFT = "data shift"; // untranslated
    Blockly.Msg.ARD_SPI_SETUP_TIP = "Configures the SPI peripheral."; // untranslated
    Blockly.Msg.ARD_SPI_TRANSRETURN_TIP = "Send a SPI message to an specified slave device and get data back."; // untranslated
    Blockly.Msg.ARD_SPI_TRANS_NONE = "none"; // untranslated
    Blockly.Msg.ARD_SPI_TRANS_SLAVE = "to slave pin"; // untranslated
    Blockly.Msg.ARD_SPI_TRANS_TIP = "Send a SPI message to an specified slave device."; // untranslated
    Blockly.Msg.ARD_SPI_TRANS_VAL = "transfer"; // untranslated
    Blockly.Msg.ARD_SPI_TRANS_WARN1 = "A setup block for %1 must be added to the workspace to use this block!"; // untranslated
    Blockly.Msg.ARD_SPI_TRANS_WARN2 = "Old pin value %1 is no longer available."; // untranslated
    Blockly.Msg.ARD_STEPPER_COMPONENT = "stepper"; // untranslated
    Blockly.Msg.ARD_STEPPER_DEFAULT_NAME = "MyStepper"; // untranslated
    Blockly.Msg.ARD_STEPPER_MOTOR = "stepper motor:"; // untranslated
    Blockly.Msg.ARD_STEPPER_PIN1 = "pin1#"; // untranslated
    Blockly.Msg.ARD_STEPPER_PIN2 = "pin2#"; // untranslated
    Blockly.Msg.ARD_STEPPER_REVOLVS = "how many steps per revolution"; // untranslated
    Blockly.Msg.ARD_STEPPER_SETUP = "Setup stepper motor"; // untranslated
    Blockly.Msg.ARD_STEPPER_SETUP_TIP = "Configures a stepper motor pinout and other settings."; // untranslated
    Blockly.Msg.ARD_STEPPER_SPEED = "set speed (rpm) to"; // untranslated
    Blockly.Msg.ARD_STEPPER_STEP = "move stepper"; // untranslated
    Blockly.Msg.ARD_STEPPER_STEPS = "steps"; // untranslated
    Blockly.Msg.ARD_STEPPER_STEP_TIP = "Turns the stepper motor a specific number of steps."; // untranslated
    Blockly.Msg.ARD_TIME_DELAY = "wait"; // untranslated
    Blockly.Msg.ARD_TIME_DELAY_MICROS = "microseconds"; // untranslated
    Blockly.Msg.ARD_TIME_DELAY_MICRO_TIP = "Wait specific time in microseconds"; // untranslated
    Blockly.Msg.ARD_TIME_DELAY_TIP = "Wait specific time in milliseconds"; // untranslated
    Blockly.Msg.ARD_TIME_INF = "wait forever (end program)"; // untranslated
    Blockly.Msg.ARD_TIME_INF_TIP = "Wait indefinitely, stopping the program."; // untranslated
    Blockly.Msg.ARD_TIME_MICROS = "current elapsed Time (microseconds)"; // untranslated
    Blockly.Msg.ARD_TIME_MICROS_TIP = "Returns the number of microseconds since the Arduino board began running the current program. Has to be stored in a positive long integer"; // untranslated
    Blockly.Msg.ARD_TIME_MILLIS = "current elapsed Time (milliseconds)"; // untranslated
    Blockly.Msg.ARD_TIME_MILLIS_TIP = "Returns the number of milliseconds since the Arduino board began running the current program. Has to be stored in a positive long integer"; // untranslated
    Blockly.Msg.ARD_TIME_MS = "milliseconds"; // untranslated
    Blockly.Msg.ARD_TONEFREQ = "at frequency"; // untranslated
    Blockly.Msg.ARD_TONE_FREQ = "frequency"; // untranslated
    Blockly.Msg.ARD_TONE_PIN = "Tone PIN#"; // untranslated
    Blockly.Msg.ARD_TONE_PIN_TIP = "Generate audio tones on a pin"; // untranslated
    Blockly.Msg.ARD_TONE_TIP = "Sets tone on pin to specified frequency within range 31 - 65535"; // untranslated
    Blockly.Msg.ARD_TONE_WARNING = "Frequency must be in range 31 - 65535"; // untranslated
    Blockly.Msg.ARD_TYPE_ARRAY = "Array"; // untranslated
    Blockly.Msg.ARD_TYPE_BOOL = "Boolean"; // untranslated
    Blockly.Msg.ARD_TYPE_CHAR = "Character"; // untranslated
    Blockly.Msg.ARD_TYPE_CHILDBLOCKMISSING = "ChildBlockMissing"; // untranslated
    Blockly.Msg.ARD_TYPE_DECIMAL = "Decimal"; // untranslated
    Blockly.Msg.ARD_TYPE_LONG = "Large Number"; // untranslated
    Blockly.Msg.ARD_TYPE_NULL = "Null"; // untranslated
    Blockly.Msg.ARD_TYPE_NUMBER = "Number"; // untranslated
    Blockly.Msg.ARD_TYPE_SHORT = "Short Number"; // untranslated
    Blockly.Msg.ARD_TYPE_TEXT = "Text"; // untranslated
    Blockly.Msg.ARD_TYPE_UNDEF = "Undefined"; // untranslated
    Blockly.Msg.ARD_VAR_AS = "as"; // untranslated
    Blockly.Msg.ARD_VAR_AS_TIP = "Sets a value to a specific type"; // untranslated

}
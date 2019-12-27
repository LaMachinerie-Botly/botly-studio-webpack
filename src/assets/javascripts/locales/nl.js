Blockly.Msg = Blockly.Msg || require('node-blockly/browser').Msg;

module.exports = function(app) {

    app.LOCALISED_TEXT = {
        translationLanguage: "Nederlands",
        title: "Ardublockly",
        blocks: "Blocks",
        /* Menu */
        open: "Open",
        save: "Save",
        deleteAll: "Verwijder Alles",
        settings: "",
        documentation: "Documentatie",
        reportBug: "",
        examples: "Voorbeelden",
        /* Settings */
        defaultIdeButton: "",
        defaultIdeButtonDefault: "",
        language: "Taal",
        languageDefault: "Language onbekend",
        sketchName: "",
        /* Arduino console output */
        arduinoOpMainTitle: "",
        arduinoOpWaiting: "",
        arduinoOpUploadedTitle: "",
        arduinoOpVerifiedTitle: "",
        arduinoOpOpenedTitle: "",
        arduinoOpOpenedBody: "",
        arduinoOpErrorUpVerTitle: "",
        arduinoOpErrorSketchTitle: "",
        arduinoOpErrorFlagTitle: "",
        arduinoOpErrorFlagPrefTitle: "",
        arduinoOpErrorIdeDirTitle: "",
        arduinoOpErrorIdeDirBody: "",
        arduinoOpErrorIdeOptionTitle: "",
        arduinoOpErrorIdeOptionBody: "",
        arduinoOpErrorIdePortTitle: "",
        arduinoOpErrorIdePortBody: "",
        arduinoOpErrorIdeBoardTitle: "",
        arduinoOpErrorIdeBoardBody: "",
        /* Modals */
        noServerTitle: "",
        noServerTitleBody: "",
        addBlocksTitle: "",
        /* Alerts */
        loadNewBlocksTitle: "",
        loadNewBlocksBody: "",
        discardBlocksTitle: "",
        discardBlocksBody: "",
        invalidXmlTitle: "",
        invalidXmlBody: "",
        /* Tooltips */
        uploadingSketch: "",
        uploadSketch: "",
        verifyingSketch: "",
        verifySketch: "",
        openingSketch: "",
        openSketch: "",
        notImplemented: "",
        /* Prompts */
        ok: "OK",
        okay: "Okay",
        cancel: "Annuleer",
        return: "Terugkeer",
        /* Cards */
        arduinoSourceCode: "",
        blocksXml: "Blocks XML",
        /* Toolbox Categories*/
        catLogic: "Logica",
        catLoops: "Herhalen",
        catMath: "Wiskunde",
        catText: "Tekst",
        catVariables: "Variabelen",
        catFunctions: "Functies",
        catInputOutput: "In/Output",
        catTime: "Tijd",
        catAudio: "Audio",
        catMotors: "Motoren",
        catComms: "Comms",
    };

    Blockly.Msg.ADD_COMMENT = "Reactie toevoegen";
    Blockly.Msg.ARD_ANALOGREAD = "lees analoge pin#";
    Blockly.Msg.ARD_ANALOGREAD_TIP = "Geeft waarde terug tussen 0 and 1024 zoals gelezen op de analoge PIN";
    Blockly.Msg.ARD_ANALOGWRITE = "schrijf naar analoge pin#";
    Blockly.Msg.ARD_ANALOGWRITE_TIP = "Schrijf analoge waarde tussen 0 en 255 naar de opgegeven PWM PIN";
    Blockly.Msg.ARD_BUILTIN_LED = "schrijf naar ingebouwde LED";
    Blockly.Msg.ARD_BUILTIN_LED_TIP = "Licht aan of uit voor de ingebouwde LED op de Arduino";
    Blockly.Msg.ARD_COMPONENT_WARN1 = "Een %1 Definieer blok met dezelfde %1 naam moet toegevoegd worden om dit blok te gebruiken!";
    Blockly.Msg.ARD_DEFINE = "Definieer";
    Blockly.Msg.ARD_DIGITALREAD = "lees digitale pin#";
    Blockly.Msg.ARD_DIGITALREAD_TIP = "Geeft waarde terug gelezen op de digitale PIN: HOOG of LAAG";
    Blockly.Msg.ARD_DIGITALWRITE = "schrijf naar digitale pin#";
    Blockly.Msg.ARD_DIGITALWRITE_TIP = "Schrijf digitale waarde HOOG of LAAG naar de opgegeven PIN";
    Blockly.Msg.ARD_FUN_RUN_LOOP = "Arduino herhaal voor altijd:";
    Blockly.Msg.ARD_FUN_RUN_SETUP = "Arduino doe eerst:";
    Blockly.Msg.ARD_FUN_RUN_TIP = "Definieer de Arduino setup() en loop() functies.";
    Blockly.Msg.ARD_HIGH = "HOOG";
    Blockly.Msg.ARD_HIGHLOW_TIP = "Plaats een pin status op HOOG of LAAG.";
    Blockly.Msg.ARD_LOW = "LAAG";
    Blockly.Msg.ARD_MAP = "Herschaal";
    Blockly.Msg.ARD_MAP_TIP = "Herschaalt een getal in interval [0-1024] naar een ander getal in de gegeven schaal.";
    Blockly.Msg.ARD_MAP_VAL = "waarde naar [0-";
    Blockly.Msg.ARD_NOTONE = "Stop afspelen noot op pin#";
    Blockly.Msg.ARD_NOTONE_PIN = "Geen toon op PIN#";
    Blockly.Msg.ARD_NOTONE_PIN_TIP = "Stop met een toon op de gegeven pin";
    Blockly.Msg.ARD_NOTONE_TIP = "Stopt met een noot af te spelen op de gegeven pin";
    Blockly.Msg.ARD_PIN_WARN1 = "Pin %1 is nodig voor %2 als pin %3. Al gebruikt als %4.";
    Blockly.Msg.ARD_PULSEON = "puls op pin #";
    Blockly.Msg.ARD_PULSEREAD = "Lees een";
    Blockly.Msg.ARD_PULSETIMEOUT = "wacht maximaal";
    Blockly.Msg.ARD_PULSETIMEOUT_MS = "milliseconden";
    Blockly.Msg.ARD_PULSETIMEOUT_TIP = "Meet de duur van een puls op een geselecteerde pin, zolang het gebeurt binnen de opgegeven maximale duur (in milliseconden).";
    Blockly.Msg.ARD_PULSE_TIP = "Meet de duur van een puls op een geselecteerde pin.";
    Blockly.Msg.ARD_SERIAL_BPS = "bps";
    Blockly.Msg.ARD_SERIAL_PRINT = "print";
    Blockly.Msg.ARD_SERIAL_PRINT_NEWLINE = "naar nieuwe lijn";
    Blockly.Msg.ARD_SERIAL_PRINT_TIP = "Drukt de gegeven data naar de seriele poort als leesbare ASCII tekst (in Arduino IDE open de seriele poort met icoon rechtsboven).";
    Blockly.Msg.ARD_SERIAL_PRINT_WARN = "Een setup blok voor %1 moet toegevoegd worden aan de canvas om dit block te kunnen gebruiken!";
    Blockly.Msg.ARD_SERIAL_SETUP = "Start";
    Blockly.Msg.ARD_SERIAL_SETUP_TIP = "Selecteer de snelheid voor een seriele connectie";
    Blockly.Msg.ARD_SERIAL_SPEED = ":  zet snelheid op";
    Blockly.Msg.ARD_SERVO_READ = "lees Servo met pin";
    Blockly.Msg.ARD_SERVO_READ_TIP = "Lees de hoek van een Servo motor die met de gegeven pin connecteert";
    Blockly.Msg.ARD_SERVO_WRITE = "positioneer Servo met pin";
    Blockly.Msg.ARD_SERVO_WRITE_DEG_180 = "graden (0~180)";
    Blockly.Msg.ARD_SERVO_WRITE_TIP = "Positioneer een Servo motor naar de gegeven hoek";
    Blockly.Msg.ARD_SERVO_WRITE_TO = "naar";
    Blockly.Msg.ARD_SETTONE = "Speel noot op pin#";
    Blockly.Msg.ARD_SPI_SETUP = "Definieer";
    Blockly.Msg.ARD_SPI_SETUP_CONF = "configuratie:";
    Blockly.Msg.ARD_SPI_SETUP_DIVIDE = "klok divisie";
    Blockly.Msg.ARD_SPI_SETUP_LSBFIRST = "LSBFIRST";
    Blockly.Msg.ARD_SPI_SETUP_MODE = "SPI modus (idle - edge)";
    Blockly.Msg.ARD_SPI_SETUP_MODE0 = "0 (Low - Falling)";
    Blockly.Msg.ARD_SPI_SETUP_MODE1 = "1 (Low - Rising)";
    Blockly.Msg.ARD_SPI_SETUP_MODE2 = "2 (High - Falling)";
    Blockly.Msg.ARD_SPI_SETUP_MODE3 = "3 (High - Rising)";
    Blockly.Msg.ARD_SPI_SETUP_MSBFIRST = "MSBFIRST";
    Blockly.Msg.ARD_SPI_SETUP_SHIFT = "data shift";
    Blockly.Msg.ARD_SPI_SETUP_TIP = "Configureert een SPI randapparaat.";
    Blockly.Msg.ARD_SPI_TRANSRETURN_TIP = "Stuur een SPI bericht naar het opgegeven slaaf toestel en krijg data terug.";
    Blockly.Msg.ARD_SPI_TRANS_NONE = "geen";
    Blockly.Msg.ARD_SPI_TRANS_SLAVE = "naar slaaf pin";
    Blockly.Msg.ARD_SPI_TRANS_TIP = "Stuurt een SPI bericht naar het opgegeven slaaf toestel.";
    Blockly.Msg.ARD_SPI_TRANS_VAL = "stuur";
    Blockly.Msg.ARD_SPI_TRANS_WARN1 = "Een Defenitie blok voor %1 moet toegevoegd worden aan de canvas om dit blok te gebruiken!";
    Blockly.Msg.ARD_SPI_TRANS_WARN2 = "Oude pin waarde %1 is niet langer beschikbaar.";
    Blockly.Msg.ARD_STEPPER_COMPONENT = "stappenmotor";
    Blockly.Msg.ARD_STEPPER_DEFAULT_NAME = "MijnStappenMotor";
    Blockly.Msg.ARD_STEPPER_MOTOR = "";
    Blockly.Msg.ARD_STEPPER_PIN1 = "pin1#";
    Blockly.Msg.ARD_STEPPER_PIN2 = "pin2#";
    Blockly.Msg.ARD_STEPPER_REVOLVS = "aantal stappen per omwenteling";
    Blockly.Msg.ARD_STEPPER_SETUP = "Definieer stappenmotor ";
    Blockly.Msg.ARD_STEPPER_SETUP_TIP = "Configureert een stappenmotor, pinouts en andere waarden zoals rondes per minuut.";
    Blockly.Msg.ARD_STEPPER_SPEED = "zet snelheid (rpm) op";
    Blockly.Msg.ARD_STEPPER_STEP = "beweeg stappenmotor";
    Blockly.Msg.ARD_STEPPER_STEPS = "stappen";
    Blockly.Msg.ARD_STEPPER_STEP_TIP = "Draait de stappenmotor een opgegeven aantal stappen";
    Blockly.Msg.ARD_TIME_DELAY = "wacht";
    Blockly.Msg.ARD_TIME_DELAY_MICROS = "microseconden";
    Blockly.Msg.ARD_TIME_DELAY_MICRO_TIP = "Wacht de opgegeven tijd in microseconden (miljoensten van een seconde)";
    Blockly.Msg.ARD_TIME_DELAY_TIP = "Wacht de opgegeven tijd in milliseconden (duizendsten van een seconde)";
    Blockly.Msg.ARD_TIME_INF = "wacht voor eeuwig (beeindig programma)";
    Blockly.Msg.ARD_TIME_INF_TIP = "Wacht voor altijd, stopt het programma waar deze lijn staat.";
    Blockly.Msg.ARD_TIME_MICROS = "tijd sinds start (microseconden)";
    Blockly.Msg.ARD_TIME_MICROS_TIP = "Geeft aantal microseconden terug sinds start van de Arduino. Moet je opslaan in een positief lang geheel getal!";
    Blockly.Msg.ARD_TIME_MILLIS = "tijd sinds start (milliseconden)";
    Blockly.Msg.ARD_TIME_MILLIS_TIP = "Geeft aantal milliseconden terug sinds start van de Arduino. Moet je opslaan in een positief lang geheel getal!";
    Blockly.Msg.ARD_TIME_MS = "milliseconden";
    Blockly.Msg.ARD_TONEFREQ = "met frequentie";
    Blockly.Msg.ARD_TONE_FREQ = "met frequentie";
    Blockly.Msg.ARD_TONE_PIN = "Toon op PIN#";
    Blockly.Msg.ARD_TONE_PIN_TIP = "Genereert een geluidstoon op de PIN";
    Blockly.Msg.ARD_TONE_TIP = "Speelt een noot op de gegeven pin met de opgegeven frequentie binnen interval 31 - 65535";
    Blockly.Msg.ARD_TONE_WARNING = "Frequentie moet in het interval 31 - 65535 liggen";
    Blockly.Msg.ARD_TYPE_ARRAY = "Lijst";
    Blockly.Msg.ARD_TYPE_BOOL = "Bool (0 of 1)";
    Blockly.Msg.ARD_TYPE_CHAR = "Letter";
    Blockly.Msg.ARD_TYPE_CHILDBLOCKMISSING = "ChildBlockMissing";
    Blockly.Msg.ARD_TYPE_DECIMAL = "Decimaal Getal";
    Blockly.Msg.ARD_TYPE_LONG = "Groot Nummer";
    Blockly.Msg.ARD_TYPE_NULL = "Geen Type";
    Blockly.Msg.ARD_TYPE_NUMBER = "Nummer";
    Blockly.Msg.ARD_TYPE_SHORT = "Kort Nummer";
    Blockly.Msg.ARD_TYPE_TEXT = "Tekst";
    Blockly.Msg.ARD_TYPE_UNDEF = "Ongedefineerd";
    Blockly.Msg.ARD_VAR_AS = "als";
    Blockly.Msg.ARD_VAR_AS_TIP = "Wijzigt de waarde in het gegeven type";
}
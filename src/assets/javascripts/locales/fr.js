Blockly.Msg = Blockly.Msg || require('node-blockly/browser').Msg;

module.exports = function(app) {

    app.LOCALISED_TEXT = {
        translationLanguage: "Français",
        title: "Botly Studio",
        blocks: "Blocs",
        /* Menu */
        open: "Ouvrir",
        save: "Enregistrer",
        deleteAll: "Abandonner Tous",
        settings: "Paramètre",
        documentation: "Documentation",
        reportBug: "Reporter un bug",
        examples: "Exemples",
        /* Settings */
        defaultIdeButton: "",
        defaultIdeButtonDefault: "",
        language: "Langue",
        languageDefault: "Langue inconnu",
        sketchName: "Nom de Sketch",
        /* Arduino console output */
        arduinoOpMainTitle: "Console Arduno IDE",
        arduinoOpWaiting: "Chargement de la reponse Arduino IDE ...",
        arduinoOpUploadedTitle: "Téléversement terminé",
        arduinoOpVerifiedTitle: "Compilation terminé",
        arduinoOpOpenedTitle: "Sketch ouvert dans l'IDE",
        arduinoOpOpenedBody: "Le Sketch est normalement ouvert dans l'IDE",
        arduinoOpErrorUpVerTitle: "La compilation ou le téléversement à échoué",
        arduinoOpErrorSketchTitle: "",
        arduinoOpErrorFlagTitle: "",
        arduinoOpErrorFlagPrefTitle: "",
        arduinoOpErrorIdeDirTitle: "Erreur: le chemin d'accès au compilateur n'est pas valide",
        arduinoOpErrorIdeDirBody: "Erreur: le chemin d'accès au compilateur n'est pas valide",
        arduinoOpErrorIdeOptionTitle: "",
        arduinoOpErrorIdeOptionBody: "L'option de démarage de l'IDE n'a pas encore été défini.<br>" +
            "Veuillez selectionner une option dans les paramètres.",
        arduinoOpErrorIdePortTitle: "Aucun port série disponible",
        arduinoOpErrorIdePortBody: "Erreur : Le port série ne réponds pas",
        arduinoOpErrorIdeBoardTitle: "",
        arduinoOpErrorIdeBoardBody: "",
        /* Modals */
        noServerTitle: "",
        noServerTitleBody: "",
        noServerNoLangBody: "",
        addBlocksTitle: "",
        /* Alerts */
        loadNewBlocksTitle: "",
        loadNewBlocksBody: "",
        discardBlocksTitle: "Attention !",
        discardBlocksBody: "En cliquant sur oui, vous allez perdre tout votre travail !",
        invalidXmlTitle: "",
        invalidXmlBody: "",
        /* Tooltips */
        uploadingSketch: "Téléversement...",
        uploadSketch: "Téléverser",
        verifyingSketch: "Vérification...",
        verifySketch: "Verifier",
        openingSketch: "Ouverture...",
        openSketch: "Ouvrir dans l'IDE",
        notImplemented: "",
        /* Prompts */
        ok: "OK",
        okay: "Valider",
        cancel: "Annuler",
        return: "Retour",
        /* Cards */
        arduinoSourceCode: "Source",
        blocksXml: "Blocs XML",
        /* Toolbox Categories*/
        catLogic: "Logique",
        catLoops: "Boucles",
        catMath: "Math",
        catText: "Texte",
        catVariables: "Variables",
        catFunctions: "Fonctions",
        catInputOutput: "Entree/Sortie",
        catTime: "Temps",
        catAudio: "Audio",
        catBotly: "Botly",
        catMotors: "Moteurs",
        catComms: "Comms",
        /*Botly category*/
        botlyStartSetup: "Initialisation",
        botlyStartTitle: "Début du programme",
        botlyStartMainLoop: "Boucle principale",
        botlyStartTooltip: "Bloc principal",
        botlyForward: "Avancer",
        botlyBackward: "Reculer",
        botlyTurn: "Tourner à",
        botlyRight: "droite",
        botlyLeft: "gauche",
        botlyBy: "de",
        botlyPenUp: "Lever",
        botlyPenDown: "Poser",
        boltyPen: "le crayon",
        botlyPenAdv: "Poser le crayon",
        botlyStop: "S'arrêter pendant",
        botlyTurnAdv: "Tourner de",
        botlyAndGo: " puis avancer de",
        botlyCalibration: "Calibrer le robot :"
    };


    Blockly.Msg.ADD_COMMENT = "Ajouter un commentaire";
    Blockly.Msg.ARD_ANALOGREAD = "Lecture du signal analogique #";
    Blockly.Msg.ARD_ANALOGREAD_TIP = "Valeur de retour entre 0 et 1024";
    Blockly.Msg.ARD_ANALOGWRITE = "Ecriture du signal analogique #";
    Blockly.Msg.ARD_ANALOGWRITE_TIP = "Ecrit une valeur analogique comprise entre 0 et 255 sur un port PWM spécifique";
    Blockly.Msg.ARD_BUILTIN_LED = "Configurer la DEL";
    Blockly.Msg.ARD_BUILTIN_LED_TIP = "Allumer ou éteindre la DEL de la carte";
    Blockly.Msg.ARD_COMPONENT_WARN1 = "A %1 configuration block with the same %2 name must be added to use this block!"; // untranslated
    Blockly.Msg.ARD_DEFINE = "Définir";
    Blockly.Msg.ARD_DIGITALREAD = "Lecture du signal numérique #";
    Blockly.Msg.ARD_DIGITALREAD_TIP = "Lecture de la valeur d'un signal numérique: HAUT ou BAS";
    Blockly.Msg.ARD_DIGITALWRITE = "Configuration du signal numérique #";
    Blockly.Msg.ARD_DIGITALWRITE_TIP = " Ecriture de la valeur HAUT ou BAS du signal numérique #";
    Blockly.Msg.ARD_FUN_RUN_LOOP = "Arduino boucle infinie:";
    Blockly.Msg.ARD_FUN_RUN_SETUP = "Arduino exécute en premier:";
    Blockly.Msg.ARD_FUN_RUN_TIP = "Definition de la configuration de l'Arduino: fonctions setup() et loop().";
    Blockly.Msg.ARD_HIGH = "HAUT";
    Blockly.Msg.ARD_HIGHLOW_TIP = " Configuration d'un signal à l'état HAUT ou BAS";
    Blockly.Msg.ARD_LOW = "BAS";
    Blockly.Msg.ARD_MAP = "Converti";
    Blockly.Msg.ARD_MAP_TIP = "Converti un nombre de la plage [0-1024].";
    Blockly.Msg.ARD_MAP_VAL = "valeur de [0-";
    Blockly.Msg.ARD_NOTONE = "Eteindre la tonalité du signal #";
    Blockly.Msg.ARD_NOTONE_PIN = "PAS de Signal de tonalité #";
    Blockly.Msg.ARD_NOTONE_PIN_TIP = "Arret de la génération de tonalité (son)sur un signal";
    Blockly.Msg.ARD_NOTONE_TIP = "Eteindre / Activer la tonalité du signal selectioné";
    Blockly.Msg.ARD_PIN_WARN1 = "Signal %1 est utilisé pour %2 alors que signal %3. Déjà utilisé en tant que %4.";
    Blockly.Msg.ARD_PULSEON = "Impulsion sur le signal #";
    Blockly.Msg.ARD_PULSEREAD = "Lecture";
    Blockly.Msg.ARD_PULSETIMEOUT = "délai de retard";
    Blockly.Msg.ARD_PULSETIMEOUT_MS = "";
    Blockly.Msg.ARD_PULSETIMEOUT_TIP = "Mesure la durée d'une pulsation sur le signal selectioné, dans le delai imparti";
    Blockly.Msg.ARD_PULSE_TIP = "Mesure la durée d'une pulsation sur le signal selectioné.";
    Blockly.Msg.ARD_SERIAL_BPS = "bps";
    Blockly.Msg.ARD_SERIAL_PRINT = "imprimer";
    Blockly.Msg.ARD_SERIAL_PRINT_NEWLINE = "ajouter une nouvelle ligne";
    Blockly.Msg.ARD_SERIAL_PRINT_TIP = "Imprime les données sur la console série en texte lisible ASCII.";
    Blockly.Msg.ARD_SERIAL_PRINT_WARN = "Un bloc de configuration pour %1 doit être ajouté à l'espace de travail afin d'utiliser ce bloc!";
    Blockly.Msg.ARD_SERIAL_SETUP = "Configuration";
    Blockly.Msg.ARD_SERIAL_SETUP_TIP = "Choisir la vitesse d'un périphérique série";
    Blockly.Msg.ARD_SERIAL_SPEED = ":  vitesse";
    Blockly.Msg.ARD_SERVO_READ = "Lecture du signal# du SERVO";
    Blockly.Msg.ARD_SERVO_READ_TIP = "Lecture d'un angle du SERVO";
    Blockly.Msg.ARD_SERVO_WRITE = "Configurer SERVO sur Patte";
    Blockly.Msg.ARD_SERVO_WRITE_DEG_180 = "Degrés (0~180)";
    Blockly.Msg.ARD_SERVO_WRITE_TIP = "Configurer un SERVO à un angle donné";
    Blockly.Msg.ARD_SERVO_WRITE_TO = "vers";
    Blockly.Msg.ARD_SETTONE = "Définir une tonalité sur le signal #";
    Blockly.Msg.ARD_SPI_SETUP = "Configuration";
    Blockly.Msg.ARD_SPI_SETUP_CONF = "configuration:";
    Blockly.Msg.ARD_SPI_SETUP_DIVIDE = "Division de fréquence";
    Blockly.Msg.ARD_SPI_SETUP_LSBFIRST = "LSBFIRST";
    Blockly.Msg.ARD_SPI_SETUP_MODE = "mode SPI  (idle - edge)";
    Blockly.Msg.ARD_SPI_SETUP_MODE0 = "0 (Bas - Descendant)";
    Blockly.Msg.ARD_SPI_SETUP_MODE1 = "1 (Bas - Montant)";
    Blockly.Msg.ARD_SPI_SETUP_MODE2 = "2 (Haut - Descendant)";
    Blockly.Msg.ARD_SPI_SETUP_MODE3 = "3 (Haut - Montant)";
    Blockly.Msg.ARD_SPI_SETUP_MSBFIRST = "MSBFIRST";
    Blockly.Msg.ARD_SPI_SETUP_SHIFT = "décalage de données";
    Blockly.Msg.ARD_SPI_SETUP_TIP = "Configuration du périphérique SPI.";
    Blockly.Msg.ARD_SPI_TRANSRETURN_TIP = "Envoie d'un message SPI à un esclave précis et recuperation de la donnée.";
    Blockly.Msg.ARD_SPI_TRANS_NONE = "vide";
    Blockly.Msg.ARD_SPI_TRANS_SLAVE = "vers le signal esclave";
    Blockly.Msg.ARD_SPI_TRANS_TIP = "Envoie d'un message SPI à un esclave précis.";
    Blockly.Msg.ARD_SPI_TRANS_VAL = "transfert";
    Blockly.Msg.ARD_SPI_TRANS_WARN1 = "Un bloc de configuration pour %1 doit être ajouté à l'espace de travail afin d'utiliser ce bloc!";
    Blockly.Msg.ARD_SPI_TRANS_WARN2 = "L'ancienne valeur du signal %1 n'est plus disponible.";
    Blockly.Msg.ARD_STEPPER_COMPONENT = "stepper"; // untranslated
    Blockly.Msg.ARD_STEPPER_DEFAULT_NAME = "MyStepper"; // untranslated
    Blockly.Msg.ARD_STEPPER_MOTOR = "Moteur pas-à-pas:";
    Blockly.Msg.ARD_STEPPER_PIN1 = "signal1 #";
    Blockly.Msg.ARD_STEPPER_PIN2 = "signal2 #";
    Blockly.Msg.ARD_STEPPER_REVOLVS = "Combien de pas par tour";
    Blockly.Msg.ARD_STEPPER_SETUP = "Configuration";
    Blockly.Msg.ARD_STEPPER_SETUP_TIP = "Configuration d'un moteur pas-à-pas: signaux et autres paramètres.";
    Blockly.Msg.ARD_STEPPER_SPEED = "Configuration de la vitesse(rpm) à";
    Blockly.Msg.ARD_STEPPER_STEP = "Déplacement grace au moteur pas-à-pas";
    Blockly.Msg.ARD_STEPPER_STEPS = "pas";
    Blockly.Msg.ARD_STEPPER_STEP_TIP = "Configurer le moteur pas-à-pas avec un nombre précis de pas.";
    Blockly.Msg.ARD_TIME_DELAY = "Délai d'attente de";
    Blockly.Msg.ARD_TIME_DELAY_MICROS = "microsecondes";
    Blockly.Msg.ARD_TIME_DELAY_MICRO_TIP = "Attendre un délai précis en microsecondes";
    Blockly.Msg.ARD_TIME_DELAY_TIP = "Attendre un délai précis en millisecondes";
    Blockly.Msg.ARD_TIME_INF = "Attente sans fin (fin du programme)";
    Blockly.Msg.ARD_TIME_INF_TIP = "Attente indéfinie, arrêt du programme.";
    Blockly.Msg.ARD_TIME_MICROS = "Temps écoulé (microsecondes)";
    Blockly.Msg.ARD_TIME_MICROS_TIP = "Renvoie le temps en microseconds depuis le lancement de ce programme sur la carte Arduino. Doit être stocké dans un Entier long positif";
    Blockly.Msg.ARD_TIME_MILLIS = "Temps écoulé (millisecondes)";
    Blockly.Msg.ARD_TIME_MILLIS_TIP = "Renvoie le temps en milliseconds depuis le lancement de ce programme sur la carte Arduino. Doit être stocké dans un Entier long positif";
    Blockly.Msg.ARD_TIME_MS = "millisecondes";
    Blockly.Msg.ARD_TONEFREQ = "à la frequence";
    Blockly.Msg.ARD_TONE_FREQ = "frequence";
    Blockly.Msg.ARD_TONE_PIN = "Signal de tonalité #";
    Blockly.Msg.ARD_TONE_PIN_TIP = "Génération de tonalité (son)sur un signal";
    Blockly.Msg.ARD_TONE_TIP = " Configurer le signal de tonalité dans la plage: 31 - 65535";
    Blockly.Msg.ARD_TONE_WARNING = "La fréquence doit être dans la plage 31 - 65535";
    Blockly.Msg.ARD_TYPE_ARRAY = "Tableau";
    Blockly.Msg.ARD_TYPE_BOOL = "Booléen";
    Blockly.Msg.ARD_TYPE_CHAR = "Charactère";
    Blockly.Msg.ARD_TYPE_CHILDBLOCKMISSING = "Dépendance manquante";
    Blockly.Msg.ARD_TYPE_DECIMAL = "Décimal";
    Blockly.Msg.ARD_TYPE_LONG = "Entier long";
    Blockly.Msg.ARD_TYPE_NULL = "Null";
    Blockly.Msg.ARD_TYPE_NUMBER = "Entier";
    Blockly.Msg.ARD_TYPE_SHORT = "Entier court";
    Blockly.Msg.ARD_TYPE_TEXT = "Texte";
    Blockly.Msg.ARD_TYPE_UNDEF = "Non défini";
    Blockly.Msg.ARD_VAR_AS = "comme";
    Blockly.Msg.ARD_VAR_AS_TIP = "Configure une valeur à un type précis";
    Blockly.Msg.ARD_WRITE_TO = "à";

    /// Ardublockly instances
    Blockly.Msg.NEW_INSTANCE = 'Nouvelle instance...';
    Blockly.Msg.RENAME_INSTANCE = 'Renomer l\'instance...';
    Blockly.Msg.NEW_INSTANCE_TITLE = 'Nom de la nouvelle instance:';
    Blockly.Msg.RENAME_INSTANCE_TITLE = 'Renomer toutes ces instances "%1" en:';
}
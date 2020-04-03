module.exports = function (app) {
    var Assistant = {};

    Assistant.init = function () {
        var instance = M.TapTarget.init(document.querySelectorAll('.tap-target'), { onOpen: Assistant.onOpen })[0];
        instance.open();
        app.bindClick_(document.getElementById("info"), function () {
            if (instance.isOpen) {
                instance.close();
            } else {
                instance.open();
                //document.getElementById("info").classList.remove('pulse');
            }

        });

        app.bindClick_("assistant-button", Assistant.buttonCallback);

        Assistant.setHeader("Nouvelle vidéo !");
        Assistant.setText("Bienvenu sur l’interface Botly-Studio ! Si vous arrivez ici pour la première fois, nous vous invitons à regarder ces quelques tutoriels de présentation et de prise en main de l’interface Botly-Studio");
        Assistant.setButton("Clique ici", "link", function(){
                var win = window.open("https://botly.lamachinerie.org/le-logiciel/botly-studio-en-ligne/tutoriels-en-vidéos", '_blank');
                win.focus();
            }
        );
    };

    Assistant.setHeader = function(text){
        document.getElementById("assistant-header").innerHTML = text;
    };

    Assistant.setText = function(text){
        document.getElementById("assistant-text").innerHTML = text;
    };

    Assistant.setButton = function(text, icon, callback){
        document.getElementById("assistant-button").className = "center waves-effect waves-light btn";
        document.getElementById('assistant-button').innerHTML = text + " <i class='material-icons left'>" + icon + "</i>";
        Assistant.buttonCallback = callback;
        app.bindClick_("assistant-button", Assistant.buttonCallback);
    };

    Assistant.buttonCallback = function(){};

    Assistant.hideButton = function(){
        document.getElementById("assistant-button").className = "visibility";
    };

    Assistant.hideImage = function(){
        document.getElementById("assistant-image").className = "visibility";
    };

    Assistant.setImage = function(path){
        document.getElementById("assistant-image");
    };

    Assistant.onOpen = function () { }
    app.Assistant = Assistant;
}
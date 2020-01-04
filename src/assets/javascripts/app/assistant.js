module.exports = function(app) {
    var Assistant = {};

    Assistant.init = function() {
        var instance = M.TapTarget.init(document.querySelectorAll('.tap-target'), { onOpen: Assistant.onOpen })[0];
        instance.open();
        app.bindClick_(document.getElementById("info"), function() {
            if (instance.isOpen) {
                instance.close();
            } else {
                instance.open();
                //document.getElementById("info").classList.remove('pulse');
            }

        });
    };

    Assistant.onOpen = function() {}
    app.Assistant = Assistant;
}
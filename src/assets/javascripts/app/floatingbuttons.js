module.exports = function (app) {
    app.FloatingButtons = {}

    app.FloatingButtons.buttonArray = [];
    app.FloatingButtons.buttonIconArray = [];
    app.FloatingButtons.buttonHandler = [];

    app.FloatingButtons.initFloatingButton = function () {
        app.FloatingButtons.buttonArray[0] = document.getElementById("floating_one");
        app.FloatingButtons.buttonArray[1] = document.getElementById("floating_two");
        app.FloatingButtons.buttonArray[2] = document.getElementById("floating_three");
        app.FloatingButtons.buttonArray[3] = document.getElementById("floating_four");
        app.FloatingButtons.buttonArray[4] = document.getElementById("floating_five");
        app.FloatingButtons.buttonArray[5] = document.getElementById("floating_six");

        app.FloatingButtons.buttonIconArray[0] = document.getElementById("floating_one_icon");
        app.FloatingButtons.buttonIconArray[1] = document.getElementById("floating_two_icon");
        app.FloatingButtons.buttonIconArray[2] = document.getElementById("floating_three_icon");
        app.FloatingButtons.buttonIconArray[3] = document.getElementById("floating_four_icon");
        app.FloatingButtons.buttonIconArray[4] = document.getElementById("floating_five_icon");
        app.FloatingButtons.buttonIconArray[5] = document.getElementById("floating_six_icon");

        app.FloatingButtons.resetAll();

        $('#pluginTab').on('click', function (e) {
            app.FloatingButtons.setPluginButtons();
        });
        $('#codeTab').on('click', function (e) {
            app.FloatingButtons.setCodeButtons();
        });
        $('#robotTab').on('click', function (e) {
            app.FloatingButtons.setRobotButtons();
        });
    };


    app.FloatingButtons.updateButton = function () {
        var pluginTab = document.getElementById('pluginTab');
        var codeTab = document.getElementById('codeTab');
        var robotTab = document.getElementById('robotTab');

        if (pluginTab.className.match('active')) {
            app.FloatingButtons.setPluginButtons();
        } else if (codeTab.className.match('active')) {
            app.FloatingButtons.setCodeButtons();
        } else if (robotTab.className.match('active')) {
            app.FloatingButtons.setRobotButtons();
        }
    };

    app.FloatingButtons.setPluginButtons = function () {
        app.FloatingButtons.resetAll();
        app.API.setPluginButtons();
    }

    app.FloatingButtons.setFloatingIcon = function (id, text) {
        if (text.includes("mdi-")) {
            this.buttonArray[id].style.display = "block";
            this.buttonIconArray[id].className = "mdi " + text + ' left';
        } else {
            this.buttonArray[id].style.display = "block";
            this.buttonIconArray[id].innerHTML = text;
            this.buttonIconArray[id].className = 'large material-icons left';
        }
    }

    app.FloatingButtons.resetAll = function () {
        app.FloatingButtons.buttonArray.forEach(element => {
            element.style.display = "none";
        });

    }


    app.FloatingButtons.bindElement = function (id, func) {
        // Need to ensure both, touch and click, events don't fire for the same thing
        var propagateOnce;
        var el = app.FloatingButtons.buttonArray[id]
        el.removeEventListener("ontouchend", app.FloatingButtons.buttonHandler[id]);
        el.removeEventListener("click", app.FloatingButtons.buttonHandler[id]);

        propagateOnce = function (e) {
            e.stopPropagation();
            e.preventDefault();
            func();
        };

        app.FloatingButtons.buttonHandler[id] = propagateOnce;
        el.addEventListener('ontouchend', app.FloatingButtons.buttonHandler[id]);
        el.addEventListener('click', app.FloatingButtons.buttonHandler[id]);
    }
}
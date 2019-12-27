module.exports = function(app) {


    app.Plugins = {};
    app.Plugins.plugins = [];

    app.Plugins.loaded = 0;

    app.Plugins.import = function() {
        //Turtle plugin
        app.Plugins.list(function() {
            app.Plugins.importPlugin('Simulation');
            app.Plugins.importPlugin('Code source');
            app.Plugins.importPlugin('Robot');
        })
    };

    app.Plugins.list = function(callback) {
        var list = new Array();
        $.ajax({
            url: "./plugins/plugins.json",
            success: function(data) {

                list = data;
                app.Plugins.plugins = list.installed;
                callback();
            }
        });
    }

    app.Plugins.idOf = function(name) {
        var id = 0;
        for (var id = 0; id < app.Plugins.plugins.length; id++) {
            if (app.Plugins.plugins[id].name == name) return id
        }
        return undefined;
    }


    app.Plugins.importPlugin = function(tabName) {
        app.API.changeTabEvents.push(function() { /*console.log('[Plugin]: Tab changed') */ });
        app.API.renderContents.push(function() { /*console.log('[Plugin]: Nothing to render') */ });
        $("#plugin" + app.Plugins.loaded).load('./plugins/' + app.Plugins.plugins[app.Plugins.loaded].name + '/index.html');
        $("#plugin" + app.Plugins.loaded + "Head").wrapInner(tabName);
        app.Plugins.loaded++;
    }
}
module.exports = function(app) {
    app.Difficulty = {};

    /**********************************
      Permet de réduire la quantité 
      de bloc en fonction du besoin
      1- Débutant (Bloc basique)
      2- Intermédiaire
      3- Comfirmé
      4- Expert (Tous les blocs)
    ***********************************/
    app.Difficulty.DIFFICULTY_NAME = {
        1: 'Novice',
        2: 'Debutant',
        3: 'Moyen',
        4: 'Expert'
    };

    /**********************************
      Permet de réduire la quantité 
      de bloc en fonction du besoin
      1- Débutant (Bloc basique)
      2- Intermédiaire
      3- Comfirmé
      4- Expert (Tous les blocs)
    ***********************************/
    app.Difficulty.DIFFICULTY = 1;

    app.Difficulty.init = function() {
        var diffMenu = document.getElementById('difficulty');
        diffMenu.options.length = 0;

        for (var diff in app.Difficulty.DIFFICULTY_NAME) {
            var option = new Option(app.Difficulty.DIFFICULTY_NAME[diff], diff);
            if (diff == 1) {
                option.selected = true;
            }
            diffMenu.options.add(option);
        }
        diffMenu.onchange = app.Difficulty.changeDifficulty;
    };


    /** Saves the blocks and reloads with a different language. */
    app.Difficulty.changeDifficulty = function() {
        var diffMenu = document.getElementById('difficulty');
        var diff = diffMenu.options[diffMenu.selectedIndex].value;
        app.Difficulty.DIFFICULTY = diff;
        app.Toolbox.changeToolbox();
        app.Blockly.applyToolbox();
        return;
    };

}
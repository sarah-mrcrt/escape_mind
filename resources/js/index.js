/**
 *
 * Appel du JavaScript
 *
 **/

/*-------- Generic --------*/
require('./generic/jquery-2.1.4.min');
/*--------  Packages --------*/
require('./package/fontawesome.min');
require('./package/gsap.min');
if (document.getElementById("home-page")) {
    require('./package/rellax.min');
    var rellax = new Rellax('.rellax', {
        breakpoints: [576, 768, 1201]
    });
}
/*-------- Layouts --------*/
require('./layouts/loader');
if (document.getElementById("game-page")) {
    require('./layouts/detecting_mobile');
    /*-------- Game --------*/
    require('./game/game.js');
    window.onbeforeunload = function () {
        return "Êtes-vous sûr de vouloir quitter cette page ?";
    };
}
// Avant custom_packages.js pour fonctionner
require('./layouts/mouse');
if (document.getElementById("home-page")) {
    require('./layouts/modal');
}
// /*--------  Web Components --------*/
// require('./web_components/scrollBar');
// require('./web_components/custom_package');
// require('./web_components/divers');

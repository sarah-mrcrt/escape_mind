/**
 *
 *  Progress Nav : Animation de la barre de navigation
 *
 * */

/* Mettre en évidence l'élément de menu actif en fonction de la position de défilement */
// Get all sections that have an ID defined
let sections = document.querySelectorAll("section[id]");
// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    // Get current scroll position
    let scrollY = window.pageYOffset;
    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");
        /*
        - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
        - To know which link needs an active class, we use sectionId letiable we are getting while looping through sections as an selector
        */
        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            document.querySelector("a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector("a[href*=" + sectionId + "]").classList.remove("active");
        }
    });
}

/* Vertical scroll indicator */
(function () {

    var indicator = $('#indicator');
    var counter = indicator.find('span');

    var win = jQuery(window);
    if (indicator.length) {
        var moveIndicator = debounce(function () {
            var viewportHeight = $(window).height();
            var documentHeight = $(document).height();
            var hasScrolled = $(window).scrollTop();

            var percent = (hasScrolled / (documentHeight - viewportHeight)) * 100;
            indicator.css("top", percent + "%");
            counter.html(Math.floor(percent) + "%");

        }, 10);
    }

    win.on("resize scroll", moveIndicator);

    function debounce(func, wait, immediate) {
        var timeout;

        return function () {
            var context = this,
                args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
}());

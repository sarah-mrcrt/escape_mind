/**
 *
 *  LOADER
 *
 * */

(function () {
    function id(v) {
        return document.getElementById(v);
    }

    function loadbar() {
        let ovrl = id("overlay"),
            prog = id("progress"),
            stat = id("progstat"),
            img = document.images,
            c = 0,
            tot = img.length;
        if (tot === 0) return doneLoading();

        function imgLoaded() {
            c += 1;
            var perc = ((100 / tot * c) << 0) + "%";
            prog.style.width = perc;
            stat.innerHTML = "Loading " + perc;
            if (c === tot) return doneLoading();
        }

        function doneLoading() {
            setTimeout(function () {
                ovrl.style.opacity = 0;
                ovrl.style.display = "none";
                document.getElementById("content").style.transition = "opacity 2s";
                document.getElementById("content").style.opacity = "100";
                document.getElementById("souris").style.transition = "opacity 2s";
                document.getElementById("souris").style.opacity = "100";
            }, 1200);
        }
        for (var i = 0; i < tot; i++) {
            var tImg = new Image();
            tImg.onload = imgLoaded;
            tImg.onerror = imgLoaded;
            tImg.src = img[i].src;
        }
    }
    document.addEventListener('DOMContentLoaded', loadbar, false);
}());

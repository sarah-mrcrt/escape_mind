/*
 * Enigme du coffre
 */

import changeAV from "../../game";
import addSound from "../../components/sound";
import updateInventory from "../gestionInventory";

export default function Coffre_Fort() {
    let html = document.getElementById("Coffre_Fort");
    let no_enigma = document.createElement("span");
    no_enigma.id = "modal_coffre_fort";
    no_enigma.classList = "enigme_modal";

    let bg = document.createElement("img");
    bg.id = "Coffre_Fort_bg";
    bg.src = html.src;

    let buttons = document.createElement("span");
    buttons.className = "code_buttons";

    let result = document.createElement("span");
    result.id = "code_coffre";

    let div_haut = document.createElement("span");
    div_haut.id = "div_haut";
    let div_bas = document.createElement("span");
    div_bas.id = "div_bas";

    let audio = document.createElement("audio");
    audio.id = "audio_Button";
    audio.className = "Foley";
    audio.hidden = true;
    audio.autoplay = false;
    audio.loop = false;
    audio.volume = 0.3;
    document.getElementById("Foley").appendChild(audio);

    for (let i = 0; i <= 10; i++) {
        let num = document.createElement("span");
        num.classList = "num hoverable";
        if (i === 10) {
            num.innerHTML = "<i class='fas fa-undo'></i>";
            num.classList += " reset";
            num.addEventListener("click", function () {
                result.innerText = "";
                audio.src = "./resources/game/room1/audios/Boutons_Coffre_fort.mp3";
                audio.play();

            });
        } else {
            num.innerText = i;
            num.addEventListener("click", function () {
                verif(i);
                audio.src = "./resources/game/room1/audios/Boutons_Coffre_fort.mp3";
                audio.play();
            });
        }
        if (i < 5) div_haut.appendChild(num);
        else div_bas.appendChild(num);
    }

    buttons.appendChild(div_haut);
    buttons.appendChild(div_bas);

    no_enigma.appendChild(result);
    no_enigma.appendChild(buttons);
    no_enigma.appendChild(bg);

    return no_enigma;
}

function verif(num) {
    let result = document.getElementById("code_coffre");

    if (result.innerText !== "CORRECTE" && result.innerText !== "ERREUR")
        result.innerText += num;

    if (result.innerText.length === 3) {
        if (result.innerText === "711" || result.innerText === "117") {
            result.innerText = "CORRECT";
            setTimeout(function () {
                addSound("./resources/game/global/correct.mp3", false);
            }, 250)
            updateInventory("PhotoUn", 1);
            setTimeout(function () {
                changeAV(5);
            }, 1000);
        }
    } else {
        if (result.innerText.length > 5) {
            result.innerText = "INCORRECT";
            addSound("./resources/game/global/wrong.mp3", false);
            setTimeout(function () {
                result.innerText = "";
            }, 500);
        }
    }
}

/**
 * Created by master on 01.03.16.
 */

function initialiseView() {
    var header = document.getElementsByClassName("button tile")[0];
    var body = document.body;
    var refresh = document.querySelector(".refresh");
    var main = document.querySelector("main");


    header.onclick = () => {
        body.classList.toggle("tiles")
    }

    refresh.onclick = () => {
        main.classList.toggle("faded");
        main.addEventListener("transitioned", onfadeout);
        body.classList.toggle("tiles");
    }
    prepareListitemSelection();

    function onfadeout() {
        main.removeEventListener("transitioned",onfadeout);
        main.classList.toogle("fadeout");
    }

    function getListItemName(li) {
        return li.childNodes[1].textContent;
    }

    function prepareListitemSelection() {
        var listitems = document.getElementsByTagName("li");
        var currentli = null;
        for (var i=0;i<listitems.length;i++) {
            currentli = listitems[i];
            currentli.onclick = () => {
                alert("selected: " + getListItemName(currentli));
            }
        }
        alert("currentli: " + currentli);
    }
}

window.onload = initialiseView;
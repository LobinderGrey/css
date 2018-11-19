/**
 * Created by master on 01.03.16.
 */

function initialiseView() {
    const header = document.getElementsByClassName("button tile")[0];
    const body = document.body;
    const refresh = document.querySelector(".refresh");
    const main = document.querySelector("main");
    const add = document.querySelector("button new-item");



    header.onclick = () => {
        main.classList.toggle("faded");
        main.addEventListener("transitionend",onfadeout);
    }

    refresh.onclick = () => {
        main.classList.toggle("faded");
        main.addEventListener("transitionend",onfadeout);
        //body.classList.toggle("tiles");

    }

    add.onclick = (evt) => {
        evt.stopPropagation();
        var obj = {name: "direm", src: "img/300:100.jpg"};
        addNewLi(obj,ul);
    }

    prepareListitemSelection();

    xhr("GET","data/listitems.json",null,(xhrobj) => {
       var listitems = JSON.parse(xhrobj.responseText);
       cosnole.log("get objects: ", listitems);
       listitems.forEach(obj => {
          addNewLi(obj,ul);
       });
    });

    function onfadeout() {
        main.removeEventListener("transitionend",onfadeout);
        setTimeout(() =>
        {
            main.classList.toggle("faded");
        }, 2500);
        body.classList.toggle("tiles");
    }

    function getListItemName(li) {
        return li.childNodes[1].textContent;
    }

    function prepareListitemSelection() {
        // var listitems = document.getElementsByTagName("li");
        // var currentli = null;
        // for (var i=0;i<listitems.length;i++) {
        //     currentli = listitems[i];
        //     currentli.onclick = () => {
        //        alert("selected: " + getListItemName(currentli));
        //    }
        // }
        // alert("currentli: " + currentli);

        const listitems = document.querySelector("main li");
        listitems.forEach(currentli => {
            currentli.onclick = (evt) => {
                alert("got event" + evt + "selected: " + getListItemName(currentli))
            }
        });
    }

    function addNewLi(obj, listroot) {
        alert("addNewLI(): " + JSON.stringify(obj));
        var newli = document.createElement("li");
        var img = document.createElement("img");
        img.src = obj.src;
        img.classList.add("align-left");
        newli.appendChild(img);

        var name = document.createTextNode(obj.name);
        newli.appendChild(name);

        listroot.appendChild(newli);

    }

    function lookupLi(el) {
        if(el.tagName == "LI") {
            return el;
        }
        else if (el.tagName == "BODY") {
            alert("Reached root of Tree. No LI found");
            return null;
        }

    }
}

window.onload = initialiseView;
"use strict";
var NewYear;
(function (NewYear) {
    window.addEventListener("load", handleLoad);
    //let serverPage: string = "http://localhost:5001/";
    //https://endabgabe-fireworks.herokuapp.com/
    let timeleft = 10;
    let startTimer;
    let formular;
    let pNumber;
    let pColor;
    let pSize;
    let pShape;
    let movingObjects = [];
    let startPage;
    let startButt;
    let gamePage;
    function handleLoad(_event) {
        console.log("load page");
        //richtige abschnitte sichtbar machen
        startPage = document.getElementById("startPage");
        startButt = document.getElementById("startButt");
        gamePage = document.getElementById("gamePage");
        startPage.style.display = "grid";
        startButt.style.display = "none";
        gamePage.style.display = "none";
        startTimer = window.setInterval(handleCountdown, 1000); //1000ms
    }
    function handleCountdown() {
        let countdown = document.getElementById("countdown");
        if (timeleft <= 0) {
            clearInterval(startTimer); //leeren
            countdown.innerText = "Frohes Neues!"; //Frohes Neues erscheint
            startButt.style.display = "initial"; //Button erscheint
            startButt.addEventListener("click", startFirework);
        }
        else {
            countdown.innerText = "Noch " + timeleft + " Sekunden";
            timeleft -= 1;
        }
    }
    function startFirework(_event) {
        //richtige abschnitte sichtbar machen
        startPage.style.display = "none";
        gamePage.style.display = "grid";
        let canvas = document.getElementById("canvas"); //Variable für Canvas
        NewYear.ctx = canvas.getContext("2d"); //Canvas Rendering Kontext wird auf dem Canvas element installiert.
        canvas.addEventListener("click", handleClick); //Click auf Canvas
        window.setInterval(update, 20); //Alle 0,02s Update
    }
    function update() {
        NewYear.ctx.fillStyle = "rgba(0,0,0,0.3)";
        NewYear.ctx.fillRect(0, 0, NewYear.ctx.canvas.width, NewYear.ctx.canvas.height);
        for (let movingObject of movingObjects) {
            movingObject.move(1 / 35);
            movingObject.draw();
        }
        for (let index = movingObjects.length - 1; index >= 0; index--) {
            if (movingObjects[index].expendable)
                movingObjects.splice(index, 1); // aus Array schneiden
        }
    }
    function handleClick(_event) {
        console.log("handle click");
        let mouseX = _event.offsetX; // offset besser wegen Grid (linke obere Ecke)
        let mouseY = _event.offsetY;
        formular = document.querySelector("form#userInterface");
        let formularData = new FormData(formular);
        pNumber = Number(formularData.get("pNumber"));
        pSize = Number(formularData.get("pSize"));
        pColor = String(formularData.get("pColor"));
        pShape = String(formularData.get("pShape"));
        console.log(pNumber);
        console.log(pSize);
        console.log(pColor);
        console.log(pShape);
        console.log(mouseX);
        console.log(mouseY);
        //Werte werden in der Konsole ausgegeben
        createParticle(mouseX, mouseY, pNumber, pColor, pSize, pShape);
    }
    function createParticle(_mouseX, _mouseY, _number, _color, _size, _shape) {
        let origin = new NewYear.Vector(_mouseX, _mouseY);
        let expandMin = 99;
        let expandMax = 200;
        let expandX = Math.floor(Math.random() * (expandMax - expandMin)) + expandMin;
        let expandY = Math.floor(Math.random() * (expandMax - expandMin)) + expandMin;
        for (let i = 0; i < _number; i++) {
            let radian = (Math.PI * 2) / _number;
            let px = Math.cos(radian * i) * expandX * Math.random() * 2; //Random Breite
            let py = Math.sin(radian * i) * expandY * Math.random() * 2; //Random höhe
            let speed = new NewYear.Vector(px, py);
            let particle = new NewYear.Particles(origin, speed, _color, pSize, pShape);
            movingObjects.push(particle);
        }
    }
})(NewYear || (NewYear = {}));
//# sourceMappingURL=main.js.map
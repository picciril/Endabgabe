"use strict";
var NewYear;
(function (NewYear) {
    window.addEventListener("load", handleLoad);
    //let serverPage: string = "http://localhost:5001/";
    //https://endabgabe-fireworks.herokuapp.com/
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
        startPage.style.display = "block";
        gamePage = document.getElementById("gamePage");
        gamePage.style.display = "none";
        startButt = document.getElementById("startButt");
        startButt.addEventListener("click", startFirework);
    }
    function startFirework(_event) {
        //richtige abschnitte sichtbar machen
        startPage = document.getElementById("startPage");
        startPage.style.display = "none";
        gamePage = document.getElementById("gamePage");
        gamePage.style.display = "block";
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        NewYear.ctx = canvas.getContext("2d");
        formular = document.querySelector("form#userInterface");
        //let saveButt: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#saveButt");
        //saveButt.addEventListener("click", sendDataToServer);
        //let loadButt: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#loadButt");
        //loadButt.addEventListener("click", getDataFromServer);
        canvas.addEventListener("click", handleClick);
        window.setInterval(update, 20);
    }
    function update() {
        NewYear.ctx.fillStyle = "rgba(0,0,0,0.2)";
        NewYear.ctx.fillRect(0, 0, NewYear.ctx.canvas.width, NewYear.ctx.canvas.height);
        for (let movingObject of movingObjects) {
            movingObject.move(1 / 50);
            movingObject.draw();
        }
        for (let index = movingObjects.length - 1; index >= 0; index--) {
            if (movingObjects[index].expendable)
                movingObjects.splice(index, 1);
        }
    }
    function handleClick(_event) {
        console.log("handle click");
        let mouseX = _event.clientX;
        let mouseY = _event.clientY;
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
        createParticle(mouseX, mouseY, pNumber, pColor, pSize, pShape);
    }
    function createParticle(_mouseX, _mouseY, _number, _color, _size, _shape) {
        let origin = new NewYear.Vector(_mouseX, _mouseY);
        let color = _color;
        for (let i = 0; i < _number; i++) {
            let radian = (Math.PI * 2) / _number;
            let px = Math.cos(radian * i) * 110 * Math.random() * 2;
            let py = Math.sin(radian * i) * 110 * Math.random() * 2;
            let velocity = new NewYear.Vector(px, py);
            let particle = new NewYear.Particles(origin, velocity, color, pSize, pShape);
            movingObjects.push(particle);
        }
    }
})(NewYear || (NewYear = {}));
//# sourceMappingURL=main.js.map
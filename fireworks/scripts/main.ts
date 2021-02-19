namespace NewYear {
  window.addEventListener("load", handleLoad);
  //let serverPage: string = "http://localhost:5001/";
  //https://endabgabe-fireworks.herokuapp.com/
  let timeleft: number = 10;
  let startTimer: number;
  let formular: HTMLFormElement;
  let pNumber: number;
  let pColor: string;
  let pSize: number;
  let pShape: string;
  let movingObjects: MovingObject[] = [];
  let startPage: HTMLDivElement;
  let startButt: HTMLButtonElement;
  let gamePage: HTMLDivElement;

  export let ctx: CanvasRenderingContext2D; 


  function handleLoad(_event: Event): void {
    console.log("load page");

    //richtige abschnitte sichtbar machen
    startPage = <HTMLDivElement>document.getElementById("startPage");
    startButt = <HTMLButtonElement>document.getElementById("startButt");
    gamePage = <HTMLDivElement>document.getElementById("gamePage");

    startPage.style.display = "grid";
    startButt.style.display = "none";
    gamePage.style.display = "none";

    startTimer = window.setInterval(handleCountdown, 1000); //1000ms
  }


  function handleCountdown(): void {
    let countdown: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("countdown");

    if (timeleft <= 0) {
      clearInterval(startTimer); //leeren
      countdown.innerText = "Frohes Neues!"; //Frohes Neues erscheint
      startButt.style.display = "initial"; //Button erscheint
      startButt.addEventListener("click", startFirework); 
    } else {
      countdown.innerText = "Noch " + timeleft + " Sekunden";
      timeleft -= 1;
    }

  }


  function startFirework(_event: Event): void {

    //richtige abschnitte sichtbar machen
    startPage.style.display = "none";
    gamePage.style.display = "grid";

    
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas"); //Variable für Canvas
    ctx = <CanvasRenderingContext2D>canvas.getContext("2d"); //Canvas Rendering Kontext wird auf dem Canvas element installiert.

    canvas.addEventListener("click", handleClick); //Click auf Canvas
    window.setInterval(update, 20); //Alle 0,02s Update
  }

  function update(): void {

    ctx.fillStyle = "rgba(0,0,0,0.3)"; 
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height); 

    for (let movingObject of movingObjects) {
      movingObject.move(1 / 35); 
      movingObject.draw();
    }

    for (let index: number = movingObjects.length - 1; index >= 0; index--) {
      if (movingObjects[index].expendable)
        movingObjects.splice(index, 1); // aus Array schneiden
    }

  }

  function handleClick(_event: MouseEvent): void {
    console.log("handle click");

    let mouseX: number = _event.offsetX; // offset besser wegen Grid (linke obere Ecke)
    let mouseY: number = _event.offsetY;
    formular = <HTMLFormElement>document.querySelector("form#userInterface");
    let formularData: FormData = new FormData(formular);

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

  function createParticle(_mouseX: number, _mouseY: number, _number: number, _color: string, _size: number, _shape: string): void {

    let origin: Vector = new Vector(_mouseX, _mouseY);

    let expandMin: number = 99;
    let expandMax: number = 200;
    let expandX: number = Math.floor(Math.random() * (expandMax - expandMin)) + expandMin;
    let expandY: number = Math.floor(Math.random() * (expandMax - expandMin)) + expandMin;

    for (let i: number = 0; i < _number; i++) {
      let radian: number = (Math.PI * 2) / _number;
      let px: number = Math.cos(radian * i) * expandX * Math.random() * 2; //Random Breite
      let py: number = Math.sin(radian * i) * expandY * Math.random() * 2; //Random höhe
      let speed: Vector = new Vector(px, py);
      let particle: MovingObject = new Particles(origin, speed, _color, pSize, pShape);
      movingObjects.push(particle);

    }
  }

}
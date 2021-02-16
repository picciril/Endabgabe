namespace NewYear {
  window.addEventListener("load", handleLoad);
  //let serverPage: string = "http://localhost:5001/";
  //https://endabgabe-fireworks.herokuapp.com/
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
    startPage.style.display = "block";

    gamePage = <HTMLDivElement>document.getElementById("gamePage");
    gamePage.style.display = "none";

    startButt = <HTMLButtonElement>document.getElementById("startButt");
    startButt.addEventListener("click", startFirework);

  }

  function startFirework(_event: Event): void {

    //richtige abschnitte sichtbar machen
    startPage = <HTMLDivElement>document.getElementById("startPage");
    startPage.style.display = "none";

    gamePage = <HTMLDivElement>document.getElementById("gamePage");
    gamePage.style.display = "block";

    let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if (!canvas)
      return;
    ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
    formular = <HTMLFormElement>document.querySelector("form#userInterface");

    //let saveButt: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#saveButt");
    //saveButt.addEventListener("click", sendDataToServer);
    //let loadButt: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#loadButt");
    //loadButt.addEventListener("click", getDataFromServer);

    canvas.addEventListener("click", handleClick);
    window.setInterval(update, 20);
  }

  function update(): void {

    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    for (let movingObject of movingObjects) {
      movingObject.move(1 / 50);
      movingObject.draw();
    }

    for (let index: number = movingObjects.length - 1; index >= 0; index--) {
      if (movingObjects[index].expendable)
        movingObjects.splice(index, 1);
    }

  }

  function handleClick(_event: MouseEvent): void {
    console.log("handle click");

    let mouseX: number = _event.clientX;
    let mouseY: number = _event.clientY;
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

    createParticle(mouseX, mouseY, pNumber, pColor, pSize, pShape);
  }

  function createParticle(_mouseX: number, _mouseY: number, _number: number, _color: string, _size: number, _shape: string): void {

    let origin: Vector = new Vector(_mouseX, _mouseY);
    let color: string = _color;

    for (let i: number = 0; i < _number; i++) {
      let radian: number = (Math.PI * 2) / _number;
      let px: number = Math.cos(radian * i) * 110 * Math.random() * 2;
      let py: number = Math.sin(radian * i) * 110 * Math.random() * 2;
      let velocity: Vector = new Vector(px, py);
      let particle: MovingObject = new Particles(origin, velocity, color, pSize, pShape);
      movingObjects.push(particle);

    }
  }

}
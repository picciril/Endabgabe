namespace NewYear {
    export abstract class MovingObject {
        public position: Vector;
        public speed: Vector;
        public expendable: boolean = false; //muss der Partikel noch gezeichnet werden?


        constructor(_position?: Vector) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vector(0, 0);

            this.speed = new Vector(0, 0);
        }

        public move(_interval: number): void {
            let offset: Vector = this.speed.copy();
            offset.scale(_interval);
            this.position.add(offset);
        }
        public abstract draw(): void;   

    }















}
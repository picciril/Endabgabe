namespace NewYear {

    export class Vector {
        public x: number;
        public y: number;

        constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

       public set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        public scale(_scaleFactor: number): void {
            this.x *= _scaleFactor;
            this.y *= _scaleFactor;
        }

        public add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        public  copy(): Vector {
            return new Vector(this.x, this.y);

        }


    }

    //pure Rechnung
    //inspieriert von Sarah Franke























































}
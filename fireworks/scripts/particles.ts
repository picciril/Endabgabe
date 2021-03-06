namespace NewYear {

    export class Particles extends MovingObject {

        static gravity: number = 2;
        shape: string;
        size: number;
        color: string;


        constructor(_position: Vector, _speed: Vector, _color: string, _pSize: number, _pShape: string) {
            super(_position);
            this.color = _color;
            this.speed = _speed.copy();
            this.size = _pSize;
            this.shape = _pShape;
        }

        public move(_interval: number): void {
            super.move(_interval);
            this.speed.y += Particles.gravity;
            this.size -= _interval;
            if (this.size < 0)
                this.expendable = true;  //muss der Partikel noch gezeichnet werden?
        }

        public draw(): void {
            switch (this.shape) {
                case "kreise":
                    ctx.save();
                    ctx.beginPath();
                    ctx.translate(this.position.x, this.position.y);
                    ctx.arc(0, 0, 4, 0, 2 * Math.PI);
                    ctx.closePath();
                    ctx.fillStyle = this.color;
                    ctx.fill();
                    ctx.restore();
                    break;
                case "sterne":
                    ctx.save();
                    ctx.beginPath();
                    ctx.translate(this.position.x, this.position.y);
                    ctx.scale(0.2, 0.2);
                    ctx.moveTo(75, 30);
                    ctx.lineTo(90, 60);
                    ctx.lineTo(125, 75);
                    ctx.lineTo(95, 85);
                    ctx.lineTo(105, 130);
                    ctx.lineTo(75, 110);
                    ctx.lineTo(45, 130);
                    ctx.lineTo(55, 85);
                    ctx.lineTo(55, 85);
                    ctx.lineTo(20, 70);
                    ctx.lineTo(55, 60);
                    ctx.closePath();
                    ctx.fillStyle = this.color;
                    ctx.fill();
                    ctx.restore();
                    break;
                case "dreiecke":
                    ctx.save();
                    ctx.beginPath();
                    ctx.translate(this.position.x, this.position.y);
                    ctx.scale(0.3, 0.3);
                    ctx.moveTo(75, 50);
                    ctx.lineTo(100, 75);
                    ctx.lineTo(100, 25);
                    ctx.closePath();
                    ctx.fillStyle = this.color;
                    ctx.fill();
                    ctx.restore();
                    break;
                case "herzen":
                    ctx.save();
                    ctx.beginPath();
                    ctx.translate(this.position.x, this.position.y);
                    ctx.scale(0.2, 0.2);
                    ctx.moveTo(75, 40);
                    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
                    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
                    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
                    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
                    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
                    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
                    ctx.closePath();
                    ctx.fillStyle = this.color;
                    ctx.fill();
                    ctx.restore();
                    break;

            }
        }
    }
}
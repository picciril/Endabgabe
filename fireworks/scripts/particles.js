"use strict";
var NewYear;
(function (NewYear) {
    class Particles extends NewYear.MovingObject {
        constructor(_position, _velocity, _color, _lifetime, _type) {
            super(_position);
            this.color = _color;
            this.velocity = _velocity.copy();
            this.lifetime = _lifetime;
            this.type = _type;
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.velocity.y += Particles.gravity;
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
        }
        draw() {
            switch (this.type) {
                case "kreise":
                    NewYear.ctx.save();
                    NewYear.ctx.beginPath();
                    NewYear.ctx.translate(this.position.x, this.position.y);
                    NewYear.ctx.arc(0, 0, 4, 0, 2 * Math.PI);
                    NewYear.ctx.closePath();
                    NewYear.ctx.fillStyle = this.color;
                    NewYear.ctx.fill();
                    NewYear.ctx.restore();
                    break;
                case "sterne":
                    NewYear.ctx.save();
                    NewYear.ctx.beginPath();
                    NewYear.ctx.translate(this.position.x, this.position.y);
                    NewYear.ctx.scale(0.09, 0.09);
                    NewYear.ctx.moveTo(75, 30);
                    NewYear.ctx.lineTo(90, 60);
                    NewYear.ctx.lineTo(125, 75);
                    NewYear.ctx.lineTo(95, 85);
                    NewYear.ctx.lineTo(105, 130);
                    NewYear.ctx.lineTo(75, 110);
                    NewYear.ctx.lineTo(45, 130);
                    NewYear.ctx.lineTo(55, 85);
                    NewYear.ctx.lineTo(55, 85);
                    NewYear.ctx.lineTo(20, 70);
                    NewYear.ctx.lineTo(55, 60);
                    NewYear.ctx.closePath();
                    NewYear.ctx.fillStyle = this.color;
                    NewYear.ctx.fill();
                    NewYear.ctx.restore();
                    break;
                case "dreiecke":
                    NewYear.ctx.save();
                    NewYear.ctx.beginPath();
                    NewYear.ctx.translate(this.position.x, this.position.y);
                    NewYear.ctx.scale(0.5, 0.5);
                    NewYear.ctx.moveTo(75, 50);
                    NewYear.ctx.lineTo(100, 75);
                    NewYear.ctx.lineTo(100, 25);
                    NewYear.ctx.closePath();
                    NewYear.ctx.fillStyle = this.color;
                    NewYear.ctx.fill();
                    NewYear.ctx.restore();
                    break;
                case "herzen":
                    NewYear.ctx.save();
                    NewYear.ctx.beginPath();
                    NewYear.ctx.translate(this.position.x, this.position.y);
                    NewYear.ctx.scale(0.1, 0.1);
                    NewYear.ctx.moveTo(75, 40);
                    NewYear.ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
                    NewYear.ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
                    NewYear.ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
                    NewYear.ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
                    NewYear.ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
                    NewYear.ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
                    NewYear.ctx.closePath();
                    NewYear.ctx.fillStyle = this.color;
                    NewYear.ctx.fill();
                    NewYear.ctx.restore();
                    break;
            }
        }
    }
    Particles.gravity = 1;
    NewYear.Particles = Particles;
})(NewYear || (NewYear = {}));
//# sourceMappingURL=particles.js.map
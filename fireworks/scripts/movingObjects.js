"use strict";
var NewYear;
(function (NewYear) {
    class MovingObject {
        constructor(_position) {
            this.expendable = false; //muss der Partikel noch gezeichnet werden?
            if (_position)
                this.position = _position.copy();
            else
                this.position = new NewYear.Vector(0, 0);
            this.speed = new NewYear.Vector(0, 0);
        }
        move(_interval) {
            let offset = this.speed.copy();
            offset.scale(_interval);
            this.position.add(offset);
        }
    }
    NewYear.MovingObject = MovingObject;
})(NewYear || (NewYear = {}));
//# sourceMappingURL=movingObjects.js.map
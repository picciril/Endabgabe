"use strict";
var NewYear;
(function (NewYear) {
    class MovingObject {
        constructor(_position) {
            this.expendable = false;
            if (_position)
                this.position = _position.copy();
            else
                this.position = new NewYear.Vector(0, 0);
            this.velocity = new NewYear.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
    NewYear.MovingObject = MovingObject;
})(NewYear || (NewYear = {}));
//# sourceMappingURL=movingObjects.js.map
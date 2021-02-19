"use strict";
var NewYear;
(function (NewYear) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_scaleFactor) {
            this.x *= _scaleFactor;
            this.y *= _scaleFactor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    NewYear.Vector = Vector;
    //pure Rechnung
    //inspieriert von Sarah Franke
})(NewYear || (NewYear = {}));
//# sourceMappingURL=vector.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
var Dog = /** @class */ (function () {
    function Dog(weight, height, lifeSpan, name, url, temperament, origin) {
        this.weight = weight;
        this.height = height;
        this.lifeSpan = lifeSpan;
        this.name = name;
        this.url = url;
        this.temperament = temperament.sort();
        this.origin = origin.sort();
    }
    return Dog;
}());
exports.Dog = Dog;

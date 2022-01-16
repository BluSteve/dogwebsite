"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDogs = void 0;
var Dog_1 = require("./Dog");
global.fetch = require("node-fetch");
function getDogs(dogNumber) {
    return __awaiter(this, void 0, void 0, function () {
        var dogs, response, dogsJSON, _i, dogsJSON_1, dogJSON, breeds, weight, height, lifeSpan;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dogs = [];
                    _a.label = 1;
                case 1:
                    if (!(dogs.length < dogNumber)) return [3 /*break*/, 4];
                    return [4 /*yield*/, fetch('https://api.thedogapi.com/v1/images/search?limit=100')];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    dogsJSON = _a.sent();
                    for (_i = 0, dogsJSON_1 = dogsJSON; _i < dogsJSON_1.length; _i++) {
                        dogJSON = dogsJSON_1[_i];
                        breeds = dogJSON.breeds[0];
                        // only square dogs are allowed
                        if (breeds && Math.abs(dogJSON.width - dogJSON.height) / (dogJSON.width + dogJSON.height) / 2 < 0.02) {
                            weight = getAverage(breeds.weight.metric);
                            height = getAverage(breeds.height.metric);
                            lifeSpan = getAverage(breeds.life_span);
                            if (weight && height && lifeSpan)
                                dogs.push(new Dog_1.Dog(weight, height, lifeSpan, breeds.name, dogJSON.url, breeds.temperament ? breeds.temperament.split(', ') : [], breeds.origin ? breeds.origin.split(', ') : []));
                        }
                    }
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, dogs.slice(0, dogNumber)];
            }
        });
    });
}
exports.getDogs = getDogs;
function getAverage(s) {
    if (!s)
        return NaN;
    var sl = s.split(" - ");
    var total = 0;
    for (var _i = 0, sl_1 = sl; _i < sl_1.length; _i++) {
        var n = sl_1[_i];
        total += parseInt(n);
    }
    return total / sl.length;
}

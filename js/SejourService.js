"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var voyage_1 = require("./voyage");
var SejourService = /** @class */ (function () {
    function SejourService() {
        this.sejour = [];
        this.sejour.push(new voyage_1.Sejour('Nantes', 150));
        this.sejour.push(new voyage_1.Sejour('Toulouse', 100));
        this.sejour.push(new voyage_1.Sejour('Paris', 200));
    }
    SejourService.prototype.getSejourByName = function (nom) {
        for (var i in this.sejour) {
            if (this.sejour[i].getNom() === nom) {
                return this.sejour[i];
            }
            else {
                return 'Sejour Incconnu';
            }
        }
    };
    return SejourService;
}());
var sj = new SejourService();
console.log(sj.getSejourByName('Paris'));

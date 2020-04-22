"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sejour = /** @class */ (function () {
    function Sejour(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
    Sejour.prototype.getNom = function () {
        return this.nom;
    };
    Sejour.prototype.getPrix = function () {
        return this.prix;
    };
    return Sejour;
}());
exports.Sejour = Sejour;

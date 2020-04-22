import {Sejour} from './voyage';

class SejourService {

    private sejour:Sejour[] = [];
    constructor() {
        this.sejour.push(new Sejour('Nantes', 150));
        this.sejour.push(new Sejour('Toulouse', 100))
        this.sejour.push(new Sejour('Paris', 200));
    }

    getSejourByName(nom:String):Sejour|String|void {
        
        for(let i in this.sejour) {

            if(this.sejour[i].getNom() === nom) {
                return this.sejour[i];
            } else {
                return 'Sejour Incconnu'
            }

        }

    }

}

const sj = new SejourService();
console.log(sj.getSejourByName('Paris'));
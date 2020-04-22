class Sejour {

    constructor(private nom:string, private prix:number){     

    }

    getNom():String {
        return this.nom;
    }

    getPrix():number {
        return this.prix;
    }
}

export {Sejour}
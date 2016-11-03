/// <reference path="typings/jquery/jquery.d.ts" />
$(document).ready(function() {
    //var lassie: Dog = new Dog();
    //lassie.name = 'Lassie';
    //lassie.favoriteFood = 'Bonzo';

    //var lassie: Dog  = new Dog('Lassie', 'Bonzo');
    //var pepsi: Dog = new Dog('Pepsi');
    //console.log(lassie);    // Dog {name: "Lassie", favoriteFood: "Bonzo"}
    //console.log(pepsi);     // Dog {name: "Pepsi", favoriteFood: "Whatever I find"}

    var lassie: Dog = new Dog('Lassie', 'Bonzo');
    var pepsi: Dog = new Dog('Pepsi');
    console.log(lassie);    // Dog {_name: "Lassie", _favoriteFood: "Bonzo"}
    console.log(pepsi);     // Dog {_name: "Pepsi", _favoriteFood: "Whatever I find"}

    pepsi.favoriteFood = 'Royal Canin';
    console.log(pepsi);     // Dog {_name: "Pepsi", _favoriteFood: "Royal Canin"}

    //pepsi.name = 'Rocky'; // Error (Left- hand side of assignment expression cannot be a constant or a read- only property.)
});


class Dog {
    private _name: string;
    private _favoriteFood: string;

    get name(): string {
        return this._name;
    }

    get favoriteFood(): string {
        return this._favoriteFood;
    }

    set favoriteFood(pfavoriteFood: string)  {
        this._favoriteFood = pfavoriteFood || 'Whatever I find';
    }  
    
    constructor(pName: string, pfavoriteFood?:string) {
        this._name = pName;
        this.favoriteFood = pfavoriteFood;
    }

    speak() {
        alert('Bark');
    }
}

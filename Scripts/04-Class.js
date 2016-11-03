/// <reference path="typings/jquery/jquery.d.ts" />
$(document).ready(function () {
    //var lassie: Dog = new Dog();
    //lassie.name = 'Lassie';
    //lassie.favoriteFood = 'Bonzo';
    //var lassie: Dog  = new Dog('Lassie', 'Bonzo');
    //var pepsi: Dog = new Dog('Pepsi');
    //console.log(lassie);    // Dog {name: "Lassie", favoriteFood: "Bonzo"}
    //console.log(pepsi);     // Dog {name: "Pepsi", favoriteFood: "Whatever I find"}
    var lassie = new Dog('Lassie', 'Bonzo');
    var pepsi = new Dog('Pepsi');
    console.log(lassie); // Dog {_name: "Lassie", _favoriteFood: "Bonzo"}
    console.log(pepsi); // Dog {_name: "Pepsi", _favoriteFood: "Whatever I find"}
    pepsi.favoriteFood = 'Royal Canin';
    console.log(pepsi); // Dog {_name: "Pepsi", _favoriteFood: "Royal Canin"}
    //pepsi.name = 'Rocky'; // Error (Left- hand side of assignment expression cannot be a constant or a read- only property.)
});
var Dog = (function () {
    function Dog(pName, pfavoriteFood) {
        this._name = pName;
        this.favoriteFood = pfavoriteFood;
    }
    Object.defineProperty(Dog.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "favoriteFood", {
        get: function () {
            return this._favoriteFood;
        },
        set: function (pfavoriteFood) {
            this._favoriteFood = pfavoriteFood || 'Whatever I find';
        },
        enumerable: true,
        configurable: true
    });
    Dog.prototype.speak = function () {
        alert('Bark');
    };
    return Dog;
}());
//# sourceMappingURL=04-Class.js.map
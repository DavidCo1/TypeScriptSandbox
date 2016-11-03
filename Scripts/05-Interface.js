var function01 = function (string1) {
    return string1;
};
//var function02: IStringToNumber = function (string1) {
//    return string1;
//}  //ERROR
var function03 = function (string1) {
    return 0;
}; //OK
var bmw;
bmw.engine = 1.6; //intellisense
//bmw.name = 1;   //Error
bmw.name = "BMW"; //OK
bmw.seats = 2; //OK
bmw.aboutMe = function () { return (this.name + '. Seats' + this.seats); };
//bmw.test = 'asda';    //Error
//# sourceMappingURL=05-Interface.js.map
/** Functions params */
//get string
function functionString(p) {
    alert(p);
}
functionString('1'); //OK
//functionString(1);  //ERROR
//get string array
function functionArray(arr) {
}
functionArray(['tet', 'sdasa']); //OK
//functionArray([1, 3]);    //ERROR
//functionArray('das');    //ERROR
//get string array and return number (without number define)
function functionArray2(arr) {
    return arr[0].length;
}
//get string array and return number (with number define)
function functionArray3(arr) {
    //return arr[0];  //Error
    return arr[0].length; //OK
}
//multiple params
function function1(str, num) {
    return num;
}
//multiple params with num optional
function function2(str, num) {
    if (num !== undefined) {
        return num;
    }
    return 0;
}
//get object, return number
function square(rectangle) {
    return rectangle.h * rectangle.w;
}
var rect1 = { x: 2, y: 2 };
//square(rect1);  //Error, x and y instead of h and w
var rect2 = { h: 2, w: 2 };
square(rect2); //OK
square({ h: 2, w: 2 }); //OK (inline var)
//var string1: string = square({ h: 2, w: 2 });  //Error, return number, not string, even that not defined
var number1 = square({ h: 2, w: 2 }); //OK
/** arrow functions */
//return number
var noArrow = function (x, y) {
    return x * y;
};
var arrow = function (x, y) { return x * y; };
//return nothing
var helloWorld;
helloWorld = function () {
    alert('Hello World');
};
//var string1: string = helloWorld();  //Error
helloWorld();
//get string and return nothing
var sayHi;
sayHi = function (name) {
    alert('Hi ' + name);
};
sayHi('david');
//# sourceMappingURL=02-Functions.js.map
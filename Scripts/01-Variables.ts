/** string */
var string1: string;
//string1 = 5;  //Error
string1 = 'string';  //OK
var string2 = 'string';   //This is string type var
var string3: string = 'string';   //This is string type var


/** number */
var number1 = 3;    //This is number type var
var number2: number = 3;    //This is number type var
var number3: number;   //This is number type var
//number3 = 'string'; //Error
number3 = 3; //OK


/** bool */
var bool1 = true;    //This is bool type var
var bool2: boolean = true;    //This is bool type var
var bool3: boolean;    //This is bool type var


/** array */
var array1 = [];    //This is any array
var array2: string[];   //This is string array
var array3 = ['test1', 'test2'];   //This is string array
var array4: number[] = [1, 2];   //This is number array array
var array5: number[];   //This is number array array
//array5 = ['test1', 'test2'];   //Error, assign string array to number array
var string1 = array3[0];      //This is string type var


/** object */
var object1 = { x: 1, y: 2 };      //This is object type var
var object2:Object = { x: 1, y: 2 };      //This is object type var
var object3: Object;      //This is object type var


/** any */
var any1;  //This is any type var
any1 = 'string';    //it can be string
any1 = 2;   //it can be number

var any2: any;  //This is any type var also
var any3: any = 'string';  //This is any type var also




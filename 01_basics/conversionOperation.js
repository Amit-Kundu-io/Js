let number = "112"
let numInt = Number(number)

let numBool = Boolean(numInt) 

/*
console.table([typeof(number), number,typeof(numInt) ,
    numInt,typeof(numBool) ,numBool])

    */

/**
 * "121" => 121 [Number] 
 * "121" => true [Boolean] if "" => false
 */

let nullVar = null

//console.table([typeof(nullVar),nullVar])
/**
 * null => Object [typeof]
 */

/*******************************************- Operation -************************************************************/

let num = 10
let negNum = -num

//console.log(negNum);

let str1 = "Amit"
let str2 = " Kundu"
let str3 = str1+str2

//console.log(str3); /** Amit Kundu */


//console.log("1" + 2); /** 12 */
// console.log(1 + "2"); /** 12 */

//console.log("1" + 2 + 2); /**122 */

//console.log(1+2+"2"); /** 1+2 = 3 +"2" => 32*/

//console.log(+true); /** 1 */

// console.log(+""); /** 0 */


let x = 3; // x= 3
const y = x++; // y = 3 , x= 4 store x in y then incriment 

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;  // a = 3
const b = ++a; // a = 4 , b = 4 first incriment then store

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"









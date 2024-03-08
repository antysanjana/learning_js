//Declaring a big int
/*let x = 9999999999999999;
let y = BigInt(999999999999999);
console.log(x);
console.log(y);*/

/*let x = 123456789012345678901234567890n;
let num = 786;
let y = BigInt("123456789012345678901234567890");
console.log(x);
console.log(typeof num);
console.log(typeof y);*/

/*let x = 9007199254740995n;
let y = 9007199254740995n;
let z = x*y;
console.log(z);*/

//Type Conversion: Arithmatic between bigint and number is not allowed
/*let x = 5n;
let y = 2;
let z = x / 2; //this gives error
console.log(z);*/

/*let x = 5n;
let y = 2;
let z = Number(x) / 2; //type conversion
console.log(z);*/

//Number system
/*let hex = 0x20000000000003n;
let oct = 0o400000000000000003n;
let bin = 0b100000000000000000000000000000000000000000000000000011n;
console.log(hex, oct, bin); //prints the decimal number*/

//Minimum and Maximum Safe Integers
/*let x = Number.MAX_SAFE_INTEGER;
let y = Number.MIN_SAFE_INTEGER;
console.log(x);
console.log(y);*/

//The Number.isInteger() Method
/*let x = Number.isInteger(10);
let y = Number.isInteger(345.67);
console.log(x, y);*/

//The isSafeInteger method
let x = Number.isSafeInteger(4567);
let y = Number.isSafeInteger(9007199254740992);
console.log(x, y);







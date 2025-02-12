const score=400

const balance= new Number(100)
// console.log(balance) //[Number: 100]

// console.log(balance.toString()); // 100 but datatype is string
//after changing into string it have more functions
// console.log(balance.toString().length); //3
// console.log(balance.toString().substring(0,2));//10
// console.log(balance.toFixed(2));//100.00 gives precision upto 2 decimal


const otherNumber =123.8966

// console.log(otherNumber.toPrecision(2));//1.2e+2  //Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
// precision — Number of significant digits. Must be in the range 1 - 21, inclusive.
// console.log(otherNumber.toPrecision(3));//124
// console.log(otherNumber.toPrecision(4));//123.9
// console.log(otherNumber.toPrecision(5));//123.90

const hundreds =100000000;
// console.log(hundreds.toLocaleString()) //10,00,000  using comma b/w number in us standard form
// console.log(hundreds.toLocaleString('en-IN')) // it gives in indian standard form

/*
Number.MAX_VALUE //The largest number that can be represented in JavaScript. Equal to approximately 1.79E+308.
Number.MIN_VALUE //The closest number to zero that can be represented in JavaScript. Equal to approximately 5.00E-324.
Number.MAX_SAFE_INTEGER //The value of the largest integer n such that n and n + 1 are both exactly representable as a Number value. The value of Number.MAX_SAFE_INTEGER is 9007199254740991 2^53 − 1.
Number.MIN_SAFE_INTEGER //The value of the smallest integer n such that n and n − 1 are both exactly representable as a Number value. The value of Number.MIN_SAFE_INTEGER is −9007199254740991 (−(2^53 − 1)).
*/


//++++++++++++++++++++++++++ MATHs +++++++++++++++++++//

// console.log(Math); // Math is an object datatype
// console.log(Math.abs(-45));//45 //absolute value
// console.log(Math.round(5.7));//6  round off value
// console.log(Math.floor(5.4)); //5 floor value
// console.log(Math.ceil(5.4)); //6 ceiling number
// console.log(Math.min(4,6,8,3,5,22,44,76,45)); //3 is minimum b/w them
// console.log(Math.max(4,6,8,3,5,22,44,76,45)); //76 is maximum b/w them

console.log(Math.random()); //gives random value b/w [0,1]

console.log(Math.floor(Math.random()*10)+1);//ham 10 se multiply karake 1 point aage kar skate hai 
//par hamane 1 isliye add kara hai kyoki kabhi kabhi random 0.004,0.05 iss type ke value deta hai to usako avoid karne ke liye
//ye ek jaise random number guess karega Math.floor usako low integer kar dega
//ye 1 se 10 ke bich me number guess karega

const min=10;
const max=20;

console.log(Math.floor(Math.random() * (max-min+1))+min); //ab ye 10 se lekar 20 ke beech me number guess karega

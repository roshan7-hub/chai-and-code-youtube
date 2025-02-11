// #PRIMITIVE
//call  by value
//7 types:string,number,boolean ,null,undefined,symbol,BigInt

//#NON PRIMITIVE
//call by reference
//Arrray,object,Function

//number
const score = 100
const scoreValue=100.3

//boolean
const IsLoogedIn=false
//object
const outsideTemp=null
//undefined
let userEmail;
//symbol
const id= Symbol(`123`)
const anotherId= Symbol(`123`)
//id always unique dekhane me to same lag rahe hai par Symbole unako unique bana deta hai isliye false dega
console.log(id===anotherId) //false
//bigint
const bigInt=234567898765432n  //last me n likhana hota hai bigInt ke liye
//array dataype object hai
const heros=["saktimaan","aarymaan","naagraj"];
//object
let myObj={
    name : `Roshan`,
    age : 22,
}

//function
const myFunction=function(){
console.log(`Hello babu bhaiyaa`)
}

console.log(typeof heros)
//javascript dynamicaly typed language

// *****************memory Allocation*******************//
 //primitive(in stack)  
/*
let myname=`Roshan`
let anothername= myname
anothername=`Raja ji`

console.log(myname)
console.log(anothername)
*/
//in this it take as a copy

//non_primitive(in heap)
let userOne={
   email:`Roshan@gmail.com`,
   upi:`Roshan@okcici`
}
let userTwo=userOne

userTwo.email=`Rajaji@gmail.com`

console.log(userOne.email)
console.log(userTwo.email)

//it take as reference ,it changes origin value 
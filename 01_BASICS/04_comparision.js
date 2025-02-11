// console.log(2>1) //true
// console.log(2>=1) //true
// console.log(2<1)  //false
// console.log(2==1) //false
// console.log(2!=1) //ture

// console.log("2">1) //true
// console.log("02">1)  //true
//ye hamesha dhyan rakho ki kabhi alag alag datatype 
// ko compare na karo (kyoki ye bahut confusion hota hai aur predictable answer nahi dete)

/*
console.log(null>0)  //false
console.log(null==0) //false
console.log(null>=0)  //true
*/
//The is that an equality check == and comparisions (<,>,<=,>=)
//works differently.
// comparision converts null to a number,treating it as ,Thats why 
// (3)null>=0 is true and (1)null>0 is false  

//for undefined it always gives false

//  ===(strictly check) check numbers as well as datatype
console.log("2"===2) //false
console.log("2"==="2") //true
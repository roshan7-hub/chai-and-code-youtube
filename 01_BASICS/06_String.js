const name=`hitesh`
const repocount=5
// console.log(`Hello my name is ${name} and my repo count is ${repocount}`)

const gamename =new String(`Roshan-OP`)

// console.log(gamename[0])
// console.log(gamename[1])
// console.log(gamename[2])
// console.log(gamename[3])
// console.log(gamename[4])
// console.log(gamename[5])
/*
console.log(gamename.__proto__); //{}
console.log(gamename.length)  //8
console.log(gamename.toUpperCase()) //ROSHANOP
console.log(gamename.charAt(3)) //h
console.log(gamename.indexOf(`s`)) //2
*/


// const newString=gamename.substring(0,6) //subString(start point, number of char you want to part) not taken negative value
// console.log(newString)  //Roshan


// const anotherString=gamename.slice(-8,4) //slice(start point, number of char you want to part)
// console.log(anotherString)  //osh

// 0  1  2  3  4  5  6  7  8
// R  o  s  h  a  n  -  O  P
//-9 -8 -7 -6 -5 -4 -3 -2 -1

/*
const newStringOne="     Roshan"
console.log(newStringOne) // print with spaces
console.log(newStringOne.trim()); //print without spaces
*/


const url="https://Roshan.com/roshan%20Singh"
console.log(url.replace(`%20`,`+`)) //replace first with second

//If you want to find that this perticular parrt is exist in variable or not check with .includes()
console.log(url.includes(`Roshan`)) //true
console.log(url.includes(`Moshan`)) //false


console.log(gamename.split(`-`)) //split basis on dash(-) 
console.log(gamename.split(`a`)) //split basis on (a) 
//BASICALLY IT DELETE THAT CHAR AND SPLIT IN PARTS



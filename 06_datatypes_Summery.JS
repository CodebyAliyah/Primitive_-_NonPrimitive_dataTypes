
//  Primitive_DataTypes 

// 7 Types : string , Number , Bolean , Null , Undefined , 
 // symbol , BigInt

 const score = 78 ;

 const valueScore = 90.5 ;

 let isLoggedIn = false ;

 let outsidetemp = null ;
  let userEmail ;


  const id = Symbol('123')
const anOtherId = Symbol('123')

console.log (id===anOtherId)

// Id is not equal to anotherId.

console.log(id)
console.log (anOtherId)

let bigNumber = 25347123715134 ;



// Non_primitive OR Reference

// Array , Object , Function .

const heros = ["Quaid_e_Azam", "Illama Iqbal", "Dr. AbdulQadeer", "Imran Khan"] 


let myObject = {
  Name : "Ali Yahya" ,
  age : "21 years" ,
  Qulification : "Graduate" ,
  Roll_No : 161_023 ,
}


let Position = function Callback () {
  console.log(Position + "Ali Yahya")
}

Callback()


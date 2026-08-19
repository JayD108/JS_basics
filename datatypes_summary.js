// two types: primitive and non-primitive (how data is stored and accessed)
/*
primitive : 7 types:
string,number,boolean,null,undefined,symbol,BigInt

dynamically typed language

refrence type/ non-primitve:
array,objects,functions
*/
const id = Symbol('453')
const another_id = Symbol('453')
console.log(id === another_id);



const heros = ["abc" , "pqr"]
let obj = {
    name : "jay",
    age : 22,
}


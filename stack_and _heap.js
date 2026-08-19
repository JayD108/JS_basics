//stack (Primitive) , heap (non-primitve)
let my_name = "Abc";
//console.log(my_name);
let new_name = my_name;
//console.log(new_name);
new_name = "PQR";
//console.log(new_name);
//console.log(my_name)//stack 

let object1 = {
    name : "jay",
    email : "jay@mail.com",
    num : 123
}

let object2 = object1;

console.log(object1);
console.log(object2);


object2.num = 345

console.log(object1);
console.log(object2);//heap

//so heap is passing by refrence and stack is just copying it
//so when i change in heap non primitive data it cahnges the original one but not in the case of primitive data








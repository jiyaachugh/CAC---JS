// Primitive 

// 7 types: String, Number, Boolean, null, undefined, Symbol,BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
// const bigNumber = 34562783983712938n


// Reference (Non primitive)

// Array, Objects, Functions 

const heros = ["shaktiman","naagraj","doga"];
let myObj = {
    name: "hitesh",
    age:  22,
}
const myfunction = function(){
    console.log("hellow world");
}

console.log(typeof outsideTemp);

//HOMEWORK
// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

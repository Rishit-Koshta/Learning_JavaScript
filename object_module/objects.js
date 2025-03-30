
const person = {
   name : "NOname",
   age:20,
   address:{
        city:"Indore",
        country:"India",
   },

   walk: function () {
    console.log(this.name,"is walking");
   },

   books:["book1","book2","book3"],

};

console.log(person);

person.name = "Alex";
console.log(person.name);

console.log(person.address);

person.walk();

// import {greet} from "./module.js";
// import { PI } from "./module.js"; 

// import {greet as greetfn, pi_value} from "./module.js";

// greetfn();
// console.log(pi_value);

// import addfn from "./module.js";

// console.log(addfn(6,4));

import module from "./module.js";


module.greet();

console.log(module.add(6,4));

console.log(module.PI);
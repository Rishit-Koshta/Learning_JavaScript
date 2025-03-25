//calling functions without parameters
function greet(){
    console.log("hello");
}

greet();


// functiomon with parameter
function namaste(name){
console.log("Namaste "+ name);
}

namaste("Rishit");

//function for multiply a and b
function multiply(a,b){
    console.log("multiply "+a+" and "+b);
    return a*b;
}
console.log(multiply(7,8));
const result = multiply(3,7);
console.log(result);

//same for divide for arrow operator
const divide = (a,b) =>{
    console.log("dividing the numbers");
    return a/b;
};
console.log(divide(55,5));
const c = divide(8,2);
console.log(c);

//one line function
const a = function hello(){
    console.log ("hello");
};
a();

//another ay to write one line function
const b = () => console.log("bonjour");
b();

//setting default name if not passed
const hello  = (name="lerner") => console.log("hello",name);
hello();

//passing function into another function
const fun = (a,b,operator) => {
    return operator(a,b);
};
 
const sub = (a,b) =>{
    return a-b;
}

console.log(fun(6,3,sub));

const m = fun(9,4,(a,b)=>a*b);
console.log(m);

//currying
const multiple = (a) =>{
    return (b) => a*b;
};

const double = multiple(2);
const res = double(7);
console.log(res);
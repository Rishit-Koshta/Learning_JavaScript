//for loop and differnt ways to iterate

for(let i = 1; i<=10; i++){
    console.log(2*i,3*1,4*i);
}

for(let i = 0; i<5; i++){
    console.log("hello !");
}

let charac = "alphabets";

for(let b in charac){
    console.log(b);
}

let output=" ";

for(let i = 0 ; i<5; i++){
    output+=i;
}
console.log(output.trim());

let character = "hello";
let res = [];
for(let a of character){
    console.log(a);

    res.push(a);
}
console.log(res.join(" "));


let arr = ["Hi", "I", "will", "learn", "react", "too"];
for(let c of arr){
    console.log(c);
}

//do while loop
let i = 0;
do{
    console.log(i);
    i++;
}while(i<5);

//while loop
let p = 20;
while(p>0){
    console.log(p);
    p--;
}

const person = {
    name:"Rishit",
    age:20,
    city:"Indore",
};

for(m in person){
    console.log(m,person[m]);
}
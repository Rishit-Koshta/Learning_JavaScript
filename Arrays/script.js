//Js array methods
const a = ["one", 2, true, {name:"Raj", age:20}, ()=>"hello"];

console.log(a[1]);
console.log(a[10]);
console.log(a[3]);
console.log(a[4]);

for(let value of a){
    console.log(a[value]);
}

console.log(a);

a.push("new thing");
console.log(a);

a.pop();
console.log(a);

b = [7,5,4,6,8,1];

b.forEach((value,index,array)=>{
    console.log(value,index);
});

b.sort();
console.log(b);

console.log(b.indexOf(8));

console.log(b.includes(77));

b.splice(3,2,"replaced");
console.log(b);


//Advanced javascript methods
const c = [0,1,2,3,4,5,6,7,8,9];

const d = c.filter((value,index)=>value%2==0);

console.log("d",d);
console.log("c",c);

const e = c.map((value,index)=>2*value);
console.log("e",e);

const f = c.filter((value,index)=>value%2==0).map((value,index)=>value*2);
console.log("f",f);

const g = c.map((value,index)=>{
    return{
        name:"Ramesh"+value,
        age:value,
    };
});
console.log(g);

const h = c.find((value)=> value.name==="Ramesh5");
console.log("h",h);

const i = c.reduce((pre,curr,ind)=>curr+pre,  0);
console.log(i);

const j = [
    [1,2,3],
    [4,5,6],
    [8,9,0],
];

const l  = j.reduce((pre,curr)=> pre.concat(curr),[]);
console.log("j",j);
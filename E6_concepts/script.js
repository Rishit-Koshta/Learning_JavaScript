//spread operator

const add = (a,b, ...c)=>{
  let res  = a;
  res+=b;

  for(i = 0; i<c.length; i++) res+=c[i];

  return res;
};

console.log(add(4,5,3,5,6,7,8,9,3));

//combine two objects using spread operator
const  person ={
  name:"Rishit",
  age: 20,
};

const address = {
  country:"INDIA",
  city:"Indore",
};

const newperson = {
  ...person,
  ...address,
};

console.log(newperson);

//experimenting on array
const firstarray =[1,2,3];
const secondarray = [4,5,6];

//it will make 2d array
const thirdarray = [firstarray,secondarray];
console.log(thirdarray);

//now use spread operator
const fourtharray = [...firstarray,...secondarray];
console.log(fourtharray);

//anoher way
firstarray.push(...secondarray);
console.log(firstarray);  






//now Object destructure
const p = {
  personname:"Raj",
  personage:20,
  addresscity:"Delhi",
  isAlive:true,
};

const {personname:name , personage:age, ...others} = p;
console.log(others);

//array destructuring

const x = [1,2,3,4,5,6];

const [a,b,...c] = x;
console.log(a,b);
console.log(c);





//template literals

const n = "Amit";
const h = 30;

const sentence = "my name is "+n+"\n my age is "+h;
console.log(sentence);

const s = `my name is ${n}
and my age is ${h}`;

console.log(s);



//executing timeout
console.log("coding start");

setTimeout(()=>{
    console.log("coding is on progress");
},2000);

console.log("coding ended");




//interuppting timeout
console.log("starting event");

const id = setTimeout(()=>{
    console.log("this will not execute");
},2000);

console.log(id);

clearTimeout(id);

console.log("ended event");

//another useful function
let i = 0;
function showTime(){
 const time = new Date();
 console.log(time.toISOString());
 
 i++;

 if(i==5){
    clearInterval(idd);
 }
}

const idd = setInterval(showTime,1000);
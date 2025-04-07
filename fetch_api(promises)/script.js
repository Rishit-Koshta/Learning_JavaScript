// console.log("calling the api");

// const response = fetch("https://dummyjson.com/users");

// response
//         .then((data)=>{
//         console.log("got the data",data);

//         const result  = data.json();
//         result
//             .then((res)=>{
//                 console.log("got the users",res);

//                 const users = res.users;

//                 for(let user of users){
//                     console.log(user.id,user.firstName);
//                 }
//             });
//         })
//         .catch((err)=>{
//         console.log("got the error",err);
//         });

// console.log("got the response",response);



// //creating a promise
// const promise  = new Promise((resolve,reject)=>{

//     const allgood = false;

//     setTimeout(()=>{

//         console.log("hello");

//         if(allgood){
//             resolve("secret data");
//         }
//         else {
//             reject("all was not good");
//         }
//     },5000);
// })
// promise.then((data)=>{
//     console.log("got the data",data);
// }).catch((error)=>{
//     console.log("got the error",error);
// });





// const res = fetch("https://dummyjson.com/users")
// .then((data)=>{
//     console.log("got the data",data);
//     return data.json();
// })
// .then((data)=>{
//     console.log("got the json data",data);
// })
// .catch((error)=>{
//     console.log("got the error",error);
// })
// .finally((data)=>{
//     console.log("this block will always executed",data);
// });



// function initbooking(name){
//     return new Promise((resolve,reject)=>{
        
//         setTimeout(()=>{
//             console.log("booking initiated");

//             resolve({
//                 bookingID:"randomNumber",
//                 name
//             })
//         },2000);
//     });
// };

// function addguest(booking,guest){
//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{
//             console.log("adding the guest");
//             booking ["guest"] = guest;
//             resolve(booking);
//         },2000);
//     });
// }

// function processpayment(booking,payment){
//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{
//             console.log("processing payment");
//             booking ["payment"] = payment;
//             resolve(booking);
//         },2000);
//     });
// }

// initbooking("Anuj")
// .then((booking)=>{
//     console.log("got the booking",booking);
//     return addguest(booking,["Anuj","Shivam"]);
// })
// .then((booking)=>{
//     console.log("got the booking",booking);
//     return processpayment(booking,{
//         bookingID:"abcdefgh",
//         amount:1234
//     });
// })
// .then((booking)=>{
//     console.log("got the booking",booking);
// })
// .catch((err)=>{
//     console.log("got the error",err);
// });




async function bookingflow(){
    try{
        let booking = await initbooking("Anuj");
        booking = await addguest(booking,["Anuj","Shivam"]);
        bookking  = await processpayment(booking,{
            bookingID:"abcdefgh",
            amount:1234,
        });
        console.log(booking);
    }
    catch(err){
        console.log("got the error",err);
    }
}
bookingflow();
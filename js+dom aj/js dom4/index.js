// example of synchronous code which executes the code line by line 
// function sync(){
//     console.log('first');
// }
// sync();
// console.log('second');


// example of asynchronous code -asynch code vo code hota jo ho jaega but ye nhi pta kab hoga
// loop used in async code is event loop 
// concurrency is handled in js through asynch code which is executed by event loop 

// features of async code:-
// clean and concise
// better error handling - try catch block
// easier debugging


// setTimeout(function(){
//     console.log('third')
// },4000);
// function sync(){
//     console.log('first');
// }
// sync();
// console.log('second');


// api-application programming interface 
// 2 components ke bich main communication establish karwana 

// promise :- used for parallel execution of code in background 

// promise ke andar ek call back fxn hota hai jo 2 parameters leta hai resolve and reject 
//  promise(function(resolve,reject))
// resolve mtlb fulfil hogya promise successfully program successfully executed 
// reject mtlb nhi ho paya due to xyz reason ->error->best practice error ane par catch krna chahiye


// let merapromise=new Promise(function(resolve,reject){
//     console.log('I am inside promise');
//     resolve(1998);
// });
// console.log('pehla');



// let merapromise1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside promise1')
//     },5000);
//     // resolve(2000);
//     // reject(new Error('bhaisab error aye hai'))
// });
// let merapromise2=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside promise2')
//     },2000);
//     // resolve(2000);
//     // reject(new Error('bhaisab error aye hai'))
// });
// console.log('pehla');







// reject output:
// Uncaught (in promise) Error: bhaisab error aye hai
    // at index.js:52:12
    // at new Promise (<anonymous>)
    // at index.js:47:17

// parallely chalane ke liya use hota promise 


// then vala case value return kra rahe hai 

// let merapromise1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside promise1')
//     },5000);
//     resolve(2000);

// });

// merapromise1.then((value) =>{console.log(value)});



// error vala case 
// let merapromise1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside promise1')
//     },5000);
//     reject(new Error('bhaisab error aye hai'))
// });
// merapromise1.then((value) =>{console.log(value)},(error)=>{console.log('received an error')});
// // merapromise1.catch((error)=>{console.log('received an error')});


// console.log('first');




// let waada1=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('setimeout1 started');
//     },2000);
//     resolve(true);
// });
// let output=waada1.then(()=>{
//     let waada2=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log('setimeout2 started');
//         },3000);
//         resolve('waada 2 resolved');
//     })
//     return waada2;
// })

// output.then((value)=> console.log(value));
    

// we can make any fxn to async by defining async keyword before any fxn name 

// async function abcd(){
//     return "hello jain";
// }

// o/p Promise {<fulfilled>: 'hello jain'}
            // [[Prototype]]: Promise
            // [[PromiseState]]: "fulfilled"
            // [[PromiseResult]]: "hello jain"



// async function utility(){
//     let delhiMausam=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Delhi me bohat garmi hai");
//         },5000);
//     });
//     let hydMausam=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Hyderabad is cool");
//         },2000);
//     });
//     let dM=delhiMausam;
//     let hM=hydMausam;
//     return [dM,hM];
// }




// ye promises parallely chal rahe hai agar main wait krvana chahta hu toh mujhe await keyword ka use krna padega
// i.e to await another promise we can use await method 
// multiple promises ke andar use krte hai await ko 1st promise par await keyword use kr liya jab tak wo complete na ho jaye tab tak 2nd promise nhi dalna

// await keyword-multiple promises main then nhi lagana chahte vaha par use kiya 
// async function utility(){
//     let delhiMausam=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Delhi me bohat garmi hai");
//         },5000);
//     });
//     let hydMausam=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Hyderabad is cool");
//         },2000);
//     });
//     let dM=await delhiMausam; //agar mne is par await likh diya toh line no.169 execute nhi hogi jab tak 168 line execute na ho jae
//     let hM=await hydMausam;
//     return [dM,hM];
// }

// get call using fetch api -retrieving the data
// let obj={
//     heading:"head"
// };
// async function utility(){
//     let content=await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let output=await content.json();
//     console.log(output);
// }
// utility();


// post call using fetch api 


// async function helper(){

//     let options={    //object hai options
//         method: 'POST',
//         body: JSON.stringify({   
//           title: 'jain',  // title,body,userId ,weight data hai or in niche vali 4 chizo ko send kr rahe hai server(link) par
//           body: 'hello',
//           userId: 2001,
//           weight:100,
//         }),
//         headers: {      //secret info. ,api key,authentication  pass krte hai headers main
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       };  //object create kr diya 
//       let content=await fetch('https://jsonplaceholder.typicode.com/posts',options);  //post network call krdi hai so isko await krna chahiye best practice
//       let response=content.json();  //converted into json format
//       return response;
// }
 
// async function utility(){
//     let ans=await helper();
//     console.log(ans);
// }
// utility();


//JSON.stringify() //json format ko string main convert kr deta hai

//   title,body,userId data hai jo hum send kr rahe hai is url vale server pe bcz jo bhi inka database hai waha par store kar liya 

// let op={ //json object
//     val:123 
// }
// in json string i.e by json.stringify()
// it converted into "{"val":123}"

// closures  - top level entity 
// fxns are bundled together with the References to its surrounding state 

// when we are creating the nested fxns then it always the create the closure of that fxn 
 
// js variables can belong to local or global scope 
// global variables can be made local (private ) with closures 

// closure is a process in which we bind the requested data with the function 

// function init(){
//     var name="xyz";//name is a local variable created by init
//     // displayname is the inner fxn that forms the closure 
//     function displayname(){
//         console.log(name);//use variable declared in the parent fxn 
//     }
//     displayname();
// }
// init();

function init(){ 
    var name="xyz";//name is a local variable created by init 
    // displayname is the inner fxn that forms the closure 
    function displayname(){ 
        console.log(name);//use variable declared in the parent fxn 
    } 
    return displayname; 
} 
let solve =init(); 
solve(); 
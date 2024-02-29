// adding 100 para
// const t1=performance.now();
// for(let i=1;i<=100;i++){
//     let element=document.createElement('p');
//     element.textContent='this is para '+i;
//     document.body.appendChild(element);
// }
// const t2=performance.now();
// console.log('this took '+(t2-t1)+'ms');

// optimizing a bit 
// const t3=performance.now();
// let mydiv=document.createElement('div');
// for(let i=1;i<=100;i++){
//     let element=document.createElement('p');
//     element.textContent='this is para '+i;
//     mydiv.appendChild(element);
// }
// document.body.appendChild(mydiv);
// const t4=performance.now();
// console.log('this took '+(t4-t3)+'ms');


// writing code using fragment by writing this we are optimizing the code by using only 1 reflow and 1 repaint 

// Use case :- jab hume multiple times dom ko update krna pad raha hai toh hum DocumentFragment ka use krenge 


// let fragment=document.createDocumentFragment();
// for(let i=1;i<=100;i++){
//     let element=document.createElement('p');
//     element.textContent='this is para '+i;
//     fragment.appendChild(element);
// }
// document.body.appendChild(fragment);  //1 reflow and 1 repaint


// Single threading 
// Js is a single threaded language :- at a time we can process only one command at a time 

// Observations:-
// 1.run-to-completion in nature
// 2.js does not execute multiple lines/fxns at the same time 

// js engine keeps a call stack of the fxns that are running when a fxn is invoked .It is array to list when all the fxns of the code has been done than the fxn is removed from the call stack i.e call stack ek list hoti hai jo humare fxns ka track rakh rahi hogi hume batana konsa fxn chala or kon kiske baad execute hoga

// function a(){
//     console.log('hi');
// }
// function b(){
//     console.log('hello');
//     a();
// }
// a();
// b();


// function addpara(){
//     let para=document.createElement('p');
//     para.textContent='this is para';
//     document.body.appendChild(para);
// }

// function addmsg(){
//     let para=document.createElement('p');
//     para.textContent='hey this is msg';
//     document.body.appendChild(para);
// }
// document.addEventListener('click',function(){
//     console.log('hello didi');
// })

// addmsg();
// addpara();

// event loop
// not synchronous/async :- koi particular time par mne run krne ki koshish ki toh wo run nhi hua or wo kuch time ke baad run ho raha toh main usko asynch if.e kuch particular time ke baad execute ho raha hai 
 
// 3 things in event loop to understand

// 1.call stack 
// 2.browser
// 3.event queue

// a bit more 
// async code js event loop ke through execute hota hai 
// any asynch code is handled by the browser
// when this async code is ready to be executed it will moved to the queue where it waits until the call stack is empty 
// whenever the call stack is empty code moves from queue to call stack and then executed 

// Interview ques 
// setTimeout very important async event
// 2 parameters 
// 1.fxn jo m krna chahta hu 
// 2.time -ki itne time baad ye fxn execute ho  


console.log('hi');
setTimeout(function(){
    console.log('hello everyone')
},5000);
console.log('hello');

// upar vale prog main sabse pehle console fxn jaega call stack main after print wo hat jaega call stack se 
// then setTimeout method jaega call stack main  uske baad wo 5000 ms w8 krega browser ke andar jane se pehle and tab tak 101 vali code line execute hogi parallely uske baad set timeout fxn handover ho jaega browser se event queue main event queue ye checkj krega ki call stack khali hai ki nahi agar call stack khali hoga toh event queue se fxn jo execute krna chahte hai wo chala jaega call stack main and after execution of whole fxn wo bhi call stack se hat jaega 

// in this way event loop works on asynchronous events 

// whenever you are trying to defer something until the stack is clear 


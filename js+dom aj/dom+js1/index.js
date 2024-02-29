// monitorEvents(document) by using this i can see all the invisible events occuring by clciking ,scrolling etc on the webpage 

// 1.way
// document.addEventListener('click',function(){
//     console.log('I have clicked on the doc');
// })

// 2. way
// function eventfxn(){
//     console.log('I have clicked on the doc');
// };
// document.addEventListener('click',eventfxn);


// adding and removing event listener 
// 3 conditions required for removing event listener 
// 1.same target 
// 2.same type 
// 3.same function 


// function eventfxn(){
//     console.log('I have clicked on the doc');
// };
// document.addEventListener('click',eventfxn);
// document.removeEventListener('click',eventfxn);


// event specific data nikal skta hu by doing below code  
// const content=document.querySelector('#wrapper');
// content.addEventListener('click',function(event){
//     console.log(event); //yaha par event ke andar kya kya pada hai dekh skta hu by doing this
// });


// how to prevent default action by doing the below code 

// let links=document.querySelectorAll('a');
// let thirdlink=links[2];
// thirdlink.addEventListener('click',function(event){
//     event.preventDefault();//prevent kar raha hai default action ko rdirect nhi kar pa raha google.com par 3rd vala link
//     console.log('maza aya');
// });


// let mydiv=document.createElement('div');
// for(let i=1;i<=100;i++){
//     let newelement=document.createElement('p');
//     newelement.textContent='this is para'+i;
//     newelement.addEventListener('click',function(event){
//         console.log('I have clicked on para');
//     });
//     mydiv.appendChild(newelement);
// }
// document.body.appendChild(mydiv);

// the above creating listener for each element which is not a optimized way 



// Optimized way  


// let mydiv=document.createElement('div');
// function parastatus(event){
//     console.log('I have clicked on para');
// }
// for(let i=1;i<=100;i++){
//     let newelement=document.createElement('p');
//     newelement.textContent='this is para'+i;
//     newelement.addEventListener('click',parastatus);
//     mydiv.appendChild(newelement);
// }
// document.body.appendChild(mydiv);

// ab sara paragraph ek hi fxn ko refer kar rahe hai or code thoda sa optimize hogya

// Most optimized sari mapping ki jaga agar main main div ke sath mapping kr du toh or jada optimized ho jaega code but ye code ka issue hai ki main div ke andar jaha bhi click kar dunga vahi par listener action shuru kr dega is issue ko sahi krne ke liya 1 property hai jo krti hai
//  target prop.;-returns the element where the event occurs


// let mydiv=document.createElement('div');
// function parastatus(event){
//     console.log('I have clicked on para');
// }
// mydiv.addEventListener('click',parastatus);
// for(let i=1;i<=100;i++){
//     let newelement=document.createElement('p');
//     newelement.textContent='this is para'+i;
//     mydiv.appendChild(newelement);
// }
// document.body.appendChild(mydiv);


// by using target property div ke upar event listener laga ke particular para ki property use kar paunga


// let mydiv=document.createElement('div');
// function parastatus(event){
//     console.log('Para' + event.target.textContent);
// }
// mydiv.addEventListener('click',parastatus);
// for(let i=1;i<=100;i++){
//     let newelement=document.createElement('p');
//     newelement.textContent='this is para'+i;
//     mydiv.appendChild(newelement);
// }
// document.body.appendChild(mydiv);


// ye dono case main Chal raha hai chaye main p par click karu yaa fr span par 
// let element=document.querySelector('#wrapper');
// element.addEventListener('click',function(event){
//     console.log('span pr click kia hai'+ event.target.textContent);
// });



// mujhe agar specific tag ke liya filtering krni hai toh is way se hoga
// let element=document.querySelector('#wrapper');
// element.addEventListener('click',function(event){
//     if(event.target.nodeName==='SPAN'){//ab akela span pe click krne par hi listener action perform krega
//         console.log('span pr click kia hai'+ event.target.textContent);
//     }
// });


// DOMContentLoaded event se pta chalta hai ki html ka sara code load or  process ho chuka hai  

// head tag main script ko dalna bad practice hoti hai bcz first script load hogi iska mtlb
// html content ke load hone se pehle 
// document.querySelector('footer').style.background='red'; ye error dega


// but fr bhi ham isko safely below wala way se kr skta hai bcz DOMContentLoaded ye btata hai ki all html code has been loaded and processed successfully but ye 1 bad practice hai




// If i want to write the script tag in head tag safely then i can do safely by this 
// <script> document.addEventListener('DOMContentLoaded',function(){

// }</script>







// DOM+Modern js-class3





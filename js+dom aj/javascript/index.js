// console.log('hello bro how are you?');

// // variable can be created by using let keyword and no need to define a data type

// // let a=5;
// // let a='love';
// let a=true;
// console.log(a);



// const num=12;
// // num=13; throws error assignment to constant variable

// let lastName='jain';
// console.log(lastName);
// lastName=2;
// console.log(lastName);

// let j=2;
// let k=5;
// let t=j**k;
// console.log(t);

// console.log(2>3);

// // ternary operator
// let age=18;
// let status=(age>=18)?'yes I can vote':'cannot vote';
// console.log(status);  //deprecated


// if-elseif -else 


// let marks=1;
// if(marks>=90){
//     console.log('A');
// }
// else if(marks>=80){
//     console.log('B');
// }
// else if(marks>=70){
//     console.log('C');
// }
// else if(marks>=60){
//     console.log('D');
// }
// else{
//     console.log('E');
// }

// In switch case we map the value with cases 

// let num=4;
// switch(num){
//     case 1: console.log('A');
//     break;
//     case 2: console.log('B');
//     break;
//     case 3: console.log('C');
//     break;
//     case 4: console.log('D');
//     break;
//     default : console.log('default');
// }


// for(let i=0;i<5;i++){
//     console.log(i);
// }

// let z=1;
// do{
//     console.log(z);
//     z++;
// }
// while(z<10);

// console.log('lets go');

// object create 

// let rectangle = {
//     length: 1,
//     breadth: 2,
//     draw : function(){
//         console.log('draw');
//     }
// };


// Camelcase -> numberOfStudents is used in factory fxn

// factory function  
  
// ye factory fxn basically ek object banata hai or usko return kr deta hai 

// function createRectangle(len,bre){

//     return rectangle = {
//         length: len,
//         breadth: bre,

        // this can also be done
        // len,
        // bre,


        // draw : function(){
        //     console.log('draw');
        // }
//         draw(){
//             console.log('drawing');
//         }
//     };    
// }
// let rectangleObj1=new createRectangle(5,4);
// let rectangle2=new createRectangle(10,40);
// let rectangle3=new createRectangle(20,60);




// constructor function ->Pascal notation-> first letter of every word is capital e.g: NumberOfStudents

// function Rectangle(len,bre){
//     this.length=len;  //this refers to the current object
//     this.breadth=bre;
//     this.draw=function(){
//         console.log('drawing');
//     }
// }

// constructor fxn main return nhi krte 



// object creation using constructor

//let rectangleObject=new Rectangle(40,50);   //new keyword creates empty object 

// dynamic nature of objects in which we can add or delete the properties or methods 

// rectangleObject.color='red';
// console.log(rectangleObject);
// delete rectangleObject.color;
// console.log(rectangleObject);

// let Rectangle1 = new Function(
//     'length','breadth',
//     `this.length=length;  
//     this.breadth=breadth;
//     this.draw=function(){
//         console.log('drawing');
//     }`
// );

// object creation using Rectangle1

// let rect=new Rectangle1(2,3);
// rect.length;

// console.log(rect);

// primitive type main copy banti hai 
//  Note :-primitives are copied by their value 

// let a=10;
// let b=a;
// a++;
// console.log(a);
// console.log(b);


// reference type main address pass hota hai 
// Note :- References are copied by their addresses or References 
// let a={ value : 10};
// let b=a;
// a.value++;
// console.log(a.value);
// console.log(b.value);

// jab hum primitive ko fxn ke andar pass krte hai toh uski copy bnti hai  i.e  pass by value concept

// let a=10;
// function inc(a){
//     a++;
// }
// inc(a);
// console.log(a);
// O/P is 10  not 11 bcz we are copying the primitive data of a i.e 10

// let a={value:10};
// function inc(a){
//     a.value++;
// }
// inc(a);
// console.log(a.value);
// O/P is 11 bcz we are copying the reference of object which has value 10 and it is incremented in the same object due to the reference

// Iterating through objects
// 1. by for-in loop
// let rectangle={
//     length:2,
//     breadth:4
// }
// keys are reflected through key variable
// values are reflected through objectname[key] 
// for(let key in rectangle){
//     console.log(key,rectangle[key]);
// }
// output of above code 
// length 2
// breadth 4


// 2. by for-of loop can be applied to iterables only i.e arrays or hashmaps only

// hack to apply for of loop on non iterables

// let rectangle={
//     length:2,
//     breadth:4
// }
// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }


// to check whether an property is present in an object or not 


// let rectangle={
//     length:2,
//     breadth:4
// }
// if('color' in rectangle){
//     console.log('present');
// }
// else{
//     console.log('absent');
// }


// Object cloning


// 1.Iteration method 

// let src={
//     a:10,
//     b:20,
//     c:30
// };
// let dest={};
// for(let key in src){
//     dest[key]=src[key];
// }
// console.log(dest);
// // for checking that it is cloned or not cloned by increase a prop.
// src.a++;
// console.log(dest);

// 2.Assign by using Object.assign({},src from where the values are copied)
                                // empty-{} object
// let src={
//     a:10,
//     b:20,
//     c:30
// };
// let src2={hi:5};
// let dest=Object.assign({},src,src2);
// console.log(dest);

// 3.Spread   let dest={...src}; by using this syntax

// let src={
//         a:10,
//         b:20,
//         c:30
//     };
// let dest={...src};
// console.log(dest);

// js 3

// Inbuilt objects and arrays

// 1.Math fxn

// String are of 2 types in js
// 1.primitive
// let lastName='love';

// 2.object string

// let lastName=new String('babbar');

// let msg='this is first msg';
// let words=msg.split(' ');
// console.log(words);

// template literal  ` `  this enhances the readability of the code

// let lastName='love';
// let msg=`hi 
// ${lastName}  // aage ${} or brackets ke andar variable ka name likh ke main refer kar paunga
// chai
// pe
// lo`;
// console.log(msg);


// let date=new Date();
// console.log(date); //print current date and time

// let date2=new Date('June 20 1998 07:15');

// let date3=new Date(1998,11,20,7); //month index starts from 0
// date3.setFullYear(2001); //by using getter and setter i can use properties 
// console.log(date3);

// arrays 

// let numbers=[1,3,5,7];
// insertion

// beginning-unshift()
// numbers.unshift(9);

// // end -push()
//  numbers.push(10);

// //  middle - splice()
// numbers.splice(5,0,'a');

//searching   console.log(numbers.indexOf(9));

// console.log(numbers);
// console.log(numbers.indexOf(9));

// we want to check if a number exist in an array 

// if(numbers.indexOf(3)!=-1) not a good practice
//     console.log('present');
 
// good way  numbers.includes(7) this method returns true or false value
// console.log(numbers.includes(7));

// console.log(numbers.indexOf(7,2));

//  1st value key jo find krni or 2nd value kis index se search ko shuru krna hai 

// all the above methods are applied on primitives i.e on numbers

// let courses=[         //created array of object
//    {no:1, naam:'rahul'}, //obj 1
//    {no:2, namm:'love'}  //obj 2
// ];
// console.log(courses);
// console.log(courses.indexOf({no:1,naam:'rahul'})); o/p -1 which is wrong so while working with objects i can't determine that it is working with right object or not bcz in objects we deal with references 

// by using callback fxn we will apply the above properties like that object is present or not  we will use find method 

// let course=courses.find(function(course){
//     return course.naam==='rahul';
// })

// by using arrow fxn means goes to  this fxn can be shortended and it will become more readable 

// let course=courses.find(course=>course.naam==='rahul'); //single line fxn 


// console.log(course);


// Removing Element 

// let numbers=[1,2,3,4,5,6,7];
//  removing from end -pop()
// numbers.pop() //7 removed last element
// console.log(numbers);

// // from beginning - shift
// numbers.shift(); //remove 1
// console.log(numbers);


//from middle-splice 
// numbers.splice(2,1);
// console.log(numbers);


// O/p 
// [ 1, 2, 3, 4, 5, 6 ]
// [ 2, 3, 4, 5, 6 ]
// [ 2, 3, 5, 6 ]


// Emptying an array 

// let numbers=[1,2,3,4,5,6,7];
//let numbers2=numbers; //copying the references or address and not the value
//1. numbers=[]; 
// best practice 2nd and 3rd 
// 2.
// numbers.length=0; // hamne apne array ko empty kar diya by doing this 
// 3. splice
// numbers.splice(0,numbers.length);
// 4.by using loop
// while(numbers.length>0){
//     numbers.pop();
// }
// console.log(numbers);
// console.log(numbers2);

// Combining and slicing arrays 

// let first=[1,2,3];
// let second=[4,5,6];
// let combined=first.concat(second);  //concatenate and combine  2 arrays
// console.log(combined);

// let marks=[10,20,30,40,50,60,70,80];
// let sliced=marks.slice(2,6);  //ending index se pehle ka ek Element leta hai
// let sliced=marks.slice(2);  //2 se lekar end tak sara elements slice ho jata
// let sliced=marks.slice();  pura array ki copy ban jati 10-80 tak i.e full slicing
// console.log(sliced);

// 2. method for combining using spread operator (...)
// combining by using spread operator which increases readability of code 

// let first=[1,2,3];
// let second=[4,5,6];
// let combined=[...first,'a',...second,'b',true,false];
// console.log(combined);

// copy kaise kre using spread operator
// let another=[...combined];
// console.log(another);

// Iterating on Arrays
// 1. using for-of loop 
// 2. using for each loop

//1. using for-of loop 


// let arr=[10,20,30,40,50];

// for(let value of arr){
//     console.log(value); // har baar new line main print kar raha hai
// }


// 2. for each loop -this can be done using call back fxn
// let arr=[10,20,30,40,50];

// array_name.forEach(fxn())

// arr.forEach(function(number){
//     console.log(number);
// });

// converting fxn into array fxn 
// arr.forEach(number=> console.log(number));

// Joining an array 

// let numbers=[10,20,30,40,50,60];
// const joined=numbers.join('+');
// console.log(joined);

// Splitting an array split() method creates an array 
// for breaking use split 
// let msg='This is my first msg';
// let parts=msg.split(' ');
// console.log(parts);

// for joining use join method 

// let joined=parts.join('_');
// console.log(joined);

// Sorting in an array 
// sort() fxn internally converts array Elements into strings 

// let numbers=[40,30,10,20,50];
// numbers.sort(); //
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);


// Filtering arrays
// mene filter lgaya ki mujhe bss +ve value chahiye

// let numbers=[1,2,-1,-4];

// using predicate fxn 
// let filtered=numbers.filter(function(value){
//     return value>=0;
// });

// using arrow fxn 
// let filtered=numbers.filter(value=> value>=0);
// console.log(filtered);

// output
// [ 1, 2 ]


// Mapping Arrays

// let numbers=[7,8,9,10];
// console.log(numbers);

// let items=numbers.map(function(value){
//     return 'student_no'+value;
// });

// using arrow fxn 
// let items=numbers.map(value=> 'student_no'+value);
// console.log(items);

// Mapping with Objects

// let numbers=[1,2,-2,-4];
// let filtered=numbers.filter(value=>value>=0);
// let items=filtered.map(function(num){
//     let obj={value : num};
//     return obj;
// });

// using arrow fxn
// let items=filtered.map(num=>{value : num});


// Chaining  not working
// let numbers=[1,2,-2,-4];
// let items=numbers
// .filter(value=>value>=0)
// .map(num=>{value : num}); //objects vala array create ho gya 
// console.log(items);




//  js basics 4


// function declaration 

// function run(){
//     console.log('running');
// }

// function call or invoke krna padega fxn chalane ke liya uske lia run() method use hota 
// run();

//1. method:- Hoisting is s a process of moving function declaration to the top of file and this is done automatically by js engine 
// sare fxn ek side main kar deta jab function execute hota 


// 2.method Named function assignment - ek variable ke andar assign kar diya or inko call hamesha likhne ke baad krenge hamesha 

// fxn assignment ke case main fxn call upar nhi kr skta 

// let stand = function walk(){
//     console.log('walking');
// }
// let jump=stand;
// jump();

// Anonymous function assignment
// let stand2 = function (){
//     console.log('walking');
// }
// stand2();

// stand(); //mujhe variable ko hi use krna padega jisko assign kiya 
// agar stand ko upar define kar diya toh nhi chalega kyoki hosting sirf fxn declaration par hi chalta main 

// let jump=stand;
// jump();


// js -dynamic language that's why below code is working 

// let x=1;
// x='a';
// console.log(x);


// function sum(a,b){  //correctly work for 2 perimeters
//     return a+b;
// };
// console.log(sum(2,3));


// if i forgot to define b value then it gives an error NaN bcz b value is undefined 
// console.log(sum(2));


// if i pass more than 2 arguments in fxn declaration 
// function sum(a,b){
//     console.log(arguments); //all the perimeters of sum will be present in arguments
//     return a+b;
// };
// let ans=sum(1,2,3,4,5,6);
// It forms object which has key value pairs and not an array

// special object called arguments 
// calculating sum of parameters 



// jitne margi perimeters pass krdo main sum kar paunga ab 

// function sum(){
//     let total=0;
//     for(let value of arguments)
//         total=total+value;
//     return total;
// };
// let ans=sum(1,2,3,4,5,6);
// console.log(ans);

// converted into object in above code 







// Rest parameter (...args) rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.

// function sum(...args){
//     console.log(args);
// }
// sum(1,2,3,4,5,6);

// jo bhi input ke andar dunga wo sare ek array main store ho jaega jiska name args diya hua hai mne (...args)



// function sum(num,value,...args){ //...args i.e rest operator ke baad main kuch bhi nhi likh skta 
    // error dega rest parameter will be the last Formal parameter agar main rest operator ke baad kuch likhta hu toh 
//     console.log(args);
// }
// sum(1,2,3,4,5,6);

// in the above 1 goes to num variable and 2 goes to value variable

// If i want to store varying perimeters then i can store these perimeters with the help of rest parameters 



// Default parameters 

// function interest(p,r,y){
//     return p*r*y/100;
// }
// console.log(interest(1000,10,5));

// agar user koi perimeter pass nhi kar raha toh hum default value dalenge usme i.e agar user r ki value nhi deta toh vo default value use krega

//Rule:- jaha se mne default perimeter bana diya toh waha se lekar right side ke last tak jitne bhi perimeters jonge mujhe unko bhi default perimeter bnana padega like r se lekar jitne bhi last tak perimeters honge unko default perimeter banana padega
// function interest(p,r=6,y=10){
//     return p*r*y/100;
// }
// console.log(interest(1000,10,5));
//console.log(interest(1000)); //o/p:600

// hack bad practice
//console.log(interest(1000,undefined,5)); //p=1000 r=6 y=5

// Getter and Setter 


// Getter:- access properties
// Setter:- change or mutate properties 

// let person={
//     fname:'akansh',
//     lname:'jain'
// };

// console.log(person);

// function fullname(){
//     // using placeholder i.e     ${}
//     return `${person.fname} ${person.lname}`;
// }  //issue-read only fxn 


// agar mujhe is fxn par getter lagana hua toh main get keyword ka use krunga 

// let person={
//     fname:'akansh',
//     lname:'jain',
    
//     get fullname(){  //object ke andar define krna 
//     return `${person.fname} ${person.lname}`;
//     },
//     set fullname(value){
//         let parts=value.split(' '); //splitting into parts array by using split method into 2 parts
//         this.fname=parts[0];  //updated part 1 darsha raha jis bhi object par call kr raha hu uska first name 
//         this.lname=parts[1];  //updated part 2
//     }  
// };


// console.log(`${person.fname} ${person.lname}`);


// console.log(fullname());
// console.log(person.fullname); //this statement calls getter 
// person.fullname='Rahul Kumar';
// console.log(person.fullname); // agar () laga denge toh person.fname() error through karega that function.fullname is not a function 



// Exception handling 

// we put chances error code in try block 


// let person={
//     fname:'akansh',
//     lname:'jain',
    
//     get  fullname(){   
//     return `${person.fname} ${person.lname}`;
//     },
//     set fullname(value){
//         if(typeof value!==String){
//             throw new Error('You have not sent a string');
//         }
//         let parts=value.split(' '); 
//         this.fname=parts[0];   
//         this.lname=parts[1];  
//     }  
// };


// try{
//     person.fullname=true; //this line calls setter 
// } //agar error aa jata hai toh vo catch block ke andar chala jaega 
// catch(e){
//     alert(e)
// }
// console.log(person.fullname); 



// Scope 

// let keyword is a local in {}

// {
//     let a=5;
//     // console.log(a);    
// }
// console.log(a);   a is not defined



// var keyword jis bhi fxn ke andar defined hai utna uska scope rehta 

// {
//     var a=3;
// }
// console.log(a);

// function walk(){
//     var a=5;
// }
// console.log(a);


// for(let i=0;i<10;i++){

// }
// console.log(i);
// throws error ReferenceError: i is not defined

// for(var i=0;i<10;i++){

// }
// console.log(i);

// if(true){
//     var a=10;
// }
// console.log(a);


// function ab(){
//     const a=10;
// }
// const a=5;
// function b(){
//     const a=10;
// }


// Sorting 



let a=[10,5,4,25];
a.sort(function(a,b){
    return a-b;
});
console.log(a);




// 1. method 

// let total=0;
// let arr=[1,2,3,4];
// for(let value of arr)
//     total+=value;
// console.log(total);

// Reducing the Array

// 2.method by reducing the array

// let arr=[1,2,3,4];
// let totalsum=arr.reduce((accumulator,currentValue)=>accumulator+currentValue,0);//0 ka mtlb accumulator ki value ko 0 se initialize kiya hai accumulator total ki tarah kaam krega and currentValue value ki tarah kaam krega 

// agar hum 0 nhi likhte dusre parameter main toh us case main mera accumulator first value se start hota hai or current value start hoga 2nd value se 

// console.log('Printing sum'); 
// console.log(totalsum);








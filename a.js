//-----------------------------------------------
///promise-all

// function promiseAll(functions) {
//   return new Promise((resolve, reject) => {
//     const results = [];
//     let completed = 0;

//     if (functions.length === 0) {
//       return resolve([]);
//     }

//     functions.forEach((fn, index) => {
//       try {
//         fn()
//           .then(value => {
//             results[index] = value;
//             completed++;
//             if (completed === functions.length) {
//               resolve(results);
//             }
//           })
//           .catch(err => {
//             reject(err); // reject immediately on first error
//           });
//       } catch (err) {
//         reject(err); // in case fn itself throws
//       }
//     });
//   });
// }


// const f1 = () => new Promise(res => setTimeout(() => res(1), 5000));
// const f2 = () => {console.log("f2 called"); return new Promise(res => setTimeout(() => res(2), 1000));}
// const f3 = () => new Promise(res => setTimeout(() => res(3), 2000));

// console.time("promiseAll");

// promiseAll([f1, f2, f3])
//   .then(results =>{
//      console.log("Resolved:", results)
//         console.timeEnd("promiseAll");
//     }) // [1, 2, 3]
//   .catch(err => console.error("Rejected:", err));


// //   const f4 = () => new Promise((_, rej) => setTimeout(() => rej("Error!"), 150));

// // promiseAll([f1, f4, f3])
// //   .then(results => console.log("Resolved:", results))
// //   .catch(err => console.error("Rejected:", err)); // "Error!"
// console.log("End of a.js");
// console.log( 5 + 8 + {});

// console.log((!0 && 7) + 5);

// console.log();
// 
//-----------------------------------------------------------------------------------------

// const user = {
//     name: "Alice",
//     age: 30,
//     address: {
//         city: "Wonderland",
//         zip: "12345",
//         temp: {
//             a: 1,
//             b: 2,
//             location:{
//                 lat: 0,
//                 long: 0
//             }
//         }
//     }
// };

// function deepClone(obj) {
   
// }

// let clonedUser = deepClone(user);
// clonedUser.address.city = "New City";
// clonedUser.address.temp.location.lat = 100;

// console.log("Original User:", user);
// console.log("Cloned User:", clonedUser);

// 
//console.log(promise.then("data"))
//---------------------------------------------------------------------------------------
// let cache = [{ a: 2, b: 4, result: 6 }];

// function add(a,b) {
//     const result =  a + b;   
//     return result;   
// }

// function isCache(a,b){
//     return cache.find((item)=>(item.a == a && item.b == b) || (item.a == b && item.b == a))
// }

// function memoize(a,b) {
//     let msg = isCache(a,b);
//         if (msg) {
//             return msg;
//         }else{
//             let result = add(a,b);
//             cache.push({a,b, result});
//             return result;
//         }
//     }
    
//     console.log(memoize(2,3));
//     console.log(memoize(2,4));
//     console.log(memoize(3,2));
//     console.log(memoize(5,4));
//     console.log(cache);

    
//---------------------------------------------------------------------------------------


//isCache is true, it will return cache object index

// function memoize(fn) {
//     let result;
//     return function(a,b) {
        
//             if(cache.length == 0){

//             result = fn(a,b)
//             cache.push({a,b,result})

//            return  result;

//             }else{


//         if(cache[0].a !== a && cache[0].b !== b){

//             result = fn(a,b)
//             cache.push({a,b,result})

//            return  result;

//         }else{
          
//           let final =  cache.filter((item)=>{
//               return  (item.a == a && item.b == b)
//             })
//                  return final;
//         }}
         

//     }}

// const memo = memoize(add);
// console.log(memo(2,4));
// console.log(memo(2,4));
// console.log(cache);



//  step-1: cache storage empty array
//  step-2: add function
//  step-3: Is cache function
// step-4: memorize function

//---------------------------------------------------------------------------------------


// const obj = { a: 1, b: { c: 2 } };
// const clonedObj = JSON.parse(JSON.stringify(obj));

// clonedObj.a=10;
// let str=structuredClone(obj)
// str.a = 2

// console.log(obj.a);


// ----------------------------------------------------------

//  let nums = [-2,-1,0,0,1,2];
//  let target = 0;
//     let array = 0;
//     let result = [];

//  for (let i = 0; i < nums.length-1; i++) {
    
//     for (let j = i; j < nums.length-1; j++) {
        
//         for (let k = 0; k < nums.length-1; k++) {
            
//             for (let l = 0; l < nums.length-1; l++) {
                

                
//             }
            
//         }


//         }}
    //------------------------------------------------------------------//
//  let obj = {
//     name:"nithish",
//     age:26,
//     role:"developer"
//  }

//  let obj2 = {
//     name:"kumar",
//     age:27,
//     __proto__:obj}


//  console.log(Object.entries(obj));
// obj2.__proto__ = obj;
   //  console.log(obj2.role);
   

//  obj={
//     3:3,
//     1:1,
//     2:2
//  };
//     console.log(Object.entries(obj));


// const search = document.querySelector('input');
// let timeout = null;
// search.addEventListener("keyup", (e) => {
//       clearTimeout(timeout);
//       timeout = setTimeout(() => {
//         console.log("Searching for:", e);

//       }, 500);
// });

// let arr = [1,2,34,4];

// arr.length = 0;

// console.log(arr);




//--------------------------------------------------------

// async function testing() {
//    const p1 = await new Promise((res,rej)=>{
//     setTimeout(()=>{res("i'm p1")},5000)});
//    console.log(p1);
//    const p2 = await new Promise((res,rej)=>{
//     setTimeout(()=>{res("i'm p2")}, 2000)});
//    console.log(p2);
// }
// testing()
 
//-----------------------///

// function taskOne() {
//   return new Promise(res => setTimeout(() => res("Task One Done"), 2000));
// }

// function taskTwo() {
//   return new Promise(res => setTimeout(() => res("Task Two Done"), 1000));
// }


// async function executeTasks() {
//     let P1 = taskOne();
//     let P2 = taskTwo();
//     const resultOne = await P1;
//     const resultTwo = await P2;
//     return [resultOne, resultTwo];
// }

// executeTasks().then(results => console.log(results));
//--------------------------------------------------------------------------------//

// function recur(n){
// if(n === 1)
// {
//   return 1;
// }else{

//   let result =  recur(n-1) * n;
//   console.log(result);
  
//   return result;
// }
// }

// recur(5);

//---------------------------------------------------------------

// function star(n) {

//   let a="";
//   let b="";

//   for (let i = n; i >= 1; i--) {
  
//     for (let j = i; j <= n; j++) {
      
//         a = a +"*";
//     }

//     a = a + "\n";   

// }

//   console.log(a)
//   console.log(b)
// }

// star(5);

//-----------------------------

// function star(n) {

//   let a = "";
//   let t = 1;
//   for (let i = 0; i < n; i++) {
    
//     for (let j = n; j < i; j--) {

//         a=a+"*";
      
//     }
    
//     a = a +"\n";
//   }
//   console.log(a);
  
// }

// star(5);

//----------------------------------------------------------


// function a() {

//   let n = 1;

//  function aa() {
    
//     console.log(n); 
    
//   }

//   setTimeout(()=>{
     
//       aa();
//     },2000)

//      console.log("a is called"); 
// }

// a();
//----------------------------------------------------------------

// function pattern(num){
    
//     let out = "";

    
    
//     for (let i = 0; i < num; i++) {
        
//         for (let j = 0; j < num; j++) {
//             if(j == num-1 || i == 0 || i == num-1 || j == 0 ){
//         out = out +"* "
//     }else{
//         out = out + "  "
//     }
            
//         }
//         // out = out +"*"
//         out = out + "\n"
        
//     }

// console.log(out);

// }

// pattern(4);
//---------------------------------------------------------------


// function triagle(no) {

//     let out = "";

// for (let i = no; i > 0; i--) {

//         for (let j = 0; j <= i; j++) {
//             out = out + "  ";
//         }
//         for (let k = no; k > i; k--) {
//            if(k == no){
//             out = out + "- ";
//             }else{
//                 out = out + "  ";
//             }
//         }
//         for (let l = no; l > i+1; l--) {
//             if(l == i+2){
//                 out = out + "- ";
//             }else{
//                 out = out + "  ";
//             }
//         }
        
//         out = out + "\n";
//     }

    // for (let i = 0; i < no; i++) {

    //     for (let j = 0; j <= i; j++) {
    //         out = out + "  ";
    //     }
    //     for (let k = no; k > i; k--) {
    //         if(k == no){
    //         out = out + "- ";
    //         }else{
    //             out = out + "  ";
    //         }
    //         // out = out + "- ";
    //     }
    //     for (let l = no; l > i+1; l--) {
    //         if(l == i+2){
    //             out = out + "- ";
    //         }else{
    //             out = out + "  ";
    //         }
    //         // out = out + "- ";
            
    //     }
        
    //     out = out + "\n";
//     // }

//     for (let i = 0; i < no; i++) {
        
//         for (let j = 0; j <= no; j++) {

//             if(j !== 0 || j !== no){
//                 out = out + "- ";

//             }else{
//                 out = out + "  ";
//             }
            
//         }
//         out = out + "\n";
        
//     }

//     console.log(out);
// }

// triagle(5);

////========================================================================


// function fun(num) {
    
//     let output = "";
//     for (let i = 0; i < num; i++) {
        
//         for (let j = 0; j < num; j++) {

//             if(i == 0 || j == 0 || i == num-1 || j == num-1 || i == j || j == (num - i -1) ){
//                 output = output + "* ";
//             }else{
//                 output = output + "  ";
//             }
            
            
//         }
        
//     }
//     console.log(output);
    
// }

// fun(5);

///---------------------------------------------

// function sep(arr,b,c) {
// let nums = arr;
// let rowsCount = b;
// let colsCount = c;

// let result = [];

// for (let i = 0; i < nums.length; i++) {

//     let nsd = [];
//     for (let j = i; j < nums.length && i <= rowsCount-1; j+=rowsCount) {
//         nsd.push(nums[j]);
//     }
//     // console.log(i);
//    if(i <= rowsCount-1){
//      result.push(nsd)}
// }

// console.log(result);
// }

// sep([1,2,3,4,5,6,7,8,9,10,11,12],3,4);
//==========================================================================

// function expect(n) {

//     return {toBe: function(a){
//         if(n === a){
//             console.log("Test passed");
//         } else {
//             console.log(`Test failed: expected ${a} but got ${n}`);
//         }

//     },
// notToBe: function(a){
//     if(n !== a){
//         console.log("Test passed");
//     } else {
//         console.log(`Test failed: expected not to be ${a}`);
//     }}
// }
// }

// expect(5).toBe(5); // Test passed
//=======================================================================

// function triagle(n) {
    
//         let array = [];
//     let out = [];

//     for (let i = 1; i <= n; i++) {
//         array.push(i)
//     }

//     for (let i = 0; i < array.length-1; i++) {
        
//         for (let j = 0; j < i; j++) {
//             out.push(array[j])
           
//         }
//         console.log(out)
//     }

    
//     // console.log(array);
    
// }

// triagle(6);

//======================================================================



// const a = () => {
//     const c = 42;
//     console.log(c);
    
//  };

// setTimeout(a, 5000);
//-------------------------------------------------

// var a;
// function a(params) {
    
// }
// console.log(typeof a);
// --------------------------------------

// let a = 10;
// {
//      console.log(a);
//     let a = 2;
//     console.log(a);
    
// }
// console.log(a);
//------------------------------------------------

// function fn([a,b,c]) {

//     return a+b+c;
    
// }

// function once(fn) {
//     let called = false;

//     return function (...args) {
//         if (!called) {
//             called = true;
//             // console.log(args);
            
//             return fn(args)
//         }
//     }
    
// }
//  let callOnce = once(fn);
//  console.log(callOnce(1,2,3));
// console.log(callOnce(1,2,3));
// \\------------------------


// "use strict";
// function aa() {
//     console.log(this);
    
// }
// aa();

// let obj = {
//     x: function() {
//         function a () {
//         console.log(this);
//     }a()
//     }
// }
// obj.x();
//-----------------------------

//  const obj = {
//     a: 1,
    
//     getA: function() {
//         return this.a;
//     }   
//  }

// const obj2 = {
//     __proto__: obj
// }
// console.log(obj2.getA());

////----------------------------------------------------
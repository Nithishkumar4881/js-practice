
// // console.log("Start")
// // setTimeout(() => console.log("Timeout"), 0)
// // Promise.resolve().then(() => console.log("Promise"))
// // console.log("End")
// // const obj1 = { name: "Nithish", skills: { js: true } };
// // const obj2 = structuredClone(obj1)

// // obj2.skills.js = false;

// // console.log(obj1); // false 
//  const articles = [
//   {
//     title: "A message to our customers",
//     upvotes: 12,
//     date: "2020-01-24",
//   },
//   {
//     title: "Alphabet earnings",
//     upvotes: 22,
//     date: "2019-11-23",
//   },
//   {
//     title: "Artificial Mountains",
//     upvotes: 2,
//     date: "2019-11-22",
//   },
//   {
//     title: "Scaling to 100k Users",
//     upvotes: 72,
//     date: "2019-01-21",
//   },
//   {
//     title: "the Emu War",
//     upvotes: 24,
//     date: "2019-10-21",
//   },
//   {
//     title: "What's SAP",
//     upvotes: 1,
//     date: "2019-11-21",
//   },
//   {
//     title: "Simple text editor has 15k monthly users",
//     upvotes: 7,
//     date: "2010-12-31",
//   },
// ];

// // articles.sort((a, b)=>a.upvotes - b.upvotes);
// articles.sort((a, b)=>new Date(a.date) - new Date(b.date));


// console.log(articles);
//---------------------------------------------------------------
// function game(num){
// var opertion = 0;

// for (let i = 1; num == 1 ; i++) {
  
//   if (num%2==0) {
//     num = num/2;
//   } else {
//     num = num-1;
//   }
//   opertion = i;
// }
// return opertion;

// }

// function game(num){
//   let count = 0 ;
//   while(num != 1){
//     num = num % 2 === 0 ? num / 2 : num -1;
//     count++;
//   }

//   return count;
// }



// let i=0;

// function game(params) {
 
//   if(params != 1){
//    i++;
//    if(i==9514){
//     debugger;
//    }
    
//     return game(params)
    
//   }
  
//   return i;
// }
// console.log(game(15));

//------------------------------------------

//Write a function that finds the length of the longest substring without repeating characters.

//  function longestSubstring(param) {

//   let params = Array.from(param);
// // console.log(params);

//   let sustr = params.reduce((acc,item)=>{

//   if(!acc.includes(item)){
//     acc.push(item);
//   }

//   return acc;

//  },[])

//  return sustr;
//   }


// console.log(longestSubstring("abca"));
//
// function longestSubstring(s) {
//   let set = new Set();
//   let left = 0;
  // let maxLength = 0;
//------------------------------------------------------
//   for (let right = 0; right < s.length; right++) {
//     while (set.has(s[right])) {
//       set.delete(s[left]);
//       left++;
//     }

//     set.add(s[right]);
//     maxLength = Math.max(maxLength, right - left + 1);
//   }

//   return maxLength;
// }

// console.log(longestSubstring("abcabcbb")); // 3
// ___________________________________________________________________

// function firstNoRepeatStr(str) {
//   let count = {};

//   // Step 1: Count frequency
//   for (let char of str) {
//     count[char] = (count[char] || 0) + 1;
//   }

//   // Step 2: Find first unique character
//   for (let char of str) {
//     if (count[char] === 1) {
//       return char;
//     }
//   }

//   return -1;
// }

// console.log(firstNoRepeatStr("aabbccd")); // d
//--------------------------------------------------------------

//  function twoSum (arr=[], sum) {
//   for (let i = 0; i < arr.length; i++) {
    
//      for (let j = 0; j < arr.length; j++) {
     
//       if(i != j){

//         if(arr[i] + arr[j] == sum){
//           console.log([i,j]);
          
//         }

//       }
    
//     }
    
//   }

// }

// twoSum([2, 7, 11, 15], 22)



// ---------------------------

//flatten array without using flat method

// let arr = [1,[2,[3],4],5];
// let a = 0;

// let flatten = []
// function arrFlat(farr) {
  
//   if (typeof farr[a] != "object" ){
      
//   flatten.push(farr[a])
//   a++;
//   return arrFlat(farr[a]);
// }else{
//   return arrFlat(farr[a]);
// }
//   return flatten;
// }

// console.log(arrFlat(arr));

//-------------------------------------------------------
// let a = "10"
// let obj = {a:"nithish"};
// let obj2 = {a:"nithish"};

// // obj[a]= 6;
// // obj["b"]=8;
// // // console.log(Object.keys(obj));

// // console.log(obj["10"]);


// let map = new Map();
// map.set(obj, "its my name");

// // console.log(map.keys());
// // console.log(map.get(obj));

// // console.log(obj.length);
// console.log(Object.length);

// let person = {name:"nithish"};

// let personSet = new Set();
// personSet.add(person)

// person.age = 26;
// // person= {age:20}
// personSet.add(person)
// console.log(personSet);

//------------------------------------------------------------

//Remove duplicates from array WITHOUT using Set.

// let arr = [1, 2, 2, 3, 4, 4, 5];

// let newArr = arr.reduce((acc, item)=>{

//   if(!acc.includes(item)) {
//     acc.push(item)
//   }
//   return acc;
// },[])

// console.log(newArr);
//_____________________________________________________

// Find Duplicates (No Set, No Object)
// let arr = [1, 2, 2,2, 3, 4, 4, 5];

// let map = new Map();

// let newArr = arr.reduce((acc, item)=>{

//   if(!map.has(item)){

//     map.set(item, true);
    
//   }else{

//    acc.push(item);
//   }
//   return acc;

// },[]);

// console.log(newArr);


// // Output: [2, 4]
//--------------------------------------------------------
// Problem 3 — Flatten Array (Without flat())


// let arr = [1, [2, [3], 4], 5];

//  let flat = [];

// function makeFlat(Arr) {
  
//   for (let i = 0; i < Arr.length; i++) {
    
//     if(Array.isArray(Arr[i])){
//        makeFlat(Arr[i])
//     }else{
//       flat.push(Arr[i])
//     }
    
//   }
//  return flat;
// }

// console.log(makeFlat(arr));


// Output: [1, 2, 3, 4, 5]

//--------------------------------------------------------

//Deep Flatten Object

// const obj1 = {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3
//     }
//   }
// };
// function flattenObject(obj, parentKey = "", result = {}) {
//   for (let key in obj) {
//     const newKey = parentKey ? parentKey + "." + key : key;

//     if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
//       flattenObject(obj[key], newKey, result);
//     } else {
//       result[newKey] = obj[key];
//     }
//   }

//   return result;
// }

// console.log(flattenObject(obj1));



// Output:
// {
//   "a": 1,
//   "b.c": 2,
//   "b.d.e": 3
// }


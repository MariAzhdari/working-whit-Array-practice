// //slice methods in array
// let arr =['a','b','c','d','e'];
// console.log(arr.slice()); 
// console.log(arr.slice(1));
// console.log(arr.slice(-1));
// console.log(arr.slice(2,3));
// console.log(arr.slice(1,-3));
// console.log(arr.slice(3,-1));

//splice

// let arr =['a','b','c','d','e'];
// console.log(arr);
// arr.splice(3);
// arr.splice(-1);
// console.log(arr);

//revers 
// let arr1 =['a','b','c','d','e'];
// console.log(arr1.reverse());

//concat
// let arr1 =['a','b','c','d','e'];
// let arr =['d','l','i','p','m'];
// let letter =arr1.concat(arr)
// console.log(letter);
// console.log([...arr,...arr1]);

//join
// let arr1 =['a','b','c','d','e'];
// let arr =['d','l','i','p','m'];
// let letter =arr1.concat(arr)
// console.log(letter.join(' * '));

// at methods
// let arr1 =['a','b','c','d','e'];
// console.log(arr1.at(2));
// let str ='mohijon';
// console.log(str.at(3));
// console.log("mohi".at(2));

//for of loop and forEch method

// const numbers =[200,156,90,-87,-543,44]
// for(const[ i, num ] of numbers.entries()){
//     if(num > 0){
        
//         console.log(` ${i+1} your number is ${num}`);
       
//     }else{
//      console.log(`${i+1} this is ${Math.abs(num)}`);
//     }
// }
// ________________________________________

// numbers.forEach((e,i,arr)=>{
//      if(e> 0){
//         console.log(`i is ${i+1} :your number is ${e}`);
       
//     }else{
//      console.log(`i is ${i+1} : this is ${Math.abs(e)}`);
//     }
// })

//forEach map and Set 
// Map
const arr1 = new Map(
    [['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling']]
);
console.log(arr1);
arr1.forEach(function (value,key,Map){
console.log(`${key}:${value}`);
})

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
currenciesUnique.forEach(function(value,_,_){
    console.log(`${value}:${value}`)})
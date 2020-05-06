var seasoning = `1234567891011`;
var seasoning = seasoning[10];

console.log('Hello World!'+ seasoning);
// Setting a variable equal to an Array
// Arrays are defined with []
// Grabbing an item from an array is called indexing an array
// For example arr[1] would give us the value at index 1
// Arrays aren't immutable they can be changed
// you can add things to the end of an array by using push()
// to the beginning of an array using unshift()
var arr = ['tom','larry','moe'];
arr[2] = 'Carie';
arr.push('Mary');
arr.unshift('Dom');
console.log('Log 1:',arr);
arr.pop();
console.log(arr[arr.length-1] , arr.length); // shows the last item in the array and the length of the array
console.log('Log 2:',arr);
//  splice can be used on an array to place an item 
// taken arguments: where (index), what is being replaced (index), item
// Release date of console 
//          1       2   3   4       5
var arr01 = [1988,1991,1995,1996,2004];
arr01.splice(0,1, 'Initial release date');
console.log(arr01);

var arr02 = ['Mitsie,Solomon','Kaya,Leisser'];
var str =arr02.join();
console.log(str);
console.log(str.split(','));

var testStr = 'Test'.split('');
var testArr = testStr.splice(1,0,'e');
console.log(testStr.join(''));

var str = 'GOOD MORNING VIETNAM';
var arr = str.split('');
console.log(arr);

arr.splice(4, 1,'-');
str = arr.join('');
console.log(str);
// typeof checks the data type 
//  -Example:
    // -typeof [] equals object
    // -typeof '' equals string
    // -typeof {} equals object
    // -typeof true equals boolean
    // -typeof undefined equals undefined
    // -typeof

// null 
//  -The ABSENSE OF ANYTHING
var thing = null;
// Undefined
//  -Not the same as not defined
//  -Relates to hoisting
//  -Item (usually variable, function, or Class)
// Boolean
// A true or false value
// Often referred to as truthy or falsy

var thing3 = true;
var thing4 = false;

// console.log(true == );
var thing ='ADAMANIUM,FELDSPAR,SILICA'
// if(thing.indexof(',') == true){
//     console.log(thing.split(','))
// }
//     else{
//         console.log(thing.indexOf('-'))
//     }
let strNumber ='1hijklmnop';
//is nan is a 
if(isNaN(strNumber)=== false){
    console.log('hit!')
}else{
    console.log('miss..')
}
// = is for assigning values
// == is a "soft check"
// === is a perfect or "hard check"

if(thing.length >20){
    thing=thing.split(',')
    thing = thing.splice(1,11,'random gold')
    console.log(thing)
}
var items = ['one','two','three','four'];
items.push('five');
items.splice(items.length/2,1,'hello');
console.log(items);

var x = 25;
if(x>24){
    // statement(s)
    console.log('x is larger than 24')
}else if(x = 23){
    // statement(s)
    console.log('condition2 is true');
}else{
    console.log('neither condition1 nor 2 is true')
    // statements when all other conditions evaluate to false
    // in this stituation both condition1 & condition2 evaluate to false.
    }
    // ! used to negate and make opposite, the value
    //  in true && true  === false
        // is any statement in an all 'and' conditional is false then the entire condition is false

        var n=0;
        var i=7;
        var k=12;

    if(i >10){
        console.log('both n and i are greater than 0');
        if(k >0){
            console.log('all, n,i and k are greater than 0 ')
            
        }
    }
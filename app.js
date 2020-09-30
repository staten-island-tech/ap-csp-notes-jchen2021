/* console.log("Hello my name is " + " JY")

console.log('Hello it\'s me Jy'); */

/*console.log("Hello it's me JY");*/

/*const name = "JYU"; //typeof can check why type of the variable is
const age = 24;*/
/*console.log(`Hello it's me and my name is ${name}`);*/
/* 
console.log("Hello it's me " + name " and my age is " + age + “ and i want sleep");

console.log(`Hello it's me ${name} and my name is ${age}`); */

/*const combined = name + age;
console.log(combined); //JYU24 - make it a string*/

/* const name = "Jiayu Chen";

function toUpper(text){
    const upperCaded = text.toUpperCase();
    console.log(upperCased);
}

toUpper(name)；

 */

/*  const toUpper = function(){
     asdashed
 }

const toUpper = () =>{
    asdashed
} */

/* const num1 = 100;
const num2 = 50;
let val;

//simple math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

//Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-5);
val = Math.pow(8, 2);
val = Math.min(2,5,14,37593);
val = Math.max(3,345,656,2321,5);
val = Math.random();

val = Math.random() * 20; //between 0-19 with desmos
val = Math.floor(Math.random() * 20 +1); //whole number between 0-20


console.log(val); */

/* const dice1 = 6;
const dice2 = 3;

if(dice1 === 6 || dice2 === 6{
    console.log('You rolled a double');
} 
else{
    console.log{"hahaha"};
} */
/* 
const user = {
    name: 'Hotaru',
    age: 18,
    single: true,
    purchases:["pen", "games", "anime figure"]
}

sayName:function(){
    
console.log(this.name);
}
user.sayName();

function apple(){
    console.log("apple");
}

//window.apple();
//apple();

// console.log(user.purchases);
//method: function to an object

console.log(this); //by default refoer to a window object

function saymyAge(){
    console.log(`My age is ${this}`);
}

saymyAge(); */

//switch
/* const color = 'red';

switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}

let day;
switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

console.log(`Today is ${day}`) */

//creat some arrays
const numbers = [56,234,435,256,6546,];
const numbers2 = new Array(23,546,224,67,34,32);
const fruit = ['Apple', 'Banana', 'peach'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()]

let val;

//Get array length
val = numbers.length;
//check if is array
val = Array.isArray(numbers);
// get single value
val = numbers[3];
//insert into array
numbers[2] = 100;
// find index of value
val = numbers.indexOf(36);

// mutatting arrags
numbers.push(250); //add on to end
numbers.unshift(120); //add on to front 
numbers.pop(); // take off from end
numbers.shift(); //take off from front
numbers.splice(1,3);//splice values (take off values from begin(1), to end(2))
numbers.reverse();//reverse

//Concatenate array
val = numbers.concat(numbers2); //both put together

//sorting arrays
val = fruit.sort();
val = numbers. sort();

//use the compare function
val = numbers.sort(function(x,y){
    return x - y;
});
//reverse sort 
val = numbers.sort 

console.log(numbers);
console.log(val);
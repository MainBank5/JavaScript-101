const firstName ='Karuga'

console.log( typeof firstName);

console.log('Hello world - This is fun');
//const can't be changed/reassigned but can be mutated eg:
const person = {
    name:'Eliud', 
    age: 26,
}

person.name = 'Jane';
person.age = 27;

console.log (person);

const numbers = [1,2,3,4,5];

numbers.push(6);

console.log(numbers);

const today = new Date;
console.log(today);
console.log(typeof today);

let val;
//numbers to string
val = String(5555);

val = String(9+2);


//bool to a string
val = String(true);

//output 
console.log(val);
console.log(typeof val);
console.log(val.length);

let bel;
bel = 5679;
//bel = String(8969);
console.log(bel.toFixed(3));

let sam;
sam = Number ('9712');
sam = Number (null);
console.log(sam);   

//toString

let num;
num = 15;

let text = num.toString();

console.log(text);

//strin

let col;


col = Math.floor(Math.random() *50);

console.log (col);

const lastName = 'William';
const secondName = 'Johnson';

let dal;

dal = lastName + secondName;

//concatenation

dal = lastName + ' ' + secondName;

console.log(dal);

let nem;
nem = 'Eliud ';
nem += 'Karuga'
console.log(nem);

let ball;
ball = 'Eliud';

ball =  firstName.concat(' ', lastName);
//uppercase and lowercase
sic = secondName.toUpperCase(); 
console.log(sic);
console.log(ball);

let roof;
roof = 'alligator';
//indexof () and lastindex of()
console.log(roof.lastIndexOf('a'));

//charAt() and get last charAt()

val = roof.charAt(roof.length -1);

console.log(val);

//split and substring

val = firstName.slice(0,4);
val = firstName.slice( -3)

console.log(val);

//split - turns string into an array
const str = 'Hello my name is Eliud I am a dev';

val = str.split(' ');

console.log(val);

const tags = 'web dev, design, programming, JavaScript, Python';

val = tags.split(',');

console.log(val);

//temperal strings 
let myName = "John";
let lstName = "Doe";

let temp = `Welcome ${firstName}, ${lastName}!`;

document.getElementById('demo').innerHTML = temp;

//temperal strings are a more neat way of working with long and/or multi-line strings in javascript 

let dtext = `The quick
brown fox
jumps over
the lazy dog`;

//two ways of creating Arrays
const number = [12, 14, 16, 18, 20];
const number2 = new Array(18, 20, 22, 24, 26, 28);
const fruits = ['apples', 'oranges','grapes', 'bananas'];
const mixed = [1, 'volvo', true, 'mazda', 4, {a:1, b:2}, new Date];

console.log(mixed);

let lengh = number.length;
console.log (lengh);
console.log(fruits.length);

//push add a new item to an array
number2.push(56);
number2[3] = 124;

console.log(number2);

//check if its an array 

val = Array.isArray(mixed);
console.log(val);




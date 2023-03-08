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

val = String(4+4)


//bool to a string
val = String(true);

//output 
console.log(val);
console.log(typeof val);
console.log(val.length);


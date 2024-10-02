// const myMap = new Map();

// const keyString  = "a string";
// const keyObj = {};
// const keyFunction = function (){};

// myMap.set(keyString,"Hello World");
// myMap.set(keyObj, "Value associated with obj");
// myMap.set(keyFunction,"Value associated with keyFunction");

// console.log(myMap.size);
// console.log(myMap.get(keyString));
// console.log(myMap.get(keyObj));
// console.log(myMap.get(keyFunction));

// myMap.set(0,"zero");
// myMap.set(1,"One");

// for(const [key,value] of myMap){
//     console.log(`${key} = ${value}`);
// }

// for(const key of myMap.keys()){
//     console.log(key);
// }

// for(const value of myMap.values()){
//     console.log(value);
// }

// for(const [key,value] of myMap){
//     console.log(key,value);
// }

// myMap.forEach((value,key) => {
//     console.log(`${key} = ${value}`);
// });
// myMap.forEach((key,value) => {
//   console.log(key,value);
// });
// myMap.forEach((value, key) => {
//   console.log(value,key);
// });
// myMap.forEach((value, key) => {
//   console.log(key,value);
// });

// const kvArray = [
//     ["key1","value1"],
//     ["key2", "value2"]
// ];

// const myMap = new Map(kvArray);

// console.log(myMap.get("key1"));
// console.log(Array.from(myMap));
// console.log(Array.from(myMap.keys()));

// const original = new Map([[1,"One"]]);
// const clone = new Map(original);
// console.log(clone.get(1));
// console.log(original === clone);

// const first = new Map([
//     [1,"One"],
//     [2,"Two"],
//     [3,"Three"]
// ]);
// const second = new Map([
//     [1,"Uno"],
//     [2,"Dos"]
// ]);

// const merged = new Map([...first,...second]);

// console.log(merged.get(1));
// console.log(merged.get(2));
// console.log(merged.get(3));

// const first = new Map([
//   [1, "One"],
//   [2, "Two"],
//   [3, "Three"],
// ]);
// const second = new Map([
//   [1, "Uno"],
//   [2, "Dos"],
// ]);

// const merged = new Map([...first, ...second,[1,"eins"]]);

// console.log(merged.get(1));
// console.log(merged.get(2));
// console.log(merged.get(3));

// const fruits = new Map([
//     ["Apples", 500],
//     ["Bananas", 300],
//     ["Oranges", 200]
// ])
// //console.log(fruits.get("Apples"));

// fruits.set("Kiwi",300);
// fruits.set("Lemon",100);
// fruits.set("Potato",600);

// console.log(fruits.get("Kiwi"));
// console.log(fruits.keys(0));
// console.log(fruits instanceof Map);
// console.log(fruits.size);

// fruits.delete("Apples");
// console.log(fruits.size);
// let text = "";
// fruits.forEach(function(value,key){
//     text = key + " = " + value;
// });
// console.log(text);

// const apples = {name: 'Apples'};
// const bananas = { name: "Bananas" };
// const oranges = { name: "Oranges" };

// const fruits = new Map();

// fruits.set(apples,500);
// fruits.set(bananas,300);
// fruits.set(oranges,400);

// console.log(fruits.get(bananas));

// const fruits = [
//     {name: "apples", quantity: 300},
//     {name: "bananas", quantity: 500},
//     {name: "oranges", quantity: 200},
//     {name: "kiwi", quantity: 150}
// ];

// function myCallback({quantity}){
//     return quantity >200 ? "ok" : "low";
// }

// const result = Map.groupBy(fruits,myCallback);

// let text = "These fruits are ok: <br>";
// for(const x of result.get("ok")){
//     text += x.name + " " + x.quantity + "<br>";
// }
// for(const x of result.get("low")){
//     text += x.name + " " + x.quantity + "<br>";
// }

// console.log(result.get("ok"));


// const fruits = [
//   { name: "apples", quantity: 300 },
//   { name: "bananas", quantity: 500 },
//   { name: "oranges", quantity: 200 },
//   { name: "kiwi", quantity: 150 },
// ];

// // Callback function to select low volumes
// function myCallback({ quantity }) {
//   return quantity > 200 ? "ok" : "low";
// }

// // Group by ok and low
// const result = Map.groupBy(fruits, myCallback);

// // Display Results
// let text = "These fruits are Ok: <br>";
// for (let x of result.get("ok")) {
//   text += x.name + " " + x.quantity + "<br>";
// }
// text += "<br>These fruits are low: <br>";
// for (let x of result.get("low")) {
//   text += x.name + " " + x.quantity + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

// console.log(result.get("ok"));

// console.log(typeof {name: 'John'});
// console.log(typeof[1,2,3,4]);
// console.log(typeof new Map());
// console.log(typeof new Set());
// console.log(typeof null);
// console.log(typeof function myFunc(){});

// const fruits = ["Banana","Orange","Apple"];
// console.log(Array.isArray(fruits));

// const time = new Date();
// console.log("Date: " + (time instanceof Date));

// console.log(fruits instanceof Array);

// const fruits1 = new Set (["apples","Banana","orange"]);
// console.log(fruits1 instanceof Set);

// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "Blue"
// };

// person = null;
// person = undefined;

// console.log(typeof person);

// console.log("John".constructor + "<br>" +
//     "John".constructor + "<br>" +
//     (3.14).constructor + "<br>" +
//     false.constructor + "<br>" +
//     1234n.constructor + "<br>" +
//     {}.constructor + "<br>" +
//     [].constructor + "<br>" +
//     new Date().constructor + "<br>" +
//     new Set().constructor + "<br>" +
//     new Map().constructor + "<br>" + 
//     function(){}.constructor
//  );

// console.log(fruits.constructor === Array);

// console.log(
//     Number("3.14") + "<br>" + 
//     Number(Math.PI) + "<br>" + 
//     Number("   ") + "<br>" + 
//     Number("") + "<br>" + 
//     Number("99 88") + "<br>" + 
//     Number("John") + "<br>"
// );

// let x = "5";
// let y = +x;
// console.log(typeof y + typeof x);

// let a = "John";
// let b = +a;
// console.log(typeof a + " " + typeof b);

// const person1 = {
//     name: "Alice",
//     age: 30,
//     city: "Wonderland"
// };
// const { name, age } = person1;
// console.log(name);
// console.log(age);

// const  user = {
//     id: 1,
//     info: {
//         name1: "Charlie",
//         age1: 50
//     }
// };
// const {info: {name1,age1,city = "Bogra"}} = user;

// console.log(name1);
// console.log(age1);
// console.log(city);

// const info = {
//     firstName: "Diana",
//     lastName: "Prince"
// };
// const {firstName: first, lastName: last} = info;
// console.log(first);
// console.log(last);

// function greet({name,age}){
//     console.log(`Hello, my name is ${name} and I am ${age} years old.`);
// }
// const user1 = {name: "Eve", age: 22};
// greet(user1); 

// let name2 = "W3Schools";
// let [a1,a2,a3,a4,a5,a6,a7,a8,a9] = name2;
// console.log(a2);

// const fruits2 = ["Banana","Orange","Apple"];
// const [fruitsA,,fruitsB] = fruits2;
// console.log(fruitsA);
// console.log(fruitsB);

// const numbers = [10,20,30,40,50,60,70];
// const [b1,b2,...rest] = numbers;
// console.log(rest);

// const fruits3 = new Map([
//     ["Apples",500],
//     ["Bananas",300],
//     ["Oranges",200]
// ]);
// let b3 = "";
// for( const [key,value] of fruits3){
//     b3 += key + " is " + value + ", ";
// }
// console.log(b3);

// let firstName = "John";
// let lastName = "Doe";

// [firstName, lastName] = [lastName, firstName];

// console.log(firstName);
// console.log(lastName);

// console.log(5 & 1);
// console.log(5 ^ 1);

// function dec2bin(dec){
//     return (dec >>> 0).toString(2);
// }
// console.log(dec2bin(-5));

// function bin2dec(bin){
//     return (bin,2).toString(10);
// }
// console.log(bin2dec(101));

// let text1 = "Visit W3Schools";
// let n = text1.search("W3Schools");
// console.log(n);

// function myFunction(){

// }
// let ab = "Welcome Guest!"; 
// try {
//     alert(ab);
// } catch (err) {
//     console.log(err.message);
// }

// function myFunction(){
//     const message = document.getElementById("demo1");
//     message.innerHTML = "";
//     let x = document.getElementById("demo").value;
//     try {
//         if(x.trim() == "") throw "empty";
//         if(isNaN(x)) throw "Not a Number";
//         x = Number(x);
//         if(x<5) throw "too low";
//         if(x>10) throw "too high";
//     } catch (err) {
//         message.innerHTML = "Input is " + err;
//     }
//     finally{
//         document.getElementById("demo").value = "";
//     }
// }

// let num = 1;
// try {
//     num.toPrecision(500);
// } catch (error) {
//     console.log(error.name);
// }

// let x = 5;
// try {
//     x = y + 1;
// } catch (error) {
//     console.log(error.name);
// }

// try {
//     eval("alert('Hello)");
// } catch (error) {
//     console.log(error.name);
// }


// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 1234,
//     fullName: function(){
//         return this.firstName + " " + this.lastName;
//         //return this;
//     }
// };
// console.log(person.fullName());

// let x = this;
// console.log(x);

// function myFunction(){
//     return this;
// }
// console.log(myFunction());

// const person1 = {
//     fullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
// };
// const person2 = {
//     firstName: "John",
//     lastName: "Doe"
// };
// let x = person1.fullName.call(person2);

// console.log(x);

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
// };

// const member = {
//     firstName: "Hege",
//     lastName: "Nilsen"
// };

// let fullName = person.fullName.bind(member);

// console.log(fullName());

// let myFunction = (a,b) => a * b;
// console.log(myFunction(4,5));

// let hello = "";
// hello = function(){
//     return "Hello world";
// }
// console.log(hello());

// hello1 = () => {
//     return "Hello world. I am a pro Coder." 
// }
// console.log(hello1());

// hello2 = () => "Hello people. let's make the world better";
// console.log(hello2());

// let hello3  = "";
// hello3 = (a) => "Hello " + a;
// console.log(hello3("Universe!"));

// let hello4 = "";
// hello4 = b => "Hello " + b;
// console.log(hello4("People"));

// let hello = "";
// hello = () => {
//     document.getElementById("demo").innerHTML += this;
// }
// window.addEventListener("load",hello);
// document.getElementById("btn").addEventListener("click",hello);

// class Car {
//     constructor (name,year){
//         this.name = name;
//         this.year = year;
//     }
//     age(){
//         const date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }

// const myCar1 = new Car ("Ford", 2014);
// const myCar2 = new Car ("Audi", 2019);

// console.log(myCar1.name + " " + myCar1.year);
// console.log(myCar2.name + " " + myCar2.year); 
// console.log("My car " + myCar1.name + " is " + myCar1.age() + " years old.");
// console.log("My Car " + myCar2.name + " is " + myCar2.age() + " years old.");

class Car {
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    age(x){
        return x - this.year;
    }
}
const date = new Date();
let year = date.getFullYear();

const myCar = new Car("Fiat", 2014);

console.log("My Car is " + " is " + myCar.age(year) + " years old.");


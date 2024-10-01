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


const fruits = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 },
];

// Callback function to select low volumes
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by ok and low
const result = Map.groupBy(fruits, myCallback);

// Display Results
let text = "These fruits are Ok: <br>";
for (let x of result.get("ok")) {
  text += x.name + " " + x.quantity + "<br>";
}
text += "<br>These fruits are low: <br>";
for (let x of result.get("low")) {
  text += x.name + " " + x.quantity + "<br>";
}
document.getElementById("demo").innerHTML = text;

console.log(result.get("ok"));
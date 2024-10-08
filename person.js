const {printPiramid} = require( "./code.JS")

// const name = "John";
// const age = 40;
// export {name,age};

//const messsage = () => {
//     const name = "John";
//     const age = 40;
//     return name + " is " + age + " years old.";
// };

// export default Message;

let text =
  '{"employees":[' +
  '{"firstName":"John","lastName":"Doe" },' +
  '{"firstName":"Anna","lastName":"Smith" },' +
  '{"firstName":"Peter","lastName":"Jones" }]}';

  const obj =  JSON.parse(text);
  console.log(obj.employees[1].firstName + " " + obj.employees[2].lastName);

  let x = 15 * 5;
  debugger;
  console.log(x);

  var numbers = [45, 4, 9, 16, 25];
  var over18 = numbers.filter(myFunction);

  function myFunction(value){
    return value > 18;
  }
  console.log(over18);

  const func = (a,b) => a * b;
  console.log(func(4,5));

  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "Blue"
  };

  let { firstName, age } = person;
  //let personInfo = person.firstName + " is " + person.age + " years old.";
  let personInfo = firstName + " is " + age + " years old.";
  console.log(personInfo);

  const cars = ["BMW", "Volvo", "Mini"];
  let a = "";
  for(let x of cars){
    a += x + "\n";
  }
  console.log(a);
  
  let language = "JS";
  let str = "";
  for(let x of language){
    str += x + "\n";
  }
  console.log(str);
  
const fruits = new Map([
  ["Apples", 500],
  ["Bananas", 300],
  ["Oranges", 100]
]);

let numb = fruits.get("Apples");
console.log(numb);

printPiramid(3);
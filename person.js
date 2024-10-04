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

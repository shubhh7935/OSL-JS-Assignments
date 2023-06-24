// DATA STRUCTURES: OBJECTS
const person = {
  name: "Shubham",
  age: 20,
  email: "thessingh08gmail.com",
  printPersonDetails: function(){
  console.log("Name:", this.name);
  console.log("Age:", this.age);
  console.log("Email:", this.email);
  }
};

// function printPersonDetails(person) {
//   console.log("Name:", person.name);
//   console.log("Age:", person.age);
//   console.log("Email:", person.email);
// }
person.printPersonDetails()

//FUNCTION BINDING

const user = {
  name: "Shubham",
  sayName: function() {
    console.log(this.name);
  }
};
const boundSayName = user.sayName.bind(user);
boundSayName();

//bind method creates a new function called boundSayName which binds the sayName method to user object. this makes the this keyword refer to the user object

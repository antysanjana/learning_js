/*const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };

  console.log(person.fullName());*/

  //Adding a Method to an Object
  /*const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566
  };

  person.fullName = function() {
    return this.firstName + " " + this.lastName;
  };

  console.log(person.fullName());*/

  //Using Built-In Methods
  const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return (this.firstName + " " + this.lastName).toUpperCase();
    }
  };

  console.log(person.fullName());
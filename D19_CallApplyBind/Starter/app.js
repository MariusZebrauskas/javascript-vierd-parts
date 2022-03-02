let obj = {
  name: 'marius',
  surname: 'zebra',
  getName: function () {
    let fullname = this.name + ' ' + this.surname;
    return fullname;
  },
};


// arrow function is not working on this   
const getPerson = function () {
    console.log(this);
    return console.log("good morning " + this.getName());
};

let greeting = getPerson.bind(obj);

greeting();

// dynamic obj
let obj = {
  name: 'darius',
  tester: function () {
    hello = `hello  ${this.name}`;
  },
};

const test = () => {
  obj.tester();
  document.body.innerHTML = hello;
};

test();

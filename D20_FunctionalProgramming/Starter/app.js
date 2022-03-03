let arr = [1, 2, 3];

let arr2 = [];

arr.forEach((a, i) => {
    //   console.log('i:', i)
    console.log('a:', a);
    //   a.push(i);
    arr2.push(a  * 2 );
});

console.log('arr2:', arr2)

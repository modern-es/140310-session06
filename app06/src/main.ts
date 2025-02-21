//Closure
function createCounter() {
  let counter = 0;


  return function () {
    counter += 1;
    return counter;
  }
}


let cnt = createCounter();

console.log(cnt())
console.log(cnt())
console.log(cnt())


let obj = { a: 1, b: 2 };

// let a = obj.a;
// let b = obj.b;
let { a, b } = obj;

let arr = [1, 2];
// let x = arr[0];
// let y = arr[1];

let [x, y] = arr;

console.log(a, b)
console.log(x, y)

const xhr = new XMLHttpRequest();
xhr.open("GET", "localhost");
xhr.onload = function () {

}
xhr.send();


JSON.parse
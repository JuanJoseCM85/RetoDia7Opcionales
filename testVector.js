let libreriaVector = require("./vector");

let v1 = new libreriaVector.vector(4,5);
let v2 = new libreriaVector.vector(4,5);

console.log(v1);
console.log(v2);

v1.add(v2);

console.log(v1);

v1.productNum(2);

console.log(v1);

v1.subs(v2);

console.log(v2);

v1.product(v2);

console.log(v1);
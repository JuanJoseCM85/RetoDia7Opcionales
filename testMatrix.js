let libreriaMatrix = require("./matrix");

console.log("Matriz 1");
let m1 = new libreriaMatrix.matrix(3,5,60);
console.log(m1.miMatriz);
console.log("Matriz 2");
let m2 = new libreriaMatrix.matrix(3,5,30);
console.log(m2.miMatriz);

let m3 = m1.add(m2);
console.log("Suma de M1 y M2");
console.log(m3.miMatriz);

let n = 2;
let m4 = m1.productNum(n);
console.log("Producto de m1 por " + n);
console.log(m4.miMatriz);

console.log("Resta de M1 y M2");
let m5 = m1.subs(m2);
console.log(m5.miMatriz);

let m6 = m1.product(m2);
console.log("Producto de M1 y M2");
console.log(m6.miMatriz);
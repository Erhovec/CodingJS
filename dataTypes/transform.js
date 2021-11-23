// Выполнить явное преобразование(number, string, boolean)

let num1 = Number("10");

let str = String(10);
let str1 = String(false + "test");

let a = 10;
let b = 3;
let c = String(b - a);

let a1 = 10;
let b1 = "world";
let c1 = String(a + b);

let bool = Boolean(10);
let bool1 = Boolean(null || 10);
let bool2 = Boolean("15" && false);
let bool3 = Boolean(10 && false && "15");

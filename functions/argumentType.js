//  Напишите функцию вычисления типа аргумента и вывод типа в консоль

function argumentType(arg) {
  console.log(typeof arg);
}

argumentType([1, 2, "Hello"]);
argumentType();
argumentType(2);
argumentType("Hello");
argumentType(true);
argumentType(512 ^ 552);
argumentType("profit" * true);

//  Напишите функцию вычисления типа аргумента и вывод типа в консоль

function getArgumentType(arg) {
  console.log(typeof arg);
}

getArgumentType([1, 2, "Hello"]);
getArgumentType();
getArgumentType(2);
getArgumentType("Hello");
getArgumentType(true);
getArgumentType(512 ^ 552);
getArgumentType("profit" * true);

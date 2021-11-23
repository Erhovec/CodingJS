/* 1 Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярное выражение, которое найдет 
строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b' */
let string = "ahb acb aeb aeeb adcb axeb";
let reg1 = string.match(/a.b/gs);

// 2 Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные
let string1 = "2+3 223 2223";
let reg2 = string1.match(/2[+]3/g);

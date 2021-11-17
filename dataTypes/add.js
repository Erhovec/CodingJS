// Выполнить сложение различных типов(string+boolean, string+number, number+boolean)

let a = "" + false;  
let b = "words" + true;  
let c = 10 + " " + 15;  
let d = true + 10;   
let e = 15 + false + true + 2;  
let f = "4px" + 3;   



// Выполнить деление различных типов(string/boolean, string/number, number/Boolean)
"profit" / true;  // NaN
false / "";  // NaN
"" / 10; // 0
54 / "good luck";  // NaN
20 / true;  // 20
false / 3;  //  0

// Выполнить явное преобразование(number, string, boolean)
Number(true);   //1
Number("10");  //  10


String(10);   // "10"
String(false + "test");  // "false"

let a = 10;
let b = 3;
String(b - a);   // "-7"

let a = 10;
let b = "world";
String(a + b);   // "10world"


Boolean(10);   // true
Boolean(null || 10);  // true
Boolean("15" && false);  //false
Boolean(10 && false && "15");  //false

/*             =====================                   

console.log(true + false);       // 1
console.log('<br>'+(8 / "2"));   // 4
console.log.("number" + 5 + 1)); // number51 ("number"5 + 1)
console.log(5 + 1 + "number"));  // 6number  (6 + "number")
console.log(7 && 2));            // 2
console.log(2 && 7));            // 7
console.log(null + 1));          // 1 (0+1=1)
console.log(undefined + 1));     // NaN      (NaN + 1)
console.log("five" + + "two"));  // fiveNaN  ("five" + (+"two"))=> "five" + NaN
console.log('true' == true));    // false    (NaN == 1 => false)
console.log(false == 'false'));  // false    (0 == NaN => false)
console.log(null == ''));        // false
console.log(!!"false" == !!"true")); // true (true == true)
console.log("4" - 3));           // 1
console.log("4px" - 3));         // NaN
console.log(0 || "0" && 1));     // 1

*/

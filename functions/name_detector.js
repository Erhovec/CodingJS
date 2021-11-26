/*  
В терминале оплаты сохранено ваше имя, напишите функцию для определения 
имени в терминале(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)  
*/

let myName = "Kate";

function checkName(name, text = "нет такого имени") {
  if (name === myName) {
    console.log("Привет " + name);
  } else {
    console.log(text);
  }
}
checkName("Kate");

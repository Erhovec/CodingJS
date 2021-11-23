//Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив

let manufacturers = ["Honda", "BMW", "Audi", "Toyota", "Nissan", "Ferrari"];

//manufacturers.toString();

//var arr = "abcdef".split(''); // creates an array from a string

let string = manufacturers.join(","); // creates a string from that above array
console.log(string);

let array = string.split(",");
console.log(array);

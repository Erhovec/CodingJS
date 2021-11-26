//Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив

let manufacturers = ["Honda", "BMW", "Audi", "Toyota", "Nissan", "Ferrari"];

let string = manufacturers.join(",");
console.log(string);

let array = string.split(",");
console.log(array);

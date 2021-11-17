/* 
1. Создать объект car, добавить к нему свойство color со значением 'черный'
2. Изменить свойство color объекта car на 'зеленый'
3. В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя
4. Проверить наличие войств объекта и их значений
*/

let car = {};
car.color = "черный";
car.color = "зеленый";

function power(carPower) {
    console.log(carPower);

    return carPower;
};

car.power = power(300);
 
for (let key in car) {
    console.log(key + ": " + car[key]);
};

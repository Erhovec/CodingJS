// Создать 2 объекта: animal и cat, объект animal добавить свойство move, 
//объект cat должен наследовать свойство move


//1 method 
let animal = {
    move: true
};

let cat = Object.create(animal);


//2 method
 function Animal () {
    this.move = true;
 }

let cat = new Animal();


//3 method
class Animal {
    constructor () {
       this.move = true;
    }
}

class Cat extends Animal {

}

let cat = new Cat ();

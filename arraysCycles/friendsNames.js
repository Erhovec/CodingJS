// 3. Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello

let friends = ["Катя", "Оля", "Миша", "Петя", "Дима"];

let helloFriends = friends.map((name) => `hello ${name}`);
console.log(helloFriends);

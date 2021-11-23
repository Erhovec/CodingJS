// 9. Реализовать цикл, который выводит в консоль простые числа

let number = 15;

nextPrime: for (let i = 2; i <= number; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }

  console.log(i);
}

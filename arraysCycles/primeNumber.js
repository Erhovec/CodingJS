// 9. Реализовать цикл, который выводит в консоль простые числа

let number = 10;

nextPrime: for (let i = -10; i <= number; i++) {
  if (i <= 0 || i === 1) {
    continue;
  } else {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) continue nextPrime;
    }
  }
  console.log(i);
}

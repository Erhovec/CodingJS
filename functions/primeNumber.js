// Напишите функцию, которая определяет является ли число простым или нет

function getPrimeNumber(n) {
  if (n <= 0 || n === 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

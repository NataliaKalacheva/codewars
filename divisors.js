// Create a function that takes an integer n > 1 and returns an array with all of the integer's divisors

function divisors(integer) {
  if (integer <= 1 || typeof integer !== "number") {
    return;
  }

  let res = [];
  let acc = integer - 1;

  while (acc > 1) {
    if (integer % acc === 0) {
      res.push(acc);
    }
    acc--;
  }

  return res.length ? res.sort((a, b) => a - b) : `${integer} is prime`;
}

function divisors(integer) {
  if (integer <= 1 || typeof integer !== "number") {
    return;
  }

  let res = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      res.push(i);
    }
  }

  return res.length ? res : `${integer} is prime`;
}

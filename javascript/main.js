//Kata 1
function add(a, b) {
  return a + b;
}

//Kata 2
function multiply(a, b) {
  let count = 0;
  let result = 0;
  while (count < b) {
    result += add(a, 0);
    count++;
  }
  return result;
}

//Kata 3
function power(n, x) {
  let count = 0;
  let result = 1;
  while (count < n) {
    result = multiply(result, x);
    count = add(count, 1);
  }
  return result;
}

//Kata4
function factorial(a) {
  let count = 1;
  let result = 1;
  while (count <= a) {
    result = multiply(count, result);
    count = add(count, 1);
  }
  return result;
}

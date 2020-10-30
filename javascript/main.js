//Kata 1- Using A=2 and B=4
function add(a, b) {
  return a + b;
}
// returns the answer of 6, simple addition of 2+4

//Kata 2- Using A=6 and B=4
function multiply(a, b) {
  let count = 0;
  let result = 0;
  while (count < b) {
    result += add(a, 0);
    count++;
  }
  return result;
}
// returns answer of 24, runs until count is less than 4 and then adds once more

//Kata 3 Using X=2 and N=8
function power(n, x) {
  let count = 0;
  let result = 1;
  while (count < n) {
    result = multiply(result, x);
    count = add(count, 1);
  }
  return result;
}
// returns answer of 256, runs until count count hits 7 then adds once more

//Kata4 Using A=5
function factorial(a) {
  let count = 1;
  let result = 1;
  while (count <= a) {
    result = multiply(count, result);
    count = add(count, 1);
  }
  return result;
}
//returns answer of 120, runs until count is less than or equal to one, decreases each time

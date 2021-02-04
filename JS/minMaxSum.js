// TALK IT OUT
// I am given an array of 5 integers
// I need to calculate the maximum SUM of 4 of 5 of the integers (the largest values)
// I need to calculate the minimum SUM of 4/5 INTs (the lowest values)
// I need to return the two answers on the same line, with a space in between

// PSEUDO CODE
// take in the array
// traverse the array (maybe using the sliding design pattern?)
// calculate the lowest and the highest integers
// I could use a sort method on the array and put all of the integers in order
// then min would just be index 0-4 and max would be .length-4-.length-1
// I could avoid having to check in a more complex way this way

arr = [7, 69, 2, 221, 8974];

function miniMaxSum(arr) {
  let max = 0;
  let min = 0;
  var sorted = arr.sort(function (a, b) {
    return a - b;
  });
  console.table(sorted);
  min = sorted[0] + sorted[1] + sorted[2] + sorted[3];
  max =
    sorted[sorted.length - 1] +
    sorted[sorted.length - 2] +
    sorted[sorted.length - 3] +
    sorted[sorted.length - 4];
  console.log(`${min} ${max}`);
}
miniMaxSum(arr);

// More Efficient

function miniMaxSum(arr) {
  let sorted = arr.sort(function (a, b) {
    return a - b;
  });
  let min = sorted.slice(0, 4).reduce((a, b) => a + b);
  let max = sorted.slice(1, 5).reduce((a, b) => a + b);
  console.log(`${min} ${max}`);
}
miniMaxSum(arr);

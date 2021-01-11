// TALK IT OUT
// The input is an array if INTEGERS
// I need to calculate the RATIOS of its ELEMENTS that are: POSITIVE, NEGATIVE and ZERO (Postitives / whole ; negatives / whole, etc.)
// I need to RETURN the decimal value of EACH FRACTION on a NEW line with SIX decimal places

// RATIOS are fractions i.e. 3/4 or 1/10
// Because I a calculating the ratio of each element AND returning an new line, I will probably use the MAP or FOREACH function
// Maybe FOREACH is better and store in a variable because MAP returns a new array
// I need to evaluate whether numbers are positive, negative or zero
// I also need to set the ratio fo the numbers to the whole
// I have to make sure to return each fraction as an integer with 6 decimal places

// PSEUDO CODE
// function calculate (array) => {
// let negatives = 0
// let zeroes = 0
// let positives = 0
//    forEach element in the array((if number is less than 0){(store/push into a new array, then take the array length and ratio it over original array length) / 10000000 to get the 6th decimal}
//  (if number is 0){(store/push into a new array, then take the array length and ratio it over original array length) / 10000000 to get the 6th decimal}
//  (if number is greater than 0){(store/push into a new array, then take the array length and ratio it over original array length) / 10000000 to get the 6th decimal}
//  )
// print negatives /n/ zeroes /n/ positives
// }
// invoke function

const arr = [6, -4, 3, -9, 0, 4, 1];
const plusMinus = (array) => {
  let negatives = 0;
  let zeroes = 0;
  let positives = 0;
  let length = array.length;
  array.forEach((element) => {
    if (element < 0) {
      negatives++;
    } else if (element === 0) {
      zeroes++;
    } else {
      positives++;
    }
  });
  console.log((positives / length).toFixed(6));
  console.log((zeroes / length).toFixed(6));
  console.log((negatives / length).toFixed(6));
};
plusMinus(arr);

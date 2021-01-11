let arr = [1, 6, 9, 12]

// WITH A FOR LOOP
function sumArr(arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total
}
console.log(sumArr(arr));


// WITH REDUCER AND REDUCE METHOD
const reducer = (total, currentValue) => total + currentValue
let sum = arr.reduce(reducer)
console.log(sum);


// WITH HOFS
let sum = arr.reduce((total, currentValue) => total + currentValue)
console.log(sum);

// WITH HOFS PART 2
function simpleArraySum(ar) {
  return ar.reduce((a, b) => a + b)
}
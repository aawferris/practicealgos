// WITH A FOR LOOP

function fibSeq(num) {
  let num1 = 0 // Our first number is always 0
  let num2 = 1 // Our second number is always 1
  let sum // we will use this var below
  for (let i = 1; i < num; i++) { // starting an index of 0; while the index is less than the number; iterate up
    sum = num1 + num2 // this is the fib sequence, where the the sum of two sequential integers produces the next value
    num1 = num2 // now the first number becomes the second
    num2 = sum // now the second number becomes our current sum; the 3rd number in the sequence
  }
  return num2 // we return the 2nd number to move up in the sequence
}
console.log(fibSeq(8))

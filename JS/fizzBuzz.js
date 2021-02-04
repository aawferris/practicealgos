// The function accepts INTEGER n as parameter.
// TALK IT OUT
// We are taking in a numbers (n).  For each INT we take in (from 1 to n),
// We will print one value per line
// If it is a multiple (%) of 3 or 5 - print "FizzBuzz"
// If i is a multiple of 3, not 5 - print Fizz
// If i is a multiple of 5, not 3 - print Buzz
// If i is ~multiple of 3 or 5, print i

// PSEUDO CODE
// we define a function that takes in n
// we need to iterate over the range at n.length
// if i % 3 === 0, print Fizz
// if i %5 ===0, print Buzz
// if i % 3 === 0 && i % 5 === 0, print FizzBuzz
// else print i's value

function fizzBuzz(n) {
  for (let i = 1; i < n; i += 1) {
    if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else console.log(i);
  }
}

fizzBuzz(15);

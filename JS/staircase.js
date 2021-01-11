// From Hackerrank - https://www.hackerrank.com/challenges/staircase/problem

// TALK IT OUT
// write a program that prints a staircase of n (where # and <spacebar> create each step)
// the staircase is right-aligned
// i.e. - n=4
//    #
//   ##
//  ###
// ####
// the base and height of each staircase is equal
// the function takes in an INTEGER (n)

//BREAK IT DOWN
// I need to take in an input of an integer
// that INT becomes the max height and max base ofr the triangle
// Since this will print from the top down, I need to increase n up to N
// the # will be equal to the n for that iteration and the <spaces> will equal n-that iteration step
// it needs to also return a new line after each iteration
// I cannot use array function here; might have to use a for loop

// PSEUDO CODE
// function (n) {
//  set a variable to store the iteration
//  for (let i=0; i<n; i+=1) {
//    print n-1 spaces && print n as #
//    new line
//  }
//  return n?
// }

let n = 4;

const staircase = (n) => {
  for (let i = 1; i < n + 1; i += 1) {
    console.log("#".repeat(i).padStart(n));
  }
};
staircase(4);

// REFLECTION
// I learned about repeat and padStart today
// repeat makes plenty of sense and can be very useful. I am not sure which method returns a new line.
// padStart allows you to do just that, pad your current string with another until it reaches a given length
// this seems mostly useful if you are doing something visual in the code
// padStart by default uses spaces, but you can pass another argument and fill it with just about anything
// both of these are string methods, but I did not need to convert the INT to STR to make it work
// I wonder if you could use a HOF to do this as well

// more research shows that padStart is useful for displaying credit card numbers
// where you .slice the last 4 digits and pad the remainder with *
// so this can be useful for security

// this can also be useful for alignment when printing for a receipt or menu

// this can also be used for reference id numbers in online stores
// it can force a consistent number for each ref ID ad you can pad it with 0
// it allows the user control over creating an ID, but keeps it consistent

// https://medium.com/javascript-in-plain-english/3-practical-uses-of-padstart-and-padend-bc7f197d3e91

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

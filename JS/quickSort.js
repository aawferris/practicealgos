// ANDY PSUEDO CODE

// I have an array of ints I need to sort
// QuickSort creates a pivot point, divides the array at that point
// Anything smaller than that pivot number moves left, and anything greater moves right
// After each iteration of that sort - - a NEW pivot point is picked inside the new half and the process is repeated
// Eventually, each integer will become it's own partition
// BEST PRACTICE is to NOT pick the smallest or largest number value - you have to pick a median val for this to be log(n)

// I take an array
// I create a pivot point within the array
// I create an empty array to store right numbers / left numbers

// Make a loop to repeat the following process:
// If numbers are less than that pivot number, move left (push the number to the array)
// If numbers are greater than that pivot number, move right (push the number to the array)
// Return a concatanation of all the sorted arrays

// EXAMPLE FROM STACK OVERFLOW

const arr = [2, 5, 7, 8, 23, 54, 76, 12, 1, 4]; // unsorted array
let sortedArr = quicksort(arr); // the ran function will be stored as sortedArr

function quicksort(arr) {
  // takes in the unsorted array
  if (arr.length <= 1) {
    // if the total length of the array is 1 or less, just return that array back as is
    return arr;
  }
  let pivot = arr[0]; // our pivot point is index 0
  let left = []; // empty array to store our left and right partitions
  let right = [];

  // start our index at 1 (since pivot is 0)
  for (let i = 1; i < arr.length; i++) {
    // while the index of the array is less than the pivot's value,
    // if true, we push it into the left array, if false, we push it into the right array
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  // return the sorted left array and concat that with the pivot and the sorted right array
  return quicksort(left).concat(pivot, quicksort(right));
}

console.log(`This is the sorted array ${sortedArr}`);

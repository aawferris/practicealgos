// loop over the array starting at index 1

// set the current value or index

// nest a while loop
//setting a condition if nested value is > value of the set temp var written above
// and if iterator is greater than or equals to 0

// inside the nested loop, set the nested value + 1 index to the nested value index

//  decrement nested iterator for the nested loop

// inside the outer loop set the nested loop's val+1 index to the temp var written above

// return the array

const array = [2, 3, 6, 1, 7, 4, 5]

// GROUP WORK
// function insertSort(array) {
//   for (let i = 1; i < array.length; i++) {
//     let currentValue = array[i]
//     let [j] = [i - 1]
//     console.log(`This is the end of the FOR LOOP and j is ${[j]} and currVal is ${currentValue}`);
//     while ([j] >= 0) {
//       if (array[j] > currentValue) {
//         array[i] = array[j]
//         array[j] = currentValue
//         console.log(`i is ${array[i]} and j is ${array[j]} and currVal is ${currentValue}`);
//       }
//       j--
//     }
//   }
//   return array
// }


// SHAY SOLUTION
function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    let j = i - 1
    console.log(`array[i] is ${array[i]}`);
    while (j >= 0 && array[j] > currentValue) {
      console.log(`currentValue is ${currentValue}`);
      console.log(`j = ${j}`);
      console.log(`array[j] is ${array[j]}`);
      console.log(`array BEFORE switching is [${array}]`);
      array[j + 1] = array[j]
      console.log(`array AFTER switching is [${array}]`)
      j--
    }
    array[j + 1] = currentValue
    console.log(`array AFTER exiting or bypassing while loop [${array}]`);
  }
  return array
}

console.log(insertionSort([2, 3, 6, 1, 7, 4, 5]));
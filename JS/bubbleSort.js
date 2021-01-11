// PSEUDO CODE

// create a var that is a copy of the arr example let tempArr = arr

// tempArr.length example let length = temArr.length

// create a var called sorted that's false 

// while the array isn't sorted, start doing stuff

// create a var called swap that's false

// create a inner loop (forEach or for) that iterates over the arr 

// then checks the 1st element against the next element in the arr
// example tempArr{i}

// if the current element is smaller, keep the current element at current index

// if the current element is large, swap the two indices 

// once sorting is done, break out of the loop with changing sorted to true

// return tempArr

function bubble(arr) {
  let len = arr.length;

  for (let i = 0; i < len - 1; i++) {  // this is the outer loop and the first number we're looking at e.g. [1]
    for (let j = i + 1; j < len; j++) { // this is thw inner loop and the second number we're looking at e.g [9]
      // if the 1st index is > than the next index
      if (arr[i] > arr[j]) {
        // here is where we swap values
        // keep the val of arr[i] && store it in a temp value
        let temp = arr[i];
        // swap the values for the indices
        console.log(`arr[i] is ${arr[i]} which is the current index`);
        arr[i] = arr[j];
        console.log(`arr[j] i s ${arr[j]} which is the next index`);
        // give the next index the value of current index
        arr[j] = temp;
        console.log(`the swap has happened`);
      }
      console.log(`no swap`);
    }
  }
  return arr;
}

console.log(bubble([1, 9, 2, 3, 7, 6, 4, 5, 5]));


function bubble(arr) {
  let len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        console.log(`arr[i] is ${arr[i]} which is the current index`);
        arr[i] = arr[j];
        console.log(`arr[j] is ${arr[j]} which is the next index`);
        arr[j] = temp;
        console.log(`the swap has happened`);
      }
      console.log(`no swap`);
    }
  }
  return arr;
}


function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i]
        console.log(`CURRENT INDX = ${arr[i]}`);
        arr[i] = arr[j]
        console.log(`NEXT INDX = ${arr[j]}`);
        arr[j] = temp
        console.log(`¡SWAPPAH!`);
      }
      console.log(`nothing happened`);
    }
  }
  return arr
}

console.log(bubbleSort([1, 9, 2, 3, 7, 6, 4, 5, 5]))


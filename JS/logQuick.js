// QUICK SORT SOLUTION with CONSOLE LOGS

// Global Variables
let
  i = 0,
  j = 0,
  arr = [107, 4, -6, 22, 10, -80, 107],
  comp = [107, 4, -6, 22, 10, -80, 107]

console.log("")
console.log("Quick Sort Solution")
console.log("Original Array")
console.table(arr)

// SOLUTION CODE

const conquer = (left, pivot, right) => {
  j += 1
  console.log("")
  console.log("MERGE STEP", j)
  
  const sorted = [...left, pivot, ...right]

  console.log("Use the spread operator to combine left...", left)
  console.log("with the pivot...", pivot)
  console.log("and right...", right)
  console.log("which will return the array of", sorted)

  return sorted
}

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  } else {
    i += 1
    console.log("")
    console.log("DIVIDE STEP", i)
    
    const pivot = arr.shift();
    console.log("Use the .shift() method for a pivot of", pivot)
    console.log("which leaves the remaining array,", arr)

    const left = arr.filter(item => { return item < pivot; });
    console.log("Comparing to the pivot, create the new left array...", left);

    const right = arr.filter(item => { return item >= pivot });
    console.log("and the new right array...", right);

    const dividedLeft = quickSort(left)
    const dividedRight = quickSort(right)

    const conquered = conquer(dividedLeft, pivot, dividedRight)

    if (conquered.length === comp.length) {
      console.log("")
      console.log("Finally!!!")
    }

    return conquered
  }
}

console.table(quickSort(arr))

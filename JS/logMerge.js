// MERGE SORT SOLUTION with CONSOLE LOGS

// Global Variables
let
  m = 1,
  n = 0,
  arr = [107, 4, -6, 22, 10, -80, 107]
  comp = [107, 4, -6, 22, 10, -80, 107]

console.log("")
console.log("Merge Sort Solution")
console.log("Original Array")
console.table(arr)

// SOLUTION CODE

const merge = (left, right) => {
  n += 1
  console.log("")
  console.log("MERGE STEP", n)

  let sorted = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      console.log("left[0] (", left[0], ") is less than right[0] (", right[0], ").")
      sorted.push(
        left.shift()
      );
      console.log("Use .shift() on left and push that into the sorted array:", sorted)
    } else {
      console.log("left[0] (", left[0], ") is greater than right[0] (", right[0], ").")
      sorted.push(
        right.shift()
      );
      console.log("Use .shift() on right and push that into the sorted array:", sorted)
    };
  };

  let output = sorted.concat(left.slice().concat(right.slice()));

  return output
};

const mergeSort = arr => {
  if (arr.length <= 1) {
    console.log("This side is an array of 0 or 1 elements, so it's done splitting.")
    return arr;
  } else {
    console.log("")

    const mid = Math.floor(arr.length / 2);
    console.log("Find and assign the 'mid' index of ", arr, ", which is index", mid, ".")

    const left = arr.slice(0, mid);
    console.log("")
    console.log("DIVIDE STEP", m, "(LEFT)")
    m += 1
    console.log("Then use .slice(0, mid) to create 'left',", left, ".");
    const dividedLeft = mergeSort(left)

    const right = arr.slice(mid);
    console.log("")
    console.log("DIVIDE STEP", m, "(RIGHT)")
    m += 1
    console.log("Then use .slice(mid) to create 'right',", right, ".");
    const dividedRight = mergeSort(right)

    const merged = merge(dividedLeft, dividedRight);

    if (merged.length === comp.length) {
      console.log("")
      console.log("Finally!!!")
    }

    return merged
  }
};

console.table(mergeSort(arr))


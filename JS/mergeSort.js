// MERGE SORT SOLUTION

const merge = (arr1, arr2) => {
  let sorted = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
    else sorted.push(arr2.shift());
  };
  return sorted.concat(arr1.slice().concat(arr2.slice()));
};

const mergeSort = arr => {
  if (arr.length <= 1) {
    return arr;
  } else {
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }
};

// console.table(mergeSort([107, 4, -6, 22, 10, -80, 107]))
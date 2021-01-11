// QUICK SORT SOLUTION

const quickSort = arr => {
  if (arr.length <= 1) {
    return arr;
  } else {
    const pivot = arr.shift();
    const left = quickSort(arr.filter(item => { return item < pivot; }));
    const right = quickSort(arr.filter(item => { return item >= pivot }));
    return [...left, pivot, ...right]
  }
}

// console.table(quickSort([107, 4, -6, 22, 10, -80, 107]))
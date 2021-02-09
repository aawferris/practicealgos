inputArray = [3, 6, -2, -5, 7, 3];

function adjacentElementsProduct(inputArray) {
  // console.log(
  //   inputArray
  //     .slice(0, -1)
  //     .reduce((max, n, i) => Math.max(max, n * inputArray[i + 1]), -Infinity)
  // );

  console.log(
    Math.max(
      ...inputArray.slice(0, -1).map((num, i) => num * inputArray[i + 1])
    )
  );
}
adjacentElementsProduct(inputArray);

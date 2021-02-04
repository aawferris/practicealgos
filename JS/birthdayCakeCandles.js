// TALK IT OUT
// I am putting one candle per year of their life
// They will only be able to blow out the tallest candles
// Count how many candles are tallest

// I am going to take in an integer and an array
// the integer seems irrelevant to the task - what don't I understand?
// The INTs in the arr represent the height of the candles
// candles = [4,4,1,3] - I would blow out the two tallest
// I want to return the number of the highest count of tall candles

// PSEUDO CODE
// I want take in an array and integer
// I really just want to look at the array's values
// I want to iterate over them, find the highest number
// I want to return the frequency of occurrence of that highest number

const candles = [3, 2, 1, 3];

function birthdayCakeCandles(candles) {
  // Write your code here
  let tallest = Math.max(...candles);
  let result = candles.filter((candle) => candle === tallest);
  return result.length;
}
birthdayCakeCandles(candles);

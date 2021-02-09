// TALK IT OUT
// I want to make a program that re-writes 24-hr format into 12-hr format
// It should return a new STRING
// the format is hh:mm:ssAM or PM
// 12AM = 000 hrs
// from 1 - 12pm, the numbers can stay the same
// from 1pm-11pm, the numbers will add onto 12

// PSEUDO CODE
// Take in the string of time
// if the time is 12am, then return 000 hours
// if the time is 1pm-11pm, then return given string time + 12
// else return the string

function timeConversion(s) {
  if (s === "12:00:00AM") {
    return "00:00:00";
  } else if (s >= "01:00:00PM") {
    return s + "01:00:00";
  } else {
    return s;
  }
}

console.log(timeConversion("01:02:00PM"));

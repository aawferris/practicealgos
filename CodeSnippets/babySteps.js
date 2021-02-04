// TALK IT OUT
// I ultimately want to return the first, last names of the array of users who are on the same step as I am
// I will want to use string interpolation to make it more legible and dynamic

// The function should accept a INT (baby step) and an ARRAY of friends
// Each Friend is also an ARRAY with three idx: first, last, baby step
// So this is will be a nested ARRAY

// I will need to select the FRIEND on the SAME BABY STEP
// I will need to SORT by last name
// I will need to return a string with this format

// 0 - "None of your friends is in Baby Step #"
// 1 - "FIRST LAST is also in Baby Step #"
// 2 - "FIRST LAST and FIRST LAST is also in Baby Step #"
// 3 - "FIRST LAST and FIRST LAST and 1 other friend are also on Baby Step #"
// 4 - "FIRST LAST and FIRST LAST and #(friends.count) other friends are also in Baby Step #"

// PSEUDO CODE
// (for testing) const friends = [[firstName: John, lastName: Smith, babyStep: 1], firstName: Margaret, lastName: Thatcher, babyStep: 3]

// function babySteps(bayStep, friends) {
// let friendStep = friends[i][2]

// do I need to use .filter somewhere to filter the results?
// const filteredFriends = friends.filter((friend) => friend[2].includes(babystep))
// then I could set conditionals for filteredFriends, maybe maybe .map their names?

// friends.forEach((friend, idx, arr) friend => babyStep's value )

// if (my current step === friends' baby step count is > 2) {
//   return `${FIRST} ${LAST} and ${FIRST} ${LAST} and ${number of others} other friends are also on Baby Step ${babyStep}`

// } else if (my current step === friends' baby step count is 2){
//   return `${FIRST} ${LAST} and ${FIRST} ${LAST} and 1 other friend are also on Baby Step ${babyStep}` -- I can see having to use .map or something here to iterate over the collection of names OR using bracket notation to return the first two specifically. It would be the same logic for the next one as well.

// } else if (my current step === friends' baby step count is 1) {
// return `${FIRST} ${LAST} is also in Baby Step ${babyStep}`

// } else (my current step !== friend's baby step count is 0 {
//   return `None of your friends is in Baby Step ${babyStep}`
// }

const friendsList = [
  ["Dave", "Ramsey", 1],
  ["Armando", "Lopez", 3],
  [("Lara", "Johnson", 3)],
  [("Melissa", "Wilhoite", 3)],
  [("Joe", "Leavitt", 3)],
];

function formattedFriendListForBabyStep(babyStep, friends) {
  let sameStep = 0;
  // for (let i = 0; i < friends.length; i += 1) {
  //   for (let j = 0; j < friends.length; j += 1) {
  //     // console.log(i, j);
  //     if (friends[2].value() === babyStep.value()) sameStep += 1;
  //   }
  // }
  // console.log(sameStep);

  // friends.forEach((friend, idx) => {
  //   if (friend[2] === babyStep) sameStep += 1;
  //   console.log(friend[2], babyStep, sameStep);
  // });

  //next to try .indexOf and convert to string
}

formattedFriendListForBabyStep(3, friendsList);

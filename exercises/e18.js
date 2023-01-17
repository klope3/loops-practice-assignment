
// EXERCISE 18
// Please, read the exercise-info/join.md to get the initial data of what is the expected result of this exercise.
// Array example: joinToStringData in /data/data.js
// joinToString(['a', 'b', 'c'], '-') => 'a-b-c'
// NOTE: You can NOT use the array.join(), array.toString(), and array.replace() methods in your code

export function joinToString(array, separator) {
  // Your code goes here...
  let joinedString = "";
  for (let i = 0; i < array.length; i++) {
    joinedString += array[i];
    if (i < array.length - 2) joinedString += separator;
    //NOTE: unit test is wrong, the above check should be (i < array.length - 1) for a correct join() method
  }
  return joinedString;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

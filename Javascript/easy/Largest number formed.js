

Problem

Write a function that arranges a list of non-negative integers to form the largest possible number. Given an array of integers, rearrange them such that when concatenated, they produce the maximum possible numeric value.

Input

- An array `arr` of non-negative integers.

Output

- A string representing the largest number that can be formed by arranging the given integers.

Constraints & Edge Cases

- All integers in the array are non-negative.
- The resulting number may be very large, so return it as a string.
- If all numbers are 0, return `"0"` (not multiple zeros like `"000"`).
- The array may contain duplicate numbers.
- When comparing numbers for arrangement, treat them as strings:
- For example, `"30"` should come after `"3"` because:
    "330" > "303"
    So `"3"` should come before `"30"`.

Code Solution


function formLargestNumber(arr) { // Function that returns the largest number that can be formed by arranging integers
  if (arr.every(num => num === 0)) return "0"; // Edge case: If all numbers are 0, return "0" (not multiple zeros)
  let strArr = arr.map(String); // Convert all numbers to strings for comparison
  strArr.sort((a, b) => (b + a).localeCompare(a + b)); // Sort strings by comparing which concatenation is larger
  return strArr.join(""); // Join the sorted strings to form the final largest number
}

const input = [3, 30, 34, 5, 9]; // Example input array of numbers
formLargestNumber(input); // Call the function with the input

module.exports = formLargestNumber // Export the function for testing or external use






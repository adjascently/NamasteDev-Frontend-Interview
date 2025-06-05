

Write a function findMaxNumber that takes an array of numbers as input and returns the largest number in the array. if the array is empty,
return null.



Constraints & Edge Cases
• Input is always an array.
• Array can include positive, negative, and zero values.
• Array can be empty - in that case, return null.
• Array may include duplicate values.
• Must not mutate the original array.



Code


function findMaxNumber(arr) { // Function to find the largest number in the array
    if (arr.length ===0) return null; // If the array is empty, return null as per requirements

    let max = arr[0]; // Initialize max with the first element of the array

    for (let i =1; i < arr.length; i++) { // Start a loop from the second element to the end
        if (arr[i] > max) { // If the current element is greater than current max
            max = arr[i]; // Update max to current element
        }
    }

    return max; // After checking all elements, return the largest value
}

// For the purpose of user debugging.
findMaxNumber([1,2, 3,4, 5]); // Example usage

module.exports = findMaxNumber // Export the function for testing



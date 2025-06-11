 Write a function shuffle that accepts an array and returns a new array with the elements in randomized order. Ensure that all elements from the original array are present exactly once and that the original array is not mutated.


   Constraints & Edge Cases
• The function should return a new array (do not mutate the original).
• All original elements must be present exactly once.
• An empty array should return an empty array.
• Input array may contain duplicates (handle gracefully).
• The output should be randomized on each function call.


  Code

function shuffle(array) {
    // Make a shallow copy to avoid mutating the original array
    const arr = array.slice();

    // Iterate from the last element down to the second element
    for (let i = arr.length - 1; i > 0; i--) {
        // Pick a random index from 0 to i (inclusive)
        const j = Math.floor(Math.random() * (i + 1));

        // Swap arr[i] and arr[j] using array destructuring
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    // Return the shuffled array
    return arr;
}

// For the purpose of user debugging.
shuffle([1, 2, 3, 4, 5]); // Example usage

module.exports = shuffle; // Export the function for external use

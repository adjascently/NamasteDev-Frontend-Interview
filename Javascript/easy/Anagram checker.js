//Write a function that checks whether two input strings are anagrams of each other. An anagram is a word formed by rearranging the letters of another word, using all original letters exactly once.


//Input: Two strings strl and str2


//Output: A boolean value - true if the strings are anagrams, false otherwise.


//Constraints & Edge Cases

• The comparison should be case-insensitive.
• Both strings may contain non-alphabetic characters (optional: ignore them).
• Empty strings are valid inputs.
• Strings of different lengths can't be anagrams.
• Whitespaces are ignored and compare only letters



Code

function isAnagram(str1, str2) { // Function to check if two strings are anagrams
       const normalize = str => 
        str.toLowerCase() // Convert to lowercase to ignore casing
           .replace(/[^a-z]/g, ''); // Remove all non-letter characters

    // Normalize both input strings
    const normalizedStr1 = normalize(str1); // Normalize first string
    const normalizedStr2 = normalize(str2); // Normalize second string

    // Check if lengths are equal after normalization
    if (normalizedStr1.length !== normalizedStr2.length) return false; 

    // Sort the characters of both normalized strings
    const sortedStr1 = normalizedStr1.split('').sort().join(''); // Sort first string
    const sortedStr2 = normalizedStr2.split('').sort().join(''); // Sort second string

    // Compare sorted strings for equality
    return sortedStr1 === sortedStr2; // Return true if equal, else false
}

module.exports = isAnagram // Export the function for testing



Write a function reverseWords that takes a sentence string as input and returns a new string where each word is reversed, but the order of the words remains the same.
Words are separated by spaces. Preserve the original spacing.


  Constraints & Edge Cases
• Input is always a string.
• Words are defined by space characters.
• Multiple spaces between words should be preserved.
• Leading/trailing spaces should also be preserved.
• Empty string input should return an empty string.


  Code

function reverseWords(sentence) {


    if (sentence === "") return "";
    const chunks = sentence.match(/(\s+|\S+)/g);

    const reversedChunks = chunks.map(chunk => {
        if (chunk.trim() === "") {
            return chunk;

        } else {
            return chunk.split("").reverse().join("");
        }

    });

    return reversedChunks.join("");
    // Your implementation
}

//For the purpose of user debugging.
reverseWords("Hello World");

module.exports = reverseWords


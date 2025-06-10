Write a function groupBy that takes an array of objects and a property name (as a string), and returns an object where the keys are the unique values of the specified property, and the values are arrays of objects
that have that property value.


  Constraints & Edge Cases
• The input array may be empty, in this case return an empty object.
• The key values can be of any type (number, string, etc.), but they will be coerced to strings when used as object keys.


  Code

function groupBy(arr, key) {
 
    const result = {};

    for (let obj of arr) {
        const groupKey = obj[key];

        if (!result[groupKey]) {
            result[groupKey] = [];
        }
        result[groupKey].push(obj);
    }
    return result;
    
}
groupBy([
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
],'age');
module.exports = groupBy;

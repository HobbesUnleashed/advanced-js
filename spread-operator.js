// No spread operator

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);  
// Both variables are updated as they simply point to eachother
// Any change to one, will always change the other!
console.log("first array:", arr1);
console.log("second array:", arr2);

// Copying an array

let arr3 = [4, 5, 6];
let arr4 = [...arr3];
arr4.push(7);
// The fourth array is updated with a new attribute, while the third is untouched
console.log("third array:", arr3); 
console.log("fourth array:", arr4);

// Copying an object

let obj1 = { a: 1, b: 2, c: 3};
let obj2 = { ...obj1, d: 4}; // Spread the first obj into a second variable and add a fourth attribute
let obj3 = { ...obj1, b: 5}; // Spread the first obj into a third variable and overwrite a specific value

console.log("first object:", obj1);
console.log("second object:", obj2);
console.log("third object:", obj3);

// Copying only part of an array/object

let arr5 = [ ...arr1, { ...obj1}, ...arr3, "x", "y", "z"]; 
// Spread a selection of arrays and objects into a new array
// Also add new attributes to it at the same time
console.log(arr5);
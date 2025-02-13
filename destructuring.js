// Destructuring arrays

let ages = [30, 26, 27];

//let john = ages[0];
//let mary = ages[1];
//let joe = ages[2];
//console.log("John:", john, "Mary:", mary, "Joe:", joe);

let [john, mary, joe] = ages; // Automatically assigns the ages to the names according to index positions
console.log("John:", john, "Mary:", mary, "Joe:", joe);

// Destructuring objects

let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant"
};

let {mike, shay, jill, alicia} = jobs; // Assigns the jobs to the name according to the index order
// Name must appear as the 'key' otherwise it returns as undefined
console.log(mike, shay, jill, alicia);

// Destructuring subsets

let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNat, johnSec] = languages; // Assigns the first 2 languages from the array to the keys
console.log(johnNat, johnSec);

let [, , maryNat, marySec] = languages; // Assigns the third and fourth languages as the commas allow the first 2 to be bypassed
console.log(maryNat, marySec);
// All additional languages are ignored as they are not called upon

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "spanish",
    fourthLanguage: "german",
    fifthLanguage: "japanese"
};

let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax

let fruits = ["apple", "orange", "banana", "peach", "cherry"];

let [fav, secFav, ...others]= fruits;
console.log(fav);
console.log(secFav);
console.log(others); // Returns the rest as an array

let favFoods = {
    brian:"pizza",
    anna: "pasta",
    sarah: "vege",
    andrea: "steak"
};

let {brian, anna, ...rest}= favFoods;
console.log(brian);
console.log(anna);
console.log(rest); // Returns the rest as an object
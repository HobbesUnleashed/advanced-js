// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];

// Reduce - (accumulate and current) values
// combine the two inputs and iterate
let sum = nums.reduce((acc, curr) => acc + curr); 
console.log(sum);

// console.log to show what is happening
// Return statement to log the increases
let sum2 = nums.reduce ((acc, curr) => {
    console.log(
        "Accumulator:", acc,
        "Current Value:", curr,
        "Total:", acc + curr
    );
    return acc + curr;
    // No explicit accumulator start value - returns 4 lines of code - starts at second value with default of 0
});
console.log(sum2);

// Initialise the starting value of the accumulator - can be anything
let sum3 = nums.reduce ((acc, curr) => {
    console.log(
        "Accumulator:", acc,
        "Current Value:", curr,
        "Total:", acc + curr
    );
    return acc + curr;
    // Explicitly state the starting accumulator value - now shows 5 lines of code in output
    // Good practice to use an initial value to prevent unexpected behaviour
}, 10);
console.log(sum3);

// Making this a single line of arrow function code
let sum4 = nums.reduce((acc, curr) => acc + curr, 10);
console.log(sum4);


// Function for the later  questions
const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    },
    {
      name: 'Mark',
      profession: 'Manager',
      yrsExperience: 10
    }
  ];
  
  // Totaling a specific object property
  let totalExperience = teamMembers.reduce ((acc, yrsExp) => acc + yrsExp.yrsExperience, 0);
  console.log(totalExperience);


  // Grouping by a property, and totaling it too
  // Expected result -- {Developer: 12, Designer: 4}
  let experienceByProfession = teamMembers.reduce ((acc, curr) => {
    let key = curr.profession;
    // If accumulator is not the key
    if (!acc[key]) {
        acc[key] = curr.yrsExperience;
        // If accumulator is the key - add it to the current
    } else {
        acc[key] += curr.yrsExperience;
    }
    return acc;
  }, {});
console.log(experienceByProfession);
// If a new person is added to the teamMembers with a different profession, they will be added to the output automatically (Manager)

// Reduce teamMembers to { Developer: ['Andrew', 'Ariel'], Designer: ['Michael', 'Kelly'], Manager: ['Mark']}
let staffByProfession = teamMembers.reduce ((acc, curr) => {
    let {profession, name} = curr;
    if (!acc[profession]) {
        acc[profession] = [];
    } 
    acc[profession].push(name);
    return acc;
}, {});
console.log(staffByProfession);
// We use the reduce() method to iterate over the teamMembers array.
// For each member, we extract the profession and name.
// If the profession doesn't already exist in the accumulator object (acc), we initialize it as an empty array.
// We then push the name into the array corresponding to the profession.
// Finally, we return the accumulated object, staffByProfession, which groups team members by their profession with their names.


// Filter the array to show just developers
let developers = teamMembers.filter(m => m.profession === "Developer");
console.log(developers);
let ariel = developers.filter(n => n.name === "Ariel");
console.log(ariel);

// Using reduce to do the same as the above
let developers2 = teamMembers.reduce ((acc, curr) => {
    if (curr.profession === "Developer") {
        acc.push(curr);
    }
    return acc;
}, []);
console.log(developers2);

let ariel2 = developers2.reduce ((acc, curr) => {
    if (curr.name === "Ariel") {
        acc.push(curr);
    }
    return acc;
}, []);
console.log(ariel2);

// Reducing this into a single reduce statement
let ariel3 = teamMembers.reduce((acc, curr) => {
    if (curr.profession === "Developer" && curr.name === "Ariel") {
        acc.push(curr);
    }
    return acc;
}, []);
console.log(ariel3);


// Finding the most experienced designer -- Kelly
let expDesigner = teamMembers.reduce ((acc, curr) => {
    // If profession equals "Designer" and yrsExperience is more than the accumulated - return curr
    if (curr.profession === "Designer" && curr.yrsExperience > acc.yrsExperience) {
        return curr;
    }
    return acc;
}, {yrsExperience: 0}); // Initialised accumulation of experience - in an object as that is where it is found and referenced
console.log(expDesigner);
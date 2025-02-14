let nums = [1, 2, 3, 4, 5];

// Using a for loop

let results = [];
for (let num of nums) {
    results.push(num * 2);
}
console.log(results);

// Using map()

const multByTwo = function (num) {
    return num * 2;
}

const mapResults = nums.map(multByTwo);
console.log(mapResults);

// Simplified w/ map()

const simplified = nums.map(function (num) {return num * 2; })
console.log(simplified);

// Simplfied w/ map() + arrow function

const simplifiedArrow = nums.map (num => num * 2);
console.log(simplifiedArrow);

// With objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];

  const studentsWithIds = students.map (student => [student.name, student.id]);
  console.log(studentsWithIds);

// Return just the id and name of each student - still within an array
const arrayIdentifiers = students.map (student => ({id: student.id, name: student.name}));
console.log(arrayIdentifiers);

// Use an array to add a new field to the Objects within students
let ages = [32, 26, 28];

  const studentAges = students.map ((student, index) => ({...student, age: ages[index]}));
  // Input of both student and index for the map
  // Spread of student and add age by "ages[index]"
  console.log(studentAges);
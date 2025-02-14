// Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];

  const oldEnough = people.filter(person => person.age >= 21);
  console.log(oldEnough);

  // Returns the Array that contains the Paul object
  const paulArray = people.filter(p => p.name === "Paul");
  console.log(paulArray);

  // Returns the Paul object without returning the Array it is stored in
  const paulObject = people.filter(p => p.name === "Paul")[0];
  console.log(paulObject);
  
  // Complex Filtering
  const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
  ];

  // Create variable, assign filter to the students array and arrow function it
  // Arrow function will be a function of it's own
  // Creating a variable to test if the skills are in the array
  // strongSkills uses filter to check if the skill is a value of 5 or more
  // Returns the strongSkill if it has a value of more than 0
  const candidates = students.filter(student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
    return strongSkills.length > 0;
  });

  console.log(candidates);

  // Can extract the strongSkills function into its own function
  // Makes this function re-usable elsewhere
  const hasStrongSkills = student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
    return strongSkills.length > 0;
  }

  const candidates1 = students.filter(hasStrongSkills);
  console.log(candidates1);

  // Can also extract the inner filter to make another external function
  // Passing this variable - has5yearsExp - means we can remove the return statement and the variable strongSkills
  const has5yearsExp = skill => skill.yrsExperience >= 5;

  const hasStrongSkills1 = student => student.skills.filter(has5yearsExp).length > 0;

  const candidates2 = students.filter(hasStrongSkills1);
  console.log(candidates2);

  // Using the map() method to find only the candidates names from the candidates2 filter
  const names = candidates2.map(c => [c.name]);
  console.log(names);
  // Returns as 2 arrays, containing just the name in each

  // Alternatively, to return both in a single array
  const names1 = candidates2.map(c => c.name);
  console.log(names1);
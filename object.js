function otherAngle(a, b) {
  c = 180 - (a + b);
  return c;
}

// console.log(otherAngle(40, 40));

// Create an empty object called dog
const dog = {};

// Print the the dog object on the console
console.log(dog);

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "Buddy";
dog.legs = 4;
dog.color = "Brown";
dog.age = 3;
dog.bark = function () {
  return "Woof Woof";
};

// Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

// Set new properties the dog object: breed, getDogInfo
dog.breed = "Golden Retriever";
dog.getDogInfo = function () {
  return `My dog name is ${dog.name}`;
};

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }


// Find the person who has many skills in the users object.

// The person with the most skills should be returned.
function findUserWithMostSkills(users) {
    let maxSkills = 0;
    let userWithMostSkills = null;
    for (let user in users) {
        if (users[user].skills.length > maxSkills) {
            maxSkills = users[user].skills.length;
            userWithMostSkills = user;
        }

    }
    return userWithMostSkills
}
console.log(findUserWithMostSkills(users))


// Count logged in users, count users having greater than equal to 50 points from the following object.
// The object contains user information.
// console.log(users.)
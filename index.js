// LESSON OBJECTIVES.

// Add elements in an array.
// Remove elements in an array.
// Replace elements in an array.


// ADD ELEMENTS IN AN ARRAY.
// push() and unshift() methods: Desructive.
const superHeroes = ["Catwoman", "Storm", "Jessica Jones"];
superHeroes.push("Wonder Woman")

// console.log(superHeroes);

const cities = ["New York", "San Francisco"];
cities.unshift("Boston", "Washington");

// console.log(cities)

// Spread operator: Non-destructive.
const copyOfCities = [...cities];
// console.log(copyOfCities)

const allCities = ["Los Angeles", "New Jersey", ...copyOfCities]
// console.log(allCities)

// One more example.
const cats = ["Hobbes", "Felix", "Tom"];
const moreCats = [...cats, "Garfield", "Rose"]
// console.log(moreCats)


// REMOVING ELEMENTS FROM AN ARRAY.
// We can do this in 2 ways: pop() and unshift() methods which are destructive
const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
// days.pop()
// console.log(days)

// days.shift()
// console.log(days)


// Non destructive ways: slice()
const primeNumbers = [2,3,5,7]
const copyOfPrimeNumbers = primeNumbers.slice();

// console.log(primeNumbers);
// console.log(copyOfPrimeNumbers);

// Using sluce with arguments.
const students = ["Joel", "Medrine", "Brian", "Abdifatah"];
// const copyOfStudents = students.slice(1,);
// console.log(copyOfStudents);

const copyOfStudents = students.slice(0,students.length-1)
// console.log(copyOfStudents);


// Using splice: Destructive depending on the number of arguments to remove or replace elements in an array.
// with a single argument
// days.splice(2);

// days.splice(-2)
// console.log(days);

// using two arguments.
// days.splice(2,3)
// console.log(days);

// REPLACING ELEMENTS IN AN ARRAY.
// Here, we will use splie() bu with 3 arguments.
const cards = [
    "Ace of Spades",
    "Jack of Clubs",
    "Nine of Clubs",
    "Nine of Diamonds",
    "Three of Hearts",
  ];

cards.splice(2,2,"Joker");
console.log(cards)
// Wes Bos - Array Cardio Day 1
// Array Methods Practice

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

// Array.prototype.filter()
console.log("Question 1. Filter the list of inventors for those who were born in the 1500's");
const fifteenth = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.log(fifteenth);

// Array.prototype.map()
console.log("Question 2. Create an array of the inventors first and last names");
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

// Array.prototype.sort()
console.log("3. Sort the inventors by birthdate, oldest to youngest");
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.log(ordered);

// Array.prototype.reduce()
console.log("4. How many years did all the inventors live?");
const totalYears = inventors.reduce((total, inventor) =>    total + (inventor.passed - inventor.year), 0);
console.log(totalYears);

// Array.prototype.sort()
console.log("5. Sort the inventors by years lived");
const oldest = inventors.sort(function(a, b) {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? -1 : 1;
  });
console.log(oldest);

// .map() with .filter() (browser only)
console.log("6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name");
// // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// // Grab links and convert to array using spread operator
// const links = [...category.querySelectorAll('a')];
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));
// console.log(de);

// Array.prototype.sort()
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric',
'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert',
'Blair, Tony', 'Blake, William'];
console.log("7. Sort the people alphabetically by last name")
const alphabeticList = people.sort(function(previousOne, nextOne) {
  const [previousLastname, previousFirstname] = previousOne.split(', ');
  const [nextLastname, nextFirstname] = nextOne.split(', ');
  return previousLastname > nextLastname ? 1 : -1;
});
console.log(alphabeticList);

// Array.prototype.reduce()
// 8. Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

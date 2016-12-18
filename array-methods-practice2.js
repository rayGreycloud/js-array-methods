// Wes Bos - Array Cardio Day 2
// Array Methods Practice

// Array.prototype.some()
const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];
console.log ("Ex.1 Is at least one person 18 or older?");
const someOneIsAdult = people.some(person => new Date().getFullYear() - person.year >= 18);

console.log({someOneIsAdult});

// Array.prototype.every()
console.log ("Ex.2 Is everyone 18 or older?");
const everyOneIsAdult = people.every(person => new Date().getFullYear() - person.year >= 18);

console.log({everyOneIsAdult});

// Array.prototype.find()
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen in my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];
console.log("Ex.3 Find the comment with ID = 823423");
const comment = comments.find(comment => comment.id === 823423);

console.log(comment);


// Array.prototype.findIndex()
// Ex. 4 Find the comment with ID

// Ex.5 Delete the comment with ID = 823423

// Comments.splice(index, 1);
// Ex.6

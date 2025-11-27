//* Genarate a look-up table

//? input

const postsArray = [
  { id: "p-001", title: "Intro to SQL", author: "Alex" },
  { id: "p-002", title: "Data Structures in jS", author: "John" },
  { id: "p-003", title: "Understanding JS Closures", author: "Doe" },
  { id: "p-004", title: "Mastering React", author: "Smith" },
];

//? output
const lookupTable = postsArray.reduce((table, post) => {
  table[post.id] = post;
  return table;
}, {});

console.log(lookupTable);

// const postByFind = postsArray.find((post) => post.id === "p-003");
// console.log("Post found using find():", postByFind); // Less efficient

// const post = lookupTable["p-003"];
// console.log("Post with ID p-003:", post); // More efficient using look-up table

for (let post in lookupTable) {
  console.log("Item:", lookupTable[post]);
}


// const numberLookup = [10, 20, 30, 40, 50].reduce((table, num) => {
//   table[num] = true;
//   return table;
// }, {});


// console.log("Number Lookup Table:", numberLookup);
// console.log("Is 30 present?", !!numberLookup[30]); // true
// console.log("Is 25 present?", !!numberLookup[25]); // false


// const number = [10, 20, 30, 40, 50];


// const numberSet = new Set(number);
// console.log('Number Set:', numberSet);
// console.log('Is 30 present in Set?', numberSet.has(30)); // true
// console.log('Is 25 present in Set?', numberSet.has(25)); // false


//  for (let num of numberSet) {
//    console.log('Set Item:', num);
//  }
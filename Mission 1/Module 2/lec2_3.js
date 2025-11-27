

const numbers = [30, 100, 45, 60, 15, 80, 5, 90];
const fruits = ['apple', 'Banana', 'grape', 'mango', 'orange', 'kiwi', 'Pear'];

numbers.sort((a, b) => b - a); // a - b => Ascending numerical sort and b - a => Descending numerical sort
console.log('Sorted Numbers:', numbers);

fruits.sort((a, b) => a.localeCompare(b)); // Alphabetical sort
console.log('Sorted Fruits:', fruits);


// Nested array flat
 const arr = [1, 2, [3, 4], [5, 6, [7, 8, [9, 10]]]];
 const flattenedArr = arr.flat();
 console.log('Flattened Array:', flattenedArr);
 const flat = flattenedArr.flat();
 console.log('Flat:', flat);

const flattenedArrDeep = arr.flat(3); // Flattening with depth 3
console.log('Flattened Array (Depth 3):', flattenedArrDeep);

// If we don't know the depth of nesting then use Infinity
const fullyFlattenedArr = arr.flat(Infinity); // Fully flattening the array
console.log('Fully Flattened Array:', fullyFlattenedArr);


const tagsFromPosts = [
  ['JavaScript', 'Programming', 'CSS'],
  ['Python', 'HTML', 'Machine Learning'],
  ['JavaScript', 'Spring Boot', 'Backend Development'],
  ['HTML', 'CSS', 'Design']
];

//  const filteredTags = tagsFromPosts.flat().filter((tag, index, array) => array.indexOf(tag) === index)  ; // Get unique tags  

 const filteredTags = [...new Set(tagsFromPosts.flat())]; // Using Set to get unique tags
 console.log('Filtered Tags:', filteredTags);


//*  Grouping and aggregating data using look-up tables  *//


// Scenario: Count every survey an group by response
//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "D",
  "A",
];

/*  TODO:
* Initiate an empty look-up table (object).
* Check if the response already exists in the table.
* If it exists, increment its count by 1.
* If it doesn't exist, set its count to 1.
*/


//? output
// { A: 5, C:3 , B: 5, D: 2 }

const frequencyTable = surveyResponses.reduce((table, response) => {
  // console.log(table, ":", response); 
  // if (table[response]) {
  //   console.log("Incrementing count for:", response, table[response]);
  //   table[response] += 1; // Increment count if already exists
  // } else {
  //   table[response] = 1; // Initialize count if not exists
  // }

  table[response] = (table[response] || 0) + 1;
  // table[response] = table[response] ? table[response] + 1 : 1;
  return table;
}, {});

console.log("Frequency Table:", frequencyTable);
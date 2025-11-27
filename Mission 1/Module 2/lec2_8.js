



//*  Grouping and aggregating data  *//


// Scenario: You have a flat array of sales data, and you need to group the sales by category and calculating the total revenue of items sold for each category.


// TODO:
/*
* Init an empty look-up table (object).
* Init obj category
* calculate total revenue for each category
* calculate total items sold for each category
* Store the results in the look-up table.
*/
//? input
const salesData = [
  { category: "Electronics", item:"Laptop", price: 100, quantity: 2 },
  { category: "Books", item:"Novel", price: 200, quantity: 1 },
  { category: "Electronics", item:"Phone", price: 150, quantity: 1 },
  { category: "Clothing", item:"Shirt", price: 300, quantity: 2 },
  { category: "Books", item:"Magazine", price: 100, quantity: 1 },
  { category: "Clothing", item:"Pants", price: 200, quantity: 3 },
];


const totalSalesByCategory = salesData.reduce((table, product) => {
  const { category, price, quantity } = product;

  console.log(table, ":", product, ":", table[category]);
  
  if (!table[category]) {
    console.log("Initializing category:", category);
    table[category] = {
      totalRevenue: 0,
      itemsSold: 0
    };
  }
  table[category].totalRevenue += price * quantity;
  table[category].itemsSold += quantity;
  return table;
}, {});

console.log("Total Sales by Category:", totalSalesByCategory);

//?output

//  const obj ={
//   Electronics:{
//     totalRevenue: 350,
//     itemsSold: 3
//   },
//   Books:{
//     totalRevenue: 300,
//     itemsSold: 2
//   },
//   Clothing:{
//     totalRevenue: 900,
//     itemsSold: 5
//   }
// }

// const revenueByCategory = salesData.reduce((acc, { category, price, quantity }) => {
//   const total = price * quantity;
//   acc[category] = (acc[category] || 0) + total;
//   return acc;
// }, {});
// console.log("Revenue by Category:", revenueByCategory);
// // {
// //   Electronics: 350,
// //   Books: 300,
// //   Clothing: 900
// // }

//  const fruits ={"p-1":{name: "Apple"}, "p-2":{name: "Banana"}, "p-3":{name: "Orange"}};

//  const fruit = fruits["p-1"];
//  console.log(fruit);

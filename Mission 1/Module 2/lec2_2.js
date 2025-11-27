

const rawApiData = [
  {
    "id": 1,
    "productName": "Wireless Bluetooth Headphones",
    "category": "Electronics",
    "price": 59.99,
    "rating": 4.5,
    "stock": 34
  },
  {
    "id": 2,
    "productName": "Ergonomic Office Chair",
    "category": "Furniture",
    "price": 129.99,
    "rating": 4.7,
    "stock": 18
  },
  {
    "id": 3,
    "productName": "Stainless Steel Water Bottle",
    "category": "Home & Kitchen",
    "price": 15.49,
    "rating": 4.4,
    "stock": 52
  },
  {
    "id": 4,
    "productName": "Gaming Mouse RGB",
    "category": "Electronics",
    "price": 39.99,
    "rating": 4.6,
    "stock": 25
  },
  {
    "id": 5,
    "productName": "Men's Casual Sneakers",
    "category": "Fashion",
    "price": 49.99,
    "rating": 4.3,
    "stock": 40
  },
  {
    "id": 6,
    "productName": "Ceramic Coffee Mug Set",
    "category": "Home & Kitchen",
    "price": 24.99,
    "rating": 4.2,
    "stock": 60
  },
  {
    "id": 7,
    "productName": "Smart LED Light Bulb",
    "category": "Electronics",
    "price": 12.99,
    "rating": 4.5,
    "stock": 80
  },
  {
    "id": 8,
    "productName": "Yoga Mat with Carry Strap",
    "category": "Sports & Fitness",
    "price": 29.99,
    "rating": 4.6,
    "stock": 35
  },
  {
    "id": 9,
    "productName": "Leather Wallet for Men",
    "category": "Accessories",
    "price": 19.99,
    "rating": 4.3,
    "stock": 45
  },
  {
    "id": 10,
    "productName": "Cotton Bed Sheet Set",
    "category": "Home & Living",
    "price": 42.5,
    "rating": 4.4,
    "stock": 20
  },
  {
    "id": 11,
    "productName": "Laptop Cooling Pad",
    "category": "Electronics",
    "price": 27.99,
    "rating": 4.1,
    "stock": 37
  },
  {
    "id": 12,
    "productName": "Women's Handbag",
    "category": "Fashion",
    "price": 64.99,
    "rating": 4.7,
    "stock": 22
  },
  {
    "id": 13,
    "productName": "Non-stick Frying Pan",
    "category": "Home & Kitchen",
    "price": 33.75,
    "rating": 4.5,
    "stock": 28
  },
  {
    "id": 14,
    "productName": "Wireless Keyboard & Mouse Combo",
    "category": "Electronics",
    "price": 54.99,
    "rating": 4.4,
    "stock": 26
  },
  {
    "id": 15,
    "productName": "Sports Water-Resistant Watch",
    "category": "Accessories",
    "price": 69.5,
    "rating": 4.6,
    "stock": 15
  },
  {
    "id": 16,
    "productName": "Backpack with Laptop Compartment",
    "category": "Accessories",
    "price": 44.9,
    "rating": 4.5,
    "stock": 33
  },
  {
    "id": 17,
    "productName": "Wireless Portable Speaker",
    "category": "Electronics",
    "price": 79.99,
    "rating": 4.8,
    "stock": 19
  },
  {
    "id": 18,
    "productName": "Running Shoes for Women",
    "category": "Fashion",
    "price": 59.49,
    "rating": 4.6,
    "stock": 30
  },
  {
    "id": 19,
    "productName": "Kitchen Knife Set",
    "category": "Home & Kitchen",
    "price": 48.99,
    "rating": 4.7,
    "stock": 25
  },
  {
    "id": 20,
    "productName": "Wireless Phone Charger Stand",
    "category": "Electronics",
    "price": 22.99,
    "rating": 4.3,
    "stock": 50
  }
]
// export default rawApiData;

// output example => [{name:"phone"}, {name:"laptop"}]

//TODO:  Using array methods  process the rawApiData to get the top 5 highest-rated products in the "Electronics" category. The final output should be an array of objects, each containing only the productName as name.
//* Process
//* Filter => Electronics Category
//* Sort by => Rating High to Low
//* Slice => top 5 items
//* Map => transform object shape to {name: productName}

const topElectronics = rawApiData
  .filter(item => item.category === "Electronics")
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3)
  .map(item => ({ name: item.productName }));

  console.log('Top 5 Electronics Products:', topElectronics);
// Expected Output:
// Top 5 Electronics Products: [
//   { name: 'Wireless Portable Speaker' },
//   { name: 'Gaming Mouse RGB' },
//   { name: 'Wireless Keyboard & Mouse Combo' }
// ]
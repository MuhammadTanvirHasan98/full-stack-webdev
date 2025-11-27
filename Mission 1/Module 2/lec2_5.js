const cartItems = [
  { id: "p-001", name: "Apple", price: 1500, quantity: 4 },
  { id: "p-002", name: "Banana", price: 300, quantity: 6 },
  { id: "p-003", name: "Cherry", price: 200, quantity: 10 },
];


const totalPrice = cartItems.reduce((total, item) => {
  // console.log('Current Total:', total, 'Adding Item:', item);
  return total + item.price * item.quantity;
}, 0);


// Total Price: 9800
// console.log('Total Price:', totalPrice); 


const players = [
  { name: "Jamal Bhuiyan", score: 25 },
  { name: "Sheikh Morsalin", score: 32 },
  { name: "Sohel Rana", score: 28 },
  { name: "Riyad Mahmud", score: 35 },
  { name: "Muhammad Tanvir Hasan", score: 80 },
];


const highestScorer = players.reduce((topPlayer, currentPlayer) => {
  console.log('Top Player:', topPlayer, 'Current Player:', currentPlayer);
  if (currentPlayer.score > topPlayer.score) {
    console.log('New Top Player:', currentPlayer);
    return currentPlayer;
  }
  return topPlayer;
  // return currentPlayer.score > topPlayer.score ? currentPlayer : topPlayer;
}, players[0]);

console.log('Highest Scorer:', highestScorer);

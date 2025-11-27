

// Function
// Arrow Function, normal function, anonymous function

function add(a: number, b: number) {
    return a + b;
}

 const result = add(5, 10);

 const multiply = (x: number, y: number): number =>  x * y;
 const multiplyResult = multiply(5, 10);

console.log("Result:", result);  // JS - TS
console.log("Multiply:", multiplyResult);  // JS - TS


// const poorUser = function(name: string): void {
//     console.log("User Name:", name);  // JS - TS
// }


// console.log(poorUser("Tanvir"));  // JS - TS


const user3 = {
  name: "Tanvir",
  balance: 5000,
  addBalance(money: number): void {
    this.balance += money;
  }
}

console.log("Initial Balance:", user3.balance);  // JS - TS
user3.addBalance(1500);
console.log("Updated Balance:", user3.balance);  // JS - TS


const numbers: number[] = [10, 20, 30, 40, 50];
const squaredNumbers = numbers.map((num: number): number => num * num);
console.log("Squared Numbers:", squaredNumbers);  // JS - TS
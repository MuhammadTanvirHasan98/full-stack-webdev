



// spread operator
const friends = ["Alice", "Bob", "Charlie"];
const newFriends = ["David", "Eve", ...friends];
console.log("New Friends:", newFriends); // ["David", "Eve", "Alice", "Bob", "Charlie"]


const user = {
    name: "Tanvir",
    age: 25,
    city: "Dhaka"
};

const user2 = {
  ...user,
     country: "Bangladesh"
};

console.log("User2:", user2); // { name: 'Tanvir', age: 25, city: 'Dhaka', country: 'Bangladesh' }


const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6, 7, 8];
console.log("New Numbers:", newNumbers); // [1, 2, 3, 4, 5, 6, 7, 8]



// rest parameter

const sentInvite = (greeting: string, ...names: string[]): void => {
    names.forEach(name => {
        console.log(`${greeting}, ${name}!`);
    });
};  

sentInvite("Hello", "Alice", "Bob", "Charlie");


const user3 = {
     id: 1,
     username: "tanvir",
     email: "tanvir@example.com",
     name:{
       firstName: "Muhammad",
        lastName: "Tanvir",
       }    
}

const{name:{firstName: fName, lastName: lName}} = user3;
// const {id, username, ...otherDetails} = user3;
// console.log("ID:", id);
// console.log("Username:", username);
// console.log("Other Details:", otherDetails);
console.log("First Name:", fName);
console.log("Last Name:", lName);


const numberList = [10, 20, 30, 40, 50, 60];
const [,,,...restNums] = numberList;
console.log("Rest Nums:", restNums);
const [first, second, ...restNumbers] = numberList;
console.log("First:", first);
console.log("Second:", second);
console.log("Rest Numbers:", restNumbers);

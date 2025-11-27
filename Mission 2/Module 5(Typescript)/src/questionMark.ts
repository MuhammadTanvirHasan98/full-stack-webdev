

// ? : Ternary Operator: decision making operator
//? : nullish Coalescing Operator
// ? : Optional Chaining Operator

// Ternary Operator
const age: number = 20;
const canVote: string = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log("Can Vote:", canVote); // Output: Can Vote: Yes, you can vote.

// Nullish Coalescing Operator
const userTheme = null;

const selectedTheme = userTheme ?? "Light Mode";
console.log("Selected Theme:", selectedTheme); // Output: Selected Theme: Light Mode

const userLanguage = "English";
const selectedLanguage = userLanguage ?? "English";
console.log("Selected Language:", selectedLanguage); // Output: selected Language: English  

let inputValue: string | null = null;
const defaultValue: string = "Default Value";
const finalValue: string = inputValue ?? defaultValue;
console.log("Final Value:", finalValue); // Output: Final Value: Default Value

// Optional Chaining Operator
type User = {
    name: string; 
    address?: {
        street: string;
        city: string;
    }
}
const user: User = {
    name: "John Doe"
}
const userCity: string | undefined = user.address?.city;
console.log("User City:", userCity); // Output: User City: undefined
// If address exists, it will print the city; otherwise, it will print undefined.
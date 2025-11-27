



// array, object 
let bazarList: string[] = ["apple", "banana", "orange"];

bazarList.push("grape");
// bazarList.push(100); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log("Bazar List:", bazarList);  // JS - TS


let mixArray: (string | number )[] = ["hello", 42, "world"];

// mixArray.push(false); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

mixArray.push(100);

console.log("Mix Array:", mixArray);  // JS - TS


// TS - Tuple
let person: [number, number] = [20, 30];

// person[0] = "Bob";  // Error: Type 'string' is not assignable to type 'number'.
person[1] = 25;     // OK

let nameAndRoll: [string, number] = ["Alice", 101];
nameAndRoll[0] = "Bob";   // OK
// nameAndRoll[1] = "Charlie"; // Error: Type 'string' is not assignable to type 'number'.


// reference type - Object

const user:{
    firstName: string;
    middleName: string;
    lastName: string;
    profession?: string; // optional property
    organization:"Muhammad IT"
} = {
   firstName: "Muhammad",
   middleName: "Tanvir",
   lastName: "Hasan",
   organization: "Muhammad IT" // value => type: literal type
}

user.profession = "Developer"; // Adding optional property
// user.organization = "Muhammad IT Ltd"; // Error: Type '"Muhammad IT Ltd"' is not assignable to type '"Muhammad IT"'.
console.log("User Object:", user);  // JS - TS
user.firstName = "Imran";
// console.log("Updated User Object:", user);  // JS - TS



const user2:{
    firstName: string;
    middleName: string;
    lastName: string;
    profession?: string; // optional property
   readonly organization:"Muhammad IT Farm" // access modifier
} ={
   firstName: "Muhammad",
   middleName: "Tanvir",
   lastName: "Hasan",
   organization: "Muhammad IT Farm" // value => type: literal type
}

// user2.organization = "Muhammad IT Ltd"; // Error: Cannot assign to 'organization' because it is a read-only property.
console.log("User Object:", user2);  // JS - TS
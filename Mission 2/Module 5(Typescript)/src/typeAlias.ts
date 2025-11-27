


type Muhammad={
    firstName: string;
    lastName: string;
    age: number;
    profession?: string; // optional property
    organization: "Muhammad IT"}

const userMuhammad: Muhammad = {
    firstName: "Muhammad",
    lastName: "Tanvir",
    age: 25,
    organization: "Muhammad IT"
}

const userImran: Muhammad = {
    firstName: "Imran",
    lastName: "Hossain",    
    age: 28,
    profession: "Developer",
    organization: "Muhammad IT"
}
console.log("User Muhammad:", userMuhammad);
console.log("User Imran:", userImran);


type AddFunction = (a: number, b: number) => number;

const add: AddFunction = (a, b) => a + b;

console.log("Addition Result:", add(10, 20));
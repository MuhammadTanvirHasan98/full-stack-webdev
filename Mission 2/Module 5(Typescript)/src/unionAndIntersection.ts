

// Union Types
type UserRole = "admin" | "user" | "guest";

const getDashboard = (role: UserRole): string => {
    if (role === "admin") {
        return "Admin Dashboard";
    } else if (role === "user") {
        return "User Dashboard";
    } else {
        return "Guest Dashboard";
    }
}

getDashboard("admin"); // Valid
getDashboard("user"); // Valid
getDashboard("guest"); // Valid

console.log(getDashboard("admin"));
console.log(getDashboard("user"));
console.log(getDashboard("guest"));
// console.log(getDashboard("superadmin"));
// getDashboard("superadmin"); // Error: Argument of type '"superadmin"' is not assignable to parameter of type 'UserRole'.



// Intersection Types
type Employee = {
    id:string;  
    name: string;
    age: number;
}

type Manager = {
    employeeId: string;
    department: string;
    teamSize: number;
}

type ManagementEmployee = Employee & Manager;

const emp1: ManagementEmployee = {  
    id: "E001",
    name: "Alice",
    age: 30,  
    employeeId: "M001",
    department: "Sales",
    teamSize: 10
};
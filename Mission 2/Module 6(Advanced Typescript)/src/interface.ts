



type User ={
    name: string;
    age: number;
}

const user1: User = {
    name: 'Muhammad',
    age: 30
};

console.log(user1);
const user2: User = {
    name: 'Aisha',
    age: 25
};

console.log(user2);

type Role = {
  role: 'admin' | 'user' | 'guest';
}

type UserWithRole = User & Role;

const user3: UserWithRole = {
    name: 'Ali',
    age: 28,
    role: 'admin'
};

console.log(user3);



// interface only works with object type: array, object, functions etc
interface IUser {
    name: string;
    age: number;
}

const user4: IUser = {
    name: 'Fatima',
    age: 22
};
console.log(user4);

interface IUserWithRole extends IUser {
    role: 'admin' | 'user' | 'guest';
}
const user5: IUserWithRole = {
    name: 'Hasan',
    age: 35,
    role: 'user'
};
console.log(user5);


type isAdmin = boolean;
const isAdmin: isAdmin = true;
console.log({isAdmin});



// function type interface

type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
console.log(add(5, 10));


interface ISubtract {
    (a: number, b: number): number;
}

const subtract: ISubtract = (a, b) => a - b;
console.log(subtract(10, 5));


type Friends = string[];

const friends: Friends = ['Ahmed', 'Sara', 'Omar'];
                          //  0       1       2 // index

 interface IFriends {
    [index: number]: string;
 }
 const friends2: IFriends = ['Laila', 'Yusuf', 'Mona'];
 console.log(friends2);    
 
 type numbers = number[];
 const numbers: numbers = [1, 2, 3, 4, 5];

 interface INumbers {
    [index: number]: number;
 }
    const numbers2: INumbers = [10, 20, 30, 40, 50];
    console.log(numbers2);


 type RGB = [number, number, number];

 const red: RGB = [255, 0, 0];
 console.log({red});




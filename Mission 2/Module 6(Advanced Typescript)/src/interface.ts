



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


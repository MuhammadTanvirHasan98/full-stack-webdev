



// dynamically generalized interface


// type GenericArray = Array<string>;
// type GenericArrayNumber = Array<number>;
// type GenericArrayBoolean = Array<boolean>;
type GenericArray<T> = Array<T>;

// const friends: string[] = ['Ahmed', 'Sara', 'Omar'];
// const friends: Array<string> = ['Ahmed', 'Sara', 'Omar'];
// const friends: GenericArray = ['Ahmed', 'Sara', 'Omar'];
const friends: GenericArray<string> = ['Ahmed', 'Sara', 'Omar'];


// const numbers: number[] = [1, 2, 3, 4, 5];
// const numbers: Array<number> = [1, 2, 3, 4, 5];
// const numbers: GenericArrayNumber = [1, 2, 3, 4, 5];
const numbers: GenericArray<number> = [1, 2, 3, 4, 5];


// const isEligible: boolean[] = [true, false, true];
// const isEligible: Array<boolean> = [true, false, true];
// const isEligible: GenericArrayBoolean = [true, false, true];
const isEligible: GenericArray<boolean> = [true, false, true];


const sqrFunction = (value:number): number => value * value;
sqrFunction(5);


type CoordinatesType = [number, number];
const userLocation: CoordinatesType = [34.0522, -118.2437];

type Coordinates<X, Y> = [X, Y];

const userLocation2: Coordinates<number, number> = [34.0522, -118.2437];
const userNameAndId: Coordinates<string, number> = ['user123', 456];
const userStatus: Coordinates<string, boolean> = ['active', true];
const userAmount: Coordinates<string, string> = ['99.99', 'USD'];


const userList: GenericArray<{name: string; age: number}> = [
    {name: 'Aisha', age: 28},
    {name: 'Bilal', age: 32},
    {name: 'Carmen', age: 24}
];
userList.forEach(user => {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
});
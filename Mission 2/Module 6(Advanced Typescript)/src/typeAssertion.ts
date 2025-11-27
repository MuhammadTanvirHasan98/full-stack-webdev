


let anything:any;

anything = 'Muhammad';

(anything as string).length; // type assertion

const kgTogmCoverter=(input: number | string) :string|number|undefined => {
    if (typeof input ==='number'){
        return input * 1000;
    } else {
       const [value] = input.split(' ');
       return `Converted Output: ${Number(value) * 100}`
    } 
}

const result1 = kgTogmCoverter(100) as number;
const result2 = kgTogmCoverter('100 kg') as string;
console.log({result1}); 
console.log({result2}); 
// console.log(parseFloat('123.45 kg')); it converts string to number by ignoring non-numeric characters


type CustomErrorType = {
    message: string;
    code: number;
}

try {
    throw {message: 'An error occurred', code: 500};
} catch (err) {
    console.log((err as CustomErrorType).message);
    console.log((err as CustomErrorType).code);
}
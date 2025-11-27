

// nullable types

const getUser=(input:string | null)=>{

   if(input){
     console.log(`From DB: ${input}`);
   } else {
      console.log("No user found");
   }
}

// getUser("Muhammad")
getUser(null)


// unknown type
 const discountCalculator = (input: unknown) => {
    if (typeof input === "number") {
        const discountPrice = input * 0.5;
        console.log(`Discounted Price: ${discountPrice}`);
    }
    else if (typeof input === "string") {
      const [discountPrice] = input.split(" ");
      // const price = parseFloat(splitInput[0]);
      // const discountedPrice = price * 0.5;
      const discount = (Number(discountPrice)) * 0.5;
        console.log("Discounted Price:", discount);
    }
    else if (input === null) {
        console.log("No discount available");
    }

};

// discountCalculator(10);
discountCalculator("10 tk");
discountCalculator(null);


const throwError = (message: string): never => {
    throw new Error(message);
}
// throwError("Muhammad, An unexpected error occurred.");

// never type example in function with infinite loop



let userInput: unknown;
let userName: string;
userInput = 5;
userInput = "Muhammad";
if (typeof userInput === "string") {
    userName = userInput;
    console.log("User Name:", userName);
}
let fullName: string = "Martin Wisor";
// variable type is not required, but good etiquette

// objects are a way of grouping data together, and make referencing easier
// let car = {
//   make: "Chevrolet",
//   model: "Camaro",
//   year: 2020,
//   isUsed: true
// }

// I have an object, it has an interface and it must have these properties. hasBeenClimbed is optional as there is a question mark behind it.

interface Mountain {
  name: string;
  height: number;
  hasBeenClimbed?: boolean;
}

// What's the point? New properties cannot be added. Name and height are the only items allowed

// let newMountain: Mountain = {
//   name: "Kilimanjaro",
//   height: 10000,
// };

// let mountain: Mountain[] = [];
// the only thing we can place in here is Mountain

// let numberArray: number[] = [5, 7, 10, "Martin"];
// // every element must be a number

export let mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

// get the first mountain name
// mountain[0].name;

// function signature

function findNameOfTallestMountain(mountains: Mountain[]): string {
  let tallestMountain = mountains.reduce((prev, current) =>
    prev.height > current.height ? prev : current
  );
  return tallestMountain.name;
}

console.log(findNameOfTallestMountain(mountains));

let thisVariableCanBeAnything: any;
thisVariableCanBeAnything = 0;
thisVariableCanBeAnything = true;
thisVariableCanBeAnything = "word";
// any turns typescript into JavaScript. sometimes we need to use any in case we don't know what we are going to get.

// optional parameter: allows for 3rd parameter but not necessary, there can be as many optional parameters as possible

function Calculate(a: number, b: number, c?: number) {}

Calculate(1, 2);
Calculate(1, 2, 3);

// allow variable to be a string or number
let stringOrNumber: string | number;

stringOrNumber = "Martin";
stringOrNumber = 0;

export { findNameOfTallestMountain, Mountain };

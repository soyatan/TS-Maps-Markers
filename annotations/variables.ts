let apples = 5;

let speed: string = "fast";
speed = "slow";

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

let now: Date = new Date();

//Array

let colors: string[] = ["blue", "red"];

let myNumbers: number[] = [1, 2, 3, 4];

let truths: boolean[] = [true, true, false];

//classes
class Car {}
let car: Car = new Car();

//object literal

let point: { x: number; y: number } = {
  x: 12,
  y: 20,
};

//function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//annotations

const json = '{"x":10,"y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates);

let words = ["red", "blue", "shit"];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "red") {
    foundWord = true;
  }
}

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
const add = (a: number, b: number): number => {
  return a + b;
};
const addy = (a: number, b: number) => {
  if (a > b) return true;
  else return a + b;
};
const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number) {
  return a / b;
}
const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
};

logWeather(forecast);

const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, name }: { age: number; name: string } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

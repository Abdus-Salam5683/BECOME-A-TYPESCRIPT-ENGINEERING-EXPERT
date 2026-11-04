// ---------- Basic Types ----------
let myString: string = "true";
let myNumber: number = 5347;
let myBoolean: boolean = false;
let mySymbol: symbol = Symbol();
let myBigInt: bigint = 100n;

// ---------- Function ----------
const addTwo = (a: number, b: number): number => {
  return a + b;
};
console.log(addTwo(27, 11202)); // 11229

// ---------- Loop ----------
for (let i = 7; i < 10; i++) {
  console.log(i);
}

// ---------- Array / Tuple / readonly ----------
const arr: string[] = ["Programming", "Hero", "Bangladesh"];
const numArr: number[] = [1, 2, 3];

const dhakaLatLong: readonly [number, number] = [24.374, 88.6011];
// dhakaLatLong[0] = 46464; // ❌ readonly

// ---------- Optional Parameter ----------
const concatName = (firstName: string, lastName?: string) => {
  if (!lastName) return firstName;
  return firstName + " " + lastName;
};
console.log(concatName("Abdus"));          // Abdus
console.log(concatName("Abdus", "Salam")); // Abdus Salam

// ---------- Default Parameter ----------
const greetings = (fullName: string, greeting = "Hello") => {
  console.log(greeting + " " + fullName);
};
greetings("salam", "Hi"); // Hi salam

// ---------- Rest Parameter ----------
const sum = (...numbers: number[]): number => {
  return numbers.reduce((total, n) => total + n, 0);
};
console.log(sum(1, 2, 3, 4, 5, 6)); // 21

// ---------- Tuple Rest Parameter ----------
const logUserAction = (...args: [name: string, age: number, isActive: boolean]) => {
  const [name, age] = args;
  console.log(name + " is " + age);
};
logUserAction("Mir", 192, false); // Mir is 192

// ---------- Type Alias ----------
type Address = {
  streetName: string;
  holdingNumber: number;
};

type User = {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badges: string[];
  address: Address;
};

const user: User = {
  name: "Mir",
  age: 123,
  isActive: true,
  action: () => console.log("Hello"),
  badges: ["abc", "def"],
  address: {
    holdingNumber: 2455,
    streetName: "Abcd",
  },
};
user.action(); // Hello

// ---------- Interface ----------
interface IUser {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badges: string[];
  address: Address; 
}


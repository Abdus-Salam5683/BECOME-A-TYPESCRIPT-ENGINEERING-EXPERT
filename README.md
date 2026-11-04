# Module 01: TypeScript Foundations

> **Course:** Next Level Web Development with AI Engineering (Programming Hero)
> **Module:** 01
> **Topics:** Why TypeScript, How it works, Basic Types, tsconfig, Array/Tuple, Functions, Object/Type Alias/Interface

---

## 📌 সূচিপত্র
1. [কেন TypeScript দরকার?](#১-কেন-typescript-দরকার)
2. [TypeScript আসলে কী?](#২-typescript-আসলে-কী)
3. [TypeScript কীভাবে কাজ করে?](#৩-typescript-কীভাবে-কাজ-করে)
4. [Development Environment Setup](#৪-development-environment-setup)
5. [Basic Types](#৫-basic-types)
6. [tsconfig এবং Compile](#৬-tsconfig-এবং-compile)
7. [Array, Tuple, readonly](#৭-array-tuple-readonly)
8. [Function: Optional, Default, Rest](#৮-function-optional-default-rest)
9. [Object, Type Alias, Interface](#৯-object-type-alias-interface)
10. [আমার লেখা প্র্যাকটিস কোড (সংশোধিত)](#১০-আমার-লেখা-প্র্যাকটিস-কোড-সংশোধিত)
11. [Common Mistakes](#১১-common-mistakes)

---

## ১. কেন TypeScript দরকার?

JavaScript হলো **dynamically typed**। এতে টাইপ ভুল রানটাইমে ধরা পড়ে, যা বড় প্রজেক্টে বিপদ ডেকে আনে।

**উদাহরণ (JavaScript):**
```js
function add(a, b) {
  return a + b;
}
add("10", 5); // "105" — ভুল হলেও এরর দেবে না!
TypeScript-এ:

ts
function add(a: number, b: number) {
  return a + b;
}
add("10", 5); // ❌ Compile-time error: Argument of type 'string' is not assignable to parameter of type 'number'
সুবিধা:

Compile-time error detection

IntelliSense / Autocomplete

Code readability ও maintainability

বড় টিমে কাজ করা সহজ

২. TypeScript আসলে কী?
TypeScript = JavaScript + Static Type System

এটি JavaScript-এর Superset (সব JS কোড বৈধ TS কোড)

ব্রাউজার TypeScript বোঝে না → Compile করে JavaScript-এ রূপান্তর করতে হয়

Developed by Microsoft (Anders Hejlsberg)

৩. TypeScript কীভাবে কাজ করে?
text
TypeScript (.ts)  →  tsc (Compiler)  →  JavaScript (.js)
                         ↑
                  Type Checking এখানে হয়
tsc = TypeScript Compiler

Compile হওয়ার সময় টাইপ চেক হয়

এরপর সমস্ত টাইপ মুছে গিয়ে সাধারণ JS তৈরি হয়

৪. Development Environment Setup
bash
# TypeScript গ্লোবালি ইনস্টল
npm install -g typescript

# ভার্সন চেক
tsc --version

# প্রজেক্টে লোকালি ইনস্টল
npm init -y
npm install typescript --save-dev

# tsconfig.json তৈরি
tsc --init
VS Code Extension: TypeScript ইতিমধ্যে বিল্ট-ইন, তবে Error Lens এক্সটেনশন ইনস্টল করলে এরর সাথে সাথে দেখা যায়।

৫. Basic Types
Type	উদাহরণ	বর্ণনা
string	let n: string = "Rahim"	টেক্সট
number	let age: number = 25	সংখ্যা (int/float সব)
boolean	let isOk: boolean = true	true/false
null	let x: null = null	শূন্য মান
undefined	let y: undefined = undefined	অনির্ধারিত
any	let z: any = 5	যেকোনো টাইপ (এড়িয়ে চলুন)
unknown	let u: unknown = 5	নিরাপদ any
void	function f(): void {}	কিছু রিটার্ন করে না
never	function g(): never { throw Error() }	কখনো রিটার্ন করে না
symbol	let s: symbol = Symbol()	ইউনিক আইডেন্টিফায়ার
bigint	let b: bigint = 100n	বড় সংখ্যা
কোড উদাহরণ:

ts
let myString: string = "true";
let myNumber: number = 5347;
let myBoolean: boolean = false;
let mySymbol: symbol = Symbol();
let myBigInt: bigint = 100n;

const addTwo = (a: number, b: number): number => {
  return a + b;
};
console.log(addTwo(27, 11202)); // 11229
৬. tsconfig এবং Compile
tsc --init দিয়ে tsconfig.json তৈরি হয়। গুরুত্বপূর্ণ অপশন:

json
{
  "compilerOptions": {
    "target": "ES2020",        // কোন JS ভার্সনে রূপান্তর হবে
    "module": "commonjs",      // মডিউল সিস্টেম
    "rootDir": "./src",        // .ts ফাইল কোথায়
    "outDir": "./dist",        // .js ফাইল কোথায় যাবে
    "strict": true,            // কঠোর টাইপ চেকিং
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
কমান্ড:

bash
tsc              # একবার compile
tsc --watch      # ফাইল পরিবর্তন হলে অটো compile
tsc --init       # tsconfig.json তৈরি
৭. Array, Tuple, readonly
Array
ts
const arr: string[] = ["Programming", "Hero", "Bangladesh"];
const numArr: number[] = [1, 2, 3];

// অথবা
const arr2: Array<string> = ["a", "b"];
Tuple
নির্দিষ্ট সংখ্যক ও নির্দিষ্ট টাইপের এলিমেন্ট:

ts
const dhakaLatLong: [number, number] = [24.374, 88.6011];
readonly
পরিবর্তন করা যাবে না:

ts
const dhakaLatLong: readonly [number, number] = [24.374, 88.6011];
// dhakaLatLong[0] = 46464; ❌ Error: Cannot assign to '0' because it is a read-only property
৮. Function: Optional, Default, Rest
Optional Parameter (?)
ts
const concatName = (firstName: string, lastName?: string) => {
  if (!lastName) return firstName;
  return firstName + " " + lastName;
};

console.log(concatName("Abdus"));           // "Abdus"
console.log(concatName("Abdus", "Salam"));  // "Abdus Salam"
Default Parameter
ts
const greetings = (fullName: string, greeting = "Hello") => {
  console.log(greeting + " " + fullName);
};
greetings("Salam", "Hi"); // "Hi Salam"
Rest Parameter (...)
ts
const sum = (...numbers: number[]): number => {
  return numbers.reduce((total, n) => total + n, 0);
};
console.log(sum(1, 2, 3, 4, 5, 6)); // 21
Tuple Rest Parameter
ts
const logUserAction = (...args: [name: string, age: number, isActive: boolean]) => {
  const [name, age] = args;
  console.log(name + " is " + age);
};
logUserAction("Mir", 192, false);
৯. Object, Type Alias, Interface
Object Type
ts
let user: { name: string; age: number } = { name: "Mir", age: 25 };
Type Alias
ts
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
Interface
ts
interface IUser {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badges: string[];
}
Type vs Interface (মূল পার্থক্য)
Feature	Type Alias	Interface
Primitive type	✅	❌
Union type	✅	❌
Declaration merging	❌	✅
extends	✅ (intersection)	✅ (inheritance)
Object	✅	✅


 Common Mistakes
any বেশি ব্যবহার করা → টাইপ সেফটি নষ্ট হয়। unknown ব্যবহার করুন।

Optional parameter-এর পর required parameter রাখা → ভুল। ? সবসময় শেষে থাকবে।

Rest parameter-এর টাইপ না দেওয়া → ...numbers: number[] লিখতে হবে।

readonly ভুলে যাওয়া → tuple/array immutable করতে চাইলে ব্যবহার করুন।

Interface-এ nested object ভুলে যাওয়া → address: Address যোগ করতে হবে।

✅ Module 01 Checklist
☑ TypeScript কেন দরকার বুঝেছি
☑ tsc দিয়ে compile করতে পারি
☑ Basic types লিখতে পারি
☑ tsconfig বুঝেছি
☑ Array, Tuple, readonly ব্যবহার করতে পারি
☑ Optional, Default, Rest parameter লিখতে পারি
☑ Type Alias ও Interface লিখতে পারি
☑ Type vs Interface পার্থক্য জানি

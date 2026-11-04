let myString : string = "true";
let myNumber : number = 5347;
let myBoolean : boolean = false
let mySymbol : symbol = Symbol()
let myBigInt : bigint = 100n




const addTow = (a : number, b : number)  =>{
return a + b;
}

console.log(addTow(27, 11202))


// tsc || tsc --watch


// tsc --init


let yourAge : number =  55;

console.log(yourAge)



let sum : number = 0;

// for(let i : number = 0; i < 10000;  i++) {

//     sum = sum + i;

//     let sum1 : number = sum + i; 
//     let sum2 : number = sum + sum1;
//     console.log(i, sum, sum1, sum2 )

// }


for(let i = 7; i <10; i++){
    console.log(i);
}



// const arr : Array<string> =["Programming", "Hero", "Bangladesh"];


const arr : string[] =["Programming", "Hero", "Bangladesh"];

const numArr : number[] = [1, 2, 3]


const dhakaLatLong :readonly [number, number] = [24.374, 88.6011]


// dhakaLatLong[0] = 46464;


const concatName = (firstName: string, lastName?: string) =>{
    if(!lastName){
        return firstName;
    }

    return firstName + " " + lastName;
}


console.log(concatName("Abdus"))
console.log(concatName("Abdus", "Salam"))
console.log(concatName("Abdus", "Salam",))



const greetings = (fullName : string, greeting ="Hello") =>{
    console.log(greeting + " " + fullName);
}
greetings("salam", "Hi")



const sum = (...numbers: number[]) =>{
    return numbers.reduce((total, sum => total + sum, 0))
}


sum(1, 2, 3, 4, 5, 6);



const logUserAction = (
    ...args: [name: string, age: number, isActive: boolean]
) =>{
    const [name, age] = args;

    console.log(name + " is" + age);
};

logUserAction("Mir", 192, false);


// * Object type, type alias and interface

const user: {
    name:string;
    age: number;
    isActive: boolean;
    action: () => void;
    badges: string[];
}= {
    name: "Mir",
    age: 123,
    isActive: true,
    action: () => console.log("Hello"),

    badges: ['abc', "def"]
};




console.log("Abdus salam")








// 9.4.2 non-null 어서션

// 타입 유추: Date | undefined
let maybeDate = Math.random() > 0.5
    ? undefined
    : new Date();

// 타입이 Date라고 간주됨
maybeDate as Date;

// 타입이 Date라고 간주됨
maybeDate!;



const seasonCounts = new Map([
    ["I love Lucy", 6],
    ["The Golden Girls", 7],
]);

// 타입: string | undefined
const maybeValue = seasonCounts.get("I Love Lucy");

console.log(maybeValue.toUpperCase());
//          ~~~~~~~~~~
// Error:'maybeValue' is possibly 'undefined'.

// 타입: string
const knownValue = seasonCounts.get("I Love Lucy")!;

console.log(knownValue.toUpperCase()); // Ok

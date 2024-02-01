// 6.1.2 유니언 타입 배열

// 타입은 string 또는 number의 배열
let stringOrArrayOfNumbers: string | number[];

// 타입은 각각 number 또는 string인 요소의 배열
let arrayOfStringOfNumbers: (string | number)[];



// 타입: (string | undefined)[]
const namesMaybe = [
    "Aqualtune",
    "Blenda",
    undefined,
];

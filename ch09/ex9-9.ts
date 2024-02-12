// 9.4.3 타입 어서션 주의 사항

const seasonCounts = new Map([
    ["Broad City", 5],
    ["Community", 6],
]);

// 타입: string
const knownValue = seasonCounts.get("I Love Lucy")!;

console.log(knownValue.toUpperCase()); // 타입 오류는 아니지만, 런타임 오류가 발생함
// Runtime TypeError: Cannot read property 'toUpperCase' of undefined.



// 어서션 vs. 선언

interface Entertainer {
    acts: string[];
    name: string;
}

const declared: Entertainer = {
    //~~~~~~~~
    // Error: Property 'acts' is missing in type
    // '{ name: string; }' but required in type 'Entertainer'.
    name: "Moms Mabley",
};

const asserted = {
    name: "Moms Mabley",
} as Entertainer; // 허용되지만 런타임 시 오류 발생

// 다음 구문은 런타임 시 다음 오류로 인해 정상적으로 작동되지 않음
// Runtime TypeError: Cannot read properties of undefined (reading: 'toPrecision')
console.log(declared.acts.join(", "));
console.log(asserted.acts.join(", "));



// 어서션 할당 가능성

let myValue = "Stella!" as number;
//            ~~~~~~~~~~~~~~~~~~~
// Error: Conversion of type 'string' to type 'number' may be a mistake
// because neither type sufficiently overlaps with the other.
// If this was intentional, convert the expression to 'unknown' first.



let myValueDouble = "1337" as unknown as number; // 허용되지만 이렇게 사용하면 안 됨

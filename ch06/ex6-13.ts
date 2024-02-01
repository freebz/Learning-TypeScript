// 6.4.2 튜플 추론

// 반환 타입: (string | number)[]
function firstCharAndSize(input: string) {
    return [input[0], input.length];
}

// firstChar 타입: string | number
// size 타입: string | number
const [firstChar, size] = firstCharAndSize("Gudit");



// 명시적 튜플 타입

// 반환 타입: [string, number]
function firstCharAndSizeExplicit(input: string): [string, number] {
    return [input[0], input.length];
}

// firstChar 타입: string
// size 타입: number
const [firstChar, size] = firstCharAndSizeExplicit("Cathay Williams");



// const 어서션

// 타입: (string | number)[]
const unionArray = [1157, "Tomoe"];

// 타입: readonly [1157, "Tomoe"]
const readonlyTuple = [1157, "Tomoe"] as const;



const pairMutable: [number, string] = [1157, "Tomoe"];
pairMutable[0] = 1247; // Ok

const pairAlsoMutable: [number, string] = [1157, "Tomoe"] as const;
//    ~~~~~~~~~~~~~~~
// Error: The type 'readonly [1157, "Tomoe"]' is 'readonly'
// and cannot be assigned to the mutable type '[number, string]'.

const pairConst = [1157, "Tomoe"] as const;
pairConst[0] = 1247;
//        ~
// Error: Cannot assign to '0' because it is a read-only property.



// 반환 타입: readonly [string, number]
function firstCharAndSizeAsConst(input: string) {
    return [input[0], input.length] as const;
}

// firstChar 타입: string
// size 타입: number
const [firstChar, size] = firstCharAndSizeAsConst("Ching Shih");

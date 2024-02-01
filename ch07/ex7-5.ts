// 7.2.4 호출 시그니처

type FunctionAlias = (input: string) => number;

interface CallSignature {
    (input: string): number;
}

// 타입: (input: string) => number
const typedFunctionAlias: FunctionAlias = (input) => input.length; // Ok

// 타입: (input: string) => number
const typedCallSignature: CallSignature = (input) => input.length; // Ok



interface FunctionWithCount {
    count: number;
    (): void;
}

let hasCallCount: FunctionWithCount;

function keepsTrackOfCalls() {
    keepsTrackOfCalls.count += 1;
    console.log(`I've been called ${keepsTrackOfCalls.count} times!`);
}

keepsTrackOfCalls.count = 0;

hasCallCount = keepsTrackOfCalls; // Ok

function doesNotHaveCount() {
    console.log("No idea!");
}

hasCallCount = doesNotHaveCount;
//~~~~~~~~~~
// Error: Property 'count' is missing in type
// '() => void' but required in type 'FunctionWithCount'.

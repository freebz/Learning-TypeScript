// 10.6.3 엄격 모드

{
    "compilerOptions": {
	"strict": true
    }
}


{
    "compilerOptions": {
	"noImplicitAny": false,
	"strict": true
    }
}



// noImplicitAny

const logMessage = (message) => {
    //              ~~~~~~~
    // Error: Parameter 'message' implicitly has an 'any' type.
    console.log(`Message: ${message}!`);
};



const logMessage = (message: string) => { // Ok
    console.log(`Message: ${message}!`);
}



type LogsMessage = (message: string) => void;

const logMessage: LogsMessage = (message) => { // Ok
    console.log(`Message: ${message}!`);
}



// strictBindCallApply

function getLength(text: string, trim?: boolean) {
    return trim ? text.trim().length : text.length;
}

// 함수 타입: (thisArg: Function, argArray?: any) => any
getLength.apply;

// 반환 타입: any
getLength.bind(undefined, "abc123");

// 반환 타입: any
getLength.call(undefined, "abc123", true);



function getLength(text: string, trim?: boolean) {
    return trim ? text.trim().length : text;
}

// 함수 타입:
// (thisArg: typeof getLength, args: [text: string, trim?: boolean]) => number;
getLength.apply;

// 반환 타입: (trim?: boolean) => number
getLength.bind(undefined, "abc123");

// 반환 타입: number
getLength.call(undefined, "abc123", true);



// strictFunctionTypes

function checkOnNumber(containsA: (input: number | string) => boolean) {
    return containsA(1337);
}

function stringContainsA(input: string) {
    return !!input.match(/a/i);
}

checkOnNumber(stringContainsA);



checkOnNumber(stringContainsA);
//            ~~~~~~~~~~~~~~~
// Error: Argument of type '(input: string) => boolean' is not assignable
// to parameter of type '(input: string | number) => boolean'.
//   Types of parameters 'input' and 'input' are incompatible.
//     Type 'string | number' is not assignable to type 'string'.
//       Type 'number' is not assignable to type 'string'.



// strictNullChecks

let value: string;

value = "abc123"; // 당연히 ok

value = null;
// strictNullChecks가 활성화된 경우 발생하는 오류
//~~~
// Error: Type 'null' is not assignable to type 'string'.



// useUnknownInCatchVariables

try {
    someExternalFunction();
} catch (error) {
    error: // 기본 타입: any
}



try {
    someExternalFunction();
} catch (error: unknown) {
    error; // 타입: unknown
}

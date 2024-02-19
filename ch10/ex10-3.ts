// 10.1.1 명시적 제네릭 호출 타입

function logWrapper<Input>(callback: (input: Input) => void) {
    return (input: Input) => {
	console.log("Input:", input);
	callback(input);
    };
}

// 타입: (input: string) => void
logWrapper((input: string) => {
    console.log(input.length);
});

// 타입: (input: unknown) => void
logWrapper((input) => {
    console.log(input.length);
    //          ~~~~~
    // Error: 'input' is of type 'unknown'.
});



// 타입: (input: string) => void
logWrapper<string>((input) => {
    console.log(input.length);
});

logWrapper<string>((input: boolean) => {
    //             ~~~~~~~~~~~~~~~~~~~~~
    // Error: Argument of type '(input: boolean) => void' is not
    // assignable to parameter of type '(input: string) => void'.
    //   Types of parameters 'input' and 'input' are incompatible.
    //     Type 'string' is not assignable to type 'boolean'.
});



// 타입: (input: string) => void
logWrapper<string>((input: string) => { /* ... */ });

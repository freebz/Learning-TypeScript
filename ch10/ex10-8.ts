// 10.3.1 명시적 제네릭 클래스 타입

class CurriedCallback<Input> {
    #callback: (input: Input) => void;

    constructor(callback: (input: Input) => void) {
	this.#callback = (input: Input) => {
	    console.log("Input:", input);
	    callback(input);
	};
    }

    call(input: Input) {
	this.#callback(input);
    }
}

// 타입: CurriedCallback<string>
new CurriedCallback((input: string) => {
    console.log(input.length);
});

// 타입: CurriedCallback<unknown>
new CurriedCallback((input) => {
    console.log(input.length);
    //          ~~~~~
    // Error: 'input' is of type 'unknown'.
});



// 타입: CurriedCallback<string>
new CurriedCallback<string>((input) => {
    console.log(input.length);
});

new CurriedCallback<string>((input: boolean) => {
    //                      ~~~~~~~~~~~~~~~~~~~~~
    // Error: Argument of type '(input: boolean) => void' is not
    // assignable to parameter of type '(input: string) => void'.
    //   Types of parameters 'input' and 'input' are incompatible.
    //     Type 'string' is not assignable to type 'boolean'.
});

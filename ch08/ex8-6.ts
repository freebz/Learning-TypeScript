// 6.2.4 읽기 전용 속성

class Quote {
    readonly text: string;

    constructor(text: string) {
	this.text = text;
    }

    emphasize() {
	this.text += "!";
	//   ~~~~
	// Error: Cannot assign to 'text' because it is a read-only property.
    }
}

const quote = new Quote(
    "There is a brilliant child locked inside every student."
);

quote.text = "Ha!";
//    ~~~~
// Error: Cannot assign to 'text' because it is a read-only property.



class RandomQuote {
    readonly explicit: string = "Home is the nicest word there is.";
    readonly implicit = "Home is the nicest word there is.";

    constructor() {
	if (Math.random () > 0.5) {
	    this.explicit = "We start learning the minute we're born."; // Ok

	    this.implicit = "We start learning the minute we're born.";
	    //~~~~~~~~~~~
	    // Error: Type '"We start learning the minute we're born."' is
	    // not assignable to type '"Home is the nicest word there is."'.
	}
    }
}

const quote = new RandomQuote();

quote.explicit; // 타입: string
quote.implicit; // 타입: "Home is the nicest word there is."

// 10.3.2 제네릭 클래스 확장

class Quote<T> {
    lines: T;

    constructor(lines: T) {
	this.lines = lines;
    }
}

class SpokenQuote extends Quote<string[]> {
    speak() {
	console.log(this.lines.join("\n"));
    }
}

new Quote("The only real failure is the failure to try.").lines; // 타입: string
new Quote([4, 8, 15, 16, 23, 42]).lines; // 타입: number[]

new SpokenQuote([
    "Greed is so destructive.",
    "It destroys everything",
]).lines; // 타입: string[]

new SpokenQuote([4, 8, 15, 16, 23, 42]);
//              ~~~~~~~~~~~~~~~~~~~~~~
// Error: Type 'number' is not assignable to type 'string'.



class AttributedQuote<Value> extends Quote<Value> {
    speaker: string

    constructor(value: Value, speaker: string) {
	super(value);
	this.speaker = speaker;
    }
}

// 타입: AttributedQuote<string>
// (Quote<string> 확장하기)
new AttributedQuote(
    "The road to success is always under construction.",
    "Lily Tomlin",
);

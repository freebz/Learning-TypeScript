// 10.7 Promise

// 10.7.1 Promise 생성

class PromiseLike<Value> {
    constructor(
	executor: (
	    resolve: (value: Value) => void,
	    reject: (reason: unknown) => void,
	) => void,
    ) { /* ... */ }
}



// 타입: Promise<unknown>
const resolvesUnknown = new Promise((resolve) => {
    setTimeout(() => resolve("Done!"), 1000);
});

// 타입: Promise<string>
const resolveString = new Promise<string>((resolve) => {
    setTimeout(() => resolve("Done!"), 1000);
});



// 타입: Promise<string>
const textEventually = new Promise<string>((resolve) => {
    setTimeout(() => resolve("Done!"), 1000);
});

// 타입: Promise<number>
const lengthEventually = textEventually.then((text) => text.length)

// 10.1 제네릭 함수

function identity<T>(input: T) {
    return input;
}

const numeric = identity("me"); // 타입: "me"
const stringy = identity(123); // 타입: 123



const identity = <T>(input: T) => input;

identity(123); // 타입: 123

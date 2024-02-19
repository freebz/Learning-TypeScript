// 10.1.2 다중 함수 타입 매개변수

function makeTuple<First, Second>(first: First, second: Second) {
    return [first, second] as const;
}

let tuple = makeTuple(true, "abc"); // value: readonly [boolean, string] 타입



function makePair<Key, Value>(key: Key, value: Value) {
    return { key, value };
}

// Ok: 타입 인수가 둘 다 제공되지 않음
makePair("abc", 123); // 타입: { key: string; value: number }

// Ok: 두 개의 타입 인수가 제공됨
makePair<string, number>("abc", 123); // 타입: { key: string; value: number }
makePair<"abc", 123>("abc", 123); // 타입: { key: "abc"; value: 123 }

makePair<string>("abc", 123);
//       ~~~~~~
// Error: Expected 2 type arguments, but got 1.

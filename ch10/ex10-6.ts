// 10.2.1 유추된 제네릭 인터페이스 타입

interface LinkedNode<Value> {
    next?: LinkedNode<Value>;
    value: Value
}

function getLast<Value>(node: LinkedNode<Value>): Value {
    return node.next ? getLast(node.next) : node.value;
}

// 유추된 Value 타입 인수: Date
let lastDate = getLast({
    value: new Date("09-13-1993"),
});

// 유추된 Value 타입 인수: string
let lastFruit = getLast({
    next: {
	value: "banana",
    },
    value: "apple",
});

// 유추된 Value 타입 인수: number
let lastMismatch = getLast({
    next: {
	value: 123
    },
    value: false,
//  ~~~~~
// Error: Type 'boolean' is not assignable to type 'number'.    
});



interface CrateLike<T> {
    contents: T;
}

let missingGeneric: CrateLike = {
    //              ~~~~~~~~~
    // Error: Generic type 'CrateLike<T>' requires 1 type argument(s).
    inside: "??"
};

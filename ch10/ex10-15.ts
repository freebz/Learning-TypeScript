// 10.5 제네릭 제한자

// 10.5.1 제네릭 기본값

interface Quote<T = string> {
    value: T;
}

let explicit: Quote<number> = { value: 123 };

let implicit: Quote = { value: "Be yourself. The world worships the original." };

let mismatch: Quote = { value: 123 };
//                      ~~~~~
// Error: Type 'number' is not assignable to type 'string'.



interface KeyValuePair<Key, Value = Key> {
    key: Key;
    value: Value;
}

// 타입: KeyValuePair<string, string>
let allExplicit: KeyValuePair<string, number> = {
    key: "rating",
    value: 10,
};

let firstMissing: KeyValuePair = {
    //            ~~~~~~~~~~~~
    // Error: Generic type 'KeyValuePair<Key, Value>'
    // requires between 1 and 2 type arguments.
    key: "rating",
    value: 10,
};



function inTheEnd<First, Second, Third = number, Fourth = string>() {} // Ok

function inTheMiddle<First, Second = boolean, Third = number, Fourth>() {}
//                                                            ~~~~~~
// Error: Required type parameters may not follow optional type parameters.

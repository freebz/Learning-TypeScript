// 10장 제네릭

function identity(input) {
    return input;
}

identity("abc");
identity(123);
identity({ quote: "I think your self emerges more clearly over time." });



function identity(input: any) {
    return input;
}

let value = identity(42); // value: any 타입

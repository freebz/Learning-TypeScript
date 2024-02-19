// 10.8 제네릭 올바르게 사용하기

// 10.8.1 제네릭 황금률

function logInput<Input extends string>(input: Input) {
    console.log("Hi!", input);
}



function logInput(input: string) {
    console.log("Hi!", input);
}

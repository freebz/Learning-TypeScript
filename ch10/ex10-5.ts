// 10.2 제네릭 인터페이스

interface Box<T> {
    inside: T;
}

let stringyBox: Box<string> = {
    inside: "abc",
};

let numberBox: Box<number> = {
    inside: 123,
}

let incorrectBox: Box<number> = {
    inside: false,
    //~~~~
    // Error: Type 'boolean' is not assignable to type 'number'.
}



interface Array<T> {
    // ...

    /**
     * 배열에서 마지막 요소를 제거하고 그 요소를 반환
     * 배열이 비어 있는 경우 undefined를 반환하고 배열은 수정되지 않음
     */
    pop(): T | undefined;

    /**
     * 배열의 끝에 새로운 요소를 추가하고 배열의 길이를 반환
     * @param items 배열에 추가된 새로운 요소
     */
    push(...items: T[]): number;

    // ...
}

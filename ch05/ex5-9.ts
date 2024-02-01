// 5.3.1 함수 타입 괄호

// 타입은 string | undefined 유니언을 반환하는 함수
let returnsStringOrUndefined: () => string | undefined;

// 타입은 undefined나 string을 반환하는 함수
let maybeReturnsString: (() => string) | undefined;

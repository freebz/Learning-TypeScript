// 3.5.1 타입 별칭은 자바스크립트가 아닙니다

let rawDataFirst;
let rawDataSecond;
let rawDataThird;



type SomeType = string | undefined;

console.log(SomeType);
//          ~~~~~~~~
// Error: 'SomeType' only refers to a type, but is being used as a value here.

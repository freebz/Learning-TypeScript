// 2.3 타입 애너테이션

let rocker: // 타입: any

rocker = "Joan Jett"; // 타입: string
rocker.toUpperCase(); // Ok

rocker = 19.58; // 타입: number
rocker.toPrecision(1); // Ok

rocker.toUpperCase();
//     ~~~~~~~~~~~
// Error: 'toUpperCase' does not exist on type 'number'.



let rocker: string;
rocker = "John Jett";



// 출력된 .js 파일
let rocker;
rocker = "John Jett";



let rocker: string;
rocker = 19.58;
//~~~~
// Error: Type 'number' is not assignable to type 'string'.

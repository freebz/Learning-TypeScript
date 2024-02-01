// 3.2.2 조건 검사를 통한 내로잉

// scientist: number | string의 타입
let scientist = Math.random() > 0.5
    ? "Rosalind Franklin"
    : 51;

if (scientist === "Rosalind Franklin") {
    // scientist: string의 타입
    scientist.toUpperCase(); // Ok
}

// scientist: number | string의 타입
scientist.toUpperCase();
//        ~~~~~~~~~~~
// Error: Property 'toUpperCase' does not exist on type 'string | number'.
//   Property 'toUpperCase' does not exist on type 'number'.

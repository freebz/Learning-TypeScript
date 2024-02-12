// 9.1 top 타입

// 9.1.1 any 다시 보기

let anyValue: any;
anyValue = "Lucille Ball"; // Ok
anyValue = 123; // Ok

console.log(anyValue); // Ok



function greetComedian(name: any) {
    // 타입 오류 없음
    console.log(`Announcing ${name.toUpperCase()}!`);
}

greetComedian({ name: "Bea Arthur" });
    // Runtime error: name.toUpperCase is not a function

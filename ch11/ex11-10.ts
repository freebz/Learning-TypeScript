// 11.5 패키지 타입

// 11.5.1 선언

// index.ts
export const greet = (text: string) => {
    console.log(`Hello, ${text}!`);
};



// index.d.ts
export declare const greet: (text: string) => void;



// index.js
export const greet = (text) => {
    console.log(`Hello, ${text}!`);
};

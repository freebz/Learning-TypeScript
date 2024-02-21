// 11.2.1 전역 변수

// globals.d.ts
declare const version: string;



// version.ts
export function logVersion() {
    console.log(`Version: ${version}`); // Ok
}

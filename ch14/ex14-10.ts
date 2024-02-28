// 14.4.3 타입 정의에서 네임스페이스

// node_modules/@types/my-example-lib/index.d.ts
export const value: number;
export as namespace libExample;



// src/index.ts
import * as libExample from "my-example-lib"; // Ok
const value = window.libExample.value; // Ok

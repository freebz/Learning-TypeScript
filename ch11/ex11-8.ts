// 11.4 모듈 선언

// modules.d.ts
declare module "my-example-lib" {
    export const value: string;
}



// index.ts
import { value } from "my-example-lib";

console.log(value); // Ok

// 14.4.4 네임스페이스보다 모듈을 선호함

// settings/constants.ts
export const name = "My Application";
export const version = "1.2.3";



// settings/describe.ts
import { name, version } from "./constants";

export function describe() {
    return `${Settings.name} at version ${Settings.version}`;
}

console.log("Initializing", describe());



// index.ts
import { describe } from "./settings/describe";

console.log("Initialized", describe());

// 11.2.3 전역 확장

// types.d.ts
// (모듈 컨텍스트)

declare global {
    // (전역 컨텍스트)
}

// (모듈 컨텍스트)



// types/data.d.ts
export interface Data {
    version: string;
}



// types/globals.d.ts
import { Data } from "./data";

declare global {
    const globallyDeclared: Data;
}

declare const locallyDeclared: Data;



// index.ts
import { Data } from "./types/data/";

function logData(data: Data) { // Ok
    console.log(`Data version is: ${data.version}`);
}

logData(globallyDeclared); // Ok

logData(locallyDeclared);
//      ~~~~~~~~~~~~~~~
// Error: Cannot find name 'locallyDeclared'.

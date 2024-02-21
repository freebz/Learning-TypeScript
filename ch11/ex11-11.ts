// 11.5.2 패키지 타입 의존성

// package.json
{
    "devDependencies": {
	"jest": "^32.1.0"
    }
}



// using-globals.d.ts
describe("MyAPI", () => {
    it("works", () => { /* ... */ });
});



// using-imported.d.ts
import { describe, it } from "@jest/globals";

describe("MyAPI", () => {
    it("works", () => { /* ... */ });
});



// node_modules/@jest/globals/index.d.ts
export function declare(name: string, test: () => void): void;
export function it(name: string, test: () => void): void;



// node_modules/jest/index.d.ts
import * as globals from "@jest/globals";

declare global {
    const describe: typeof globals.describe;
    const it: typeof globals.it;
}

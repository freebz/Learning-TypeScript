// 14.5 타입 전용 가져오기와 내보내기

// index.ts
const action = { area: "people", name: "Bella Abzug", role: "politician" };

type ActivistArea = "nature" | "people";

export { action, ActivistArea };



// index.js
const action = { area: "people", name: "Bella Abzug", role: "politician" };

export { action };



// index.ts
import { type TypeOne, value } from "my-example-types";
import type { TypeTwo } from "my-example-types";
import type DefaultType from "my-example-types";

export { type TypeOne, value };
export type { DefaultType, TypeTwo };



// index.js
import { value } from "my-example-types";

export { value };



import { ClassOne, type ClassTwo } from "my-example-types";

new ClassOne(); // Ok

new ClassTwo();
//  ~~~~~~~~
// Error: 'ClassTwo' cannot be used as a value because it was imported using
// 'import type'.

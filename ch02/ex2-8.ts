// 2.4.1 모듈

import { value } from "./values";

export const doubled = value * 2;



// a.ts
export const shared = "Cher";



// b.ts
export const shared = "Cher";



// c.ts
import { shared } from "./a";
//       ~~~~~~
// Error: Import declaration conflicts with local declaration of 'shared'.

export const shared = "Cher";
//           ~~~~~~
// Error: Individual declarations in merged declaration
// 'shared' must be all exported or all local.



// a.ts
const shared = "Cher";
//    ~~~~~~
// Error: Cannot redeclare block-scoped variable 'shared'.



// b.ts
const shared = "Cher";
//    ~~~~~~
// Error: Cannot redeclare block-scoped variable 'shared'.



// ats and b.ts
const shared = "Cher"; // Ok

export {};

// 13.8 자바스크립트

// 13.8.1 allowJs

// index.ts
import { value } from "./values";

console.log(`Quote: '${value.toUpperCase()}'`);



// values.js
export const value = "We cannot succeed when half of us are held back.";



{
  "compilerOptions": {
    "allowJs": true
  }
}

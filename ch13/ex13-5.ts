// 13.4.2 resolveJsonModule

// activist.json
{
    "activist": "Mary Astell"
}



// useActivist.ts
import { activist } from "./activist.json";

// Logs: "Mary Astell"
console.log(activist);



// useActivist.ts
import data from "./activist.json";



// activists.json
[
    "Ida B. Wells",
    "Sojourner Truth",
    "Tawakkul Karmân"
]



// useActivists.ts
import * as activists from "./activists.json";

// Logs: "3 activists"
console.log(`${activists.length} activists`);

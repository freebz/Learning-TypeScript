// 11.1 선언 파일

// types.d.ts
export interface Character {
    catchphrase?: string;
    name: string;
}



// index.ts
import { Character } from "./types";

export const character: Character = {
    catchphrase: "Yee-haw!",
    name: "Sandy Cheeks",
};

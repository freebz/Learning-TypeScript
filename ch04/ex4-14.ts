// 4.4.1 교차 타입의 위험성

// 긴 할당 가능성 오류

type ShortPoemBase = { author: string };
type Haiku = ShortPoemBase & { kogo: string; type: "haiku" };
type Villanelle = ShortPoemBase & { meter: number; type: "villanelle" };
type ShortPoem = Haiku | Villanelle;

const oneArt: ShortPoem = {
    //~~~~~~
    // Error: Type '{ author: string; type: "villanelle"; }'
    // is not assignable to type 'ShortPoem'.
    //   Type '{ author: string; type: "villanelle"; }' is not assignable to type
    //   'Villanelle'.
    //   Property 'meter' is missing in type '{ author: string; type:
    //     "villanelle"; }'
    //     but required in type '{ meter: number; type: "villanelle"; }'.
    author: "Elizabeth Bishop",
    type: "villanelle",
};



// never

type NotPossible = number & string; // 타입: never



let notNumber: NotPossible = 0;
//  ~~~~~~~~~
// Error: Type 'number' is not assignable to type 'never'.

let notString: never = "";
//  ~~~~~~~~~
// Error: Type 'string' is not assignable to type 'never'.

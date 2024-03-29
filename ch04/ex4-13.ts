// 4.4 교차 타입

type Artwork = {
    genre: string;
    name: string;
};

type Writing = {
    pages: number;
    name: string;
};

type WrittenArt = Artwork & Writing;
// 다음과 같음:
// {
//     genre: string;
//     name: string;
//     pages: number;
// }



type ShortPoem = { author: string } & (
    | { kigo: string; type: "haiku"; }
    | { meter: number; type: "villanelle"; }
);

// Ok
const morningGlory: ShortPoem = {
    author: "Fukuda Chiyo-ni",
    kigo: "Morning Glory",
    type: "kaiku",
};

const oneArt: ShortPoem = {
    //~~~~~~
    // Error: Type '{ author: string; type: "villanelle"; }'
    // is not assignable to type 'ShortPoem'.
    //   Type '{ author: string; type: "villanelle"; }' is not assignable to
    //   type '{ author: string; } & { meter: number; type: "villanelle"; }'.
    //     Property 'meter' is missing in type '{ author: string; type:
    //     "villanelle"; }'
    //     but required in type '{ meter: number; type: "villanelle"; }'.
    author: "Elizabeth Bishop",
    type: "villanelle",
};

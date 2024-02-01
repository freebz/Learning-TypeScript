// 4.3 객체 타입 유니언

// 4.3.1 유추된 객체 타입 유니언

const poem = Math.random() > 0.5
    ? { name: "The Double Imange", pages: 7 }
    : { name: "Her Kind", rhymes: true };
// 타입:
// {
//     name: string;
//     pages: number;
//     rhymes?: undefined;
// }
// |
// {
//     name: string;
//     pages?: undefined;
//     rhymes: boolean;
// }

poem.name; // string
poem.pages; // number | undefined
poem.rhymes; // booleans | undefined

// 7.3 인터페이스 확장

interface Writing {
    title: string;
}

interface Novella extends Writing {
    pages: number;
}

// Ok
let myNovella: Novella = {
    pages: 195,
    title: "Ethan From",
};

let missingPages: Novella = {
    //~~~~~~~~~~
    // Error: Property 'pages' is missing in type '{ title: string; }' but
    // required in type 'Novella'.
    title: "The Awakening",
}

let extraProperty: Novella = {
    pages: 300,
    strategy: "baseline",
    //~~~~~~
    // Error: Object literal may only specify known properties,
    //   and 'strategy' does not exist in type 'Novella'.
    style: "Naturalism"
}

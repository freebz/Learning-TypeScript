// 4.2.1 사용 검사

type FirstAndLastNames = {
    first: string;
    last: string;
};

// Ok
const hasBoth: FirstAndLastNames = {
    first: "Sarojini",
    last: "Naidu",
}

const hasOnlyOne: FirstAndLastNames = {
    //~~~~~~~~~~
    // Error: Property 'last' is missing in type '{ first: string; }'
    // but required in type 'FirstAndLastNames'.
    first: "Sappho"
};



type TimeRange = {
    start: Date;
};

const hasStartString: TimeRange = {
    start: "1879-02-13",
    //~~~
    // Error: Type 'string' is not assignable to type 'Date'.
};

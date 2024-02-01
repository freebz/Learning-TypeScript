// 4.2.4 선택적 속성

type Book = {
    author?: string;
    pages: number;
};

// Ok
const ok: Book = {
    author: "Rita Dove",
    pages: 80,
};

const missing: Book = {
    //~~~~~~~
    // Error: Property 'pages' is missing in type
    // '{ pages: number; }' but required in type 'Book'.
    author: "Rita Dove",
};



type Writers = {
    author: string | undefined;
    editor?: string;
};

// Ok: author는 undefined으로 제공됨
const hasRequired: Writers = {
    author: undefined,
};

const missingRequired: Writers = {};
//    ~~~~~~~~~~~~~~~
// Error: Property 'author' is missing in type '{}' but required in type 'Writers'.

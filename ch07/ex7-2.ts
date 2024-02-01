// 7.2 속성 타입

// 7.2.1 선택적 속성

interface Book {
    author?: string;
    pages: number;
};

// Ok
const ok: Book = {
    author: "Rita Dove",
    pages: 80,
};

const missing: Book = {
    pages: 80
};

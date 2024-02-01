// 4.2.3 중첩된 객체 타입

type Poem = {
    author: {
	firstName: string;
	lastName: string;
    };
    name: string;
};

// Ok
const poemMatch: Poem = {
    author: {
	firstName: "Sylvia",
	lastName: "Plath",
    },
    name: "Lady Lazarus",
};

const poemMismatch: Poem = {
    author: {
	name: "Sylvia Plath",
	//~~~~~~~~~~~~~~~~~~
	// Error: Type '{ name: string; }' is not assignable
	// to type '{ firstName: string; lastName: string; }'.
	//   Object literal may only specify known properties, and 'name'
	//   does not exist in type '{ firstName: string; lastName: string; }'.
    },
    name: "Tulips",
};



type Author = {
    firstName: string;
    lastName: string;
};

type Poem = {
    author: Author;
    name: string;
};

const poemMismatch: Poem = {
    author: {
	name: "Sylvia Plath",
	//~~~~~~~~~~~~~~~~~~
	// Error: Type '{ name: string; }' is not assignable to type 'Author'.
	//   Object literal may only specify known properties,
	//   and 'name' does not exist in type 'Author'.
    },
    name: "Tulips",
};

// 4.2 구조적 타이핑

type WithFirstName = {
    firstName: string;
};

type WithLastName = {
    lastName: string;
};

const hasBoth = {
    firstName: "Lucille",
    lastName: "Clifton",
};

// Ok: 'hasBoth'는 'string' 타입의 'firstName'을 포함함
let withFirstName: WithFirstName = hasBoth;

// Ok: 'hasBoth'는 'string' 타입의 'lastName'을 포함함
let withLastName: WithLastName = hasBoth;

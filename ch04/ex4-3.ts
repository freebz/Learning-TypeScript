// 4.1.2 별칭 객체 타입

type Poet = {
    born: number;
    name: string;
};

let poetLater: Poet;

// Ok
poetLater = {
    born: 1935,
    name: "Sara Teasdale",
};

poetLater = "Emily Dickinson";
//~~~~~~~
// Error: Type 'string' is not assignable to 'Poet'.

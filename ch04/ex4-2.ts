// 4.1.1 객체 타입 선언

let poetLater: {
    born: number;
    name: string;
};

// Ok
poetLater = {
    born: 1935,
    name: "Mary Oliver",
};

poetLater = "Sappho";
//~~~~~~~
// Error: Type: 'string' is not assignable to type '{ born: number; name: string; }'

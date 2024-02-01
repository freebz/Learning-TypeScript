// 4.2.2 초과 속성 검사

type Poet = {
    born: number;
    name: string;
}

// Ok: Poet의 필드와 일치함
const poetMatch: Poet = {
    born: 1928,
    name: "Maya Angelou"
};

const extraProperty: Poet = {
    activity: "walking",
    //~~~~~~~~~~~~~~~~~
    // Error: Type '{ activity: string; born: number; name: string; }'
    // is not assignable to type 'Poet'.
    //   Object literal may only specify known properties,
    //   and 'activity' does not exist in type 'Poet'.
    born: 1935,
    name: "Mary Oliver",
};



const existingObject = {
    activity: "walking",
    born: 1935,
    name: "Mary Oliver",
};

const extraPropertyButOk: Poet = existingObject; // Ok

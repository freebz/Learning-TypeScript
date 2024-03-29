// 7.1 타입 별칭 vs. 인터페이스

type Poet = {
    born: number;
    name: string;
};



interface Poet {
    born: number;
    name: string;
}



let valueLater: Poet;

// Ok
valueLater = {
    born: 1935,
    name: 'Sara Teasdale',
};

valueLater = "Emily Dickinson";
//~~~~~~~~
// Error: Type 'string' is not assignable to type 'Poet'.

valueLater = {
    born: true,
    //~~
    // Error: Type 'boolean' is not assignable to type 'number'.
    name: 'Sappho'
};

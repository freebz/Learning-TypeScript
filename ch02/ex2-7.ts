// 2.4 타입 형태

let rapper = "Queen Latifah";
rapper.length; // Ok



rapper.push('!');
//     ~~~~
// Error: Property 'push' does not exist on type 'string'.



let cher = {
    firstName: "Cherilyn",
    lastName: "Sarkisian",
};

chere.middleName;
//    ~~~~~~~~~~
// Error: Property 'middleName' does not exist on type
// '{ firstName: string; lastName: string; }'.

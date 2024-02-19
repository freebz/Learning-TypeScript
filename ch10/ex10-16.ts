// 10.6 제한된 제네릭 타입

interface WithLength {
    length: number;
}

function logWithLength<T extends WithLength>(input: T) {
    console.log(`Length: ${input.length}`);
    return input;
}

logWithLength("No one can figure out your worth but you."); // 타입: string
logWithLength([false, true]); // 타입: boolean[]
logWithLength({ length: 123 }); // 타입: { length: number }

logWithLength(new Date());
//            ~~~~~~~~~~
// Error: Argument of type 'Date' is not assignable to parameter of type 'WithLength'.
//   Property 'length' is missing in type 'Date' but required in type 'WithLength'.

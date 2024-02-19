// 10.4 제네릭 타입 별칭

type Nullish<T> = T | null | undefined;



type CreatesValue<Input, Output> = (input: Input) => Output;

// 타입: (input: string) => number
let creator: CreatesValue<string, number>;

creator = text => text.length; // Ok

creator = text => text.toUpperCase();
//                ~~~~~~~~~~~~~~~~~~
// Error: Type 'string' is not assignable to type 'number'.

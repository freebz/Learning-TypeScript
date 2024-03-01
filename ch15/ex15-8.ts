// 15.2.3 유추된 타입

type ArrayItems<T> =
    T extends (infer Item)[]
        ? Item
        : T;

// 타입: string
type StringItem = ArrayItems<string>;

// 타입: string
type StringArrayItem = ArrayItems<string[]>;

// 타입: string
type String2DItem = ArrayItems<string[][]>;



type ArrayItemsRecursive<T> =
    T extends (infer Item)[]
        ? ArrayItemsRecursive<Item>
        : T;

// 타입: string
type StringItem = ArrayItemsRecursive<string>;

// 타입: string
type StringArrayItem = ArrayItemsRecursive<string[]>;

// 타입: string
type String2DItem = ArrayItemsRecursive<string[][]>;

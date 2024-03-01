// 15.2.1 제네릭 조건부 타입

type CheckAgainstNumber<T> = T extends number ? true : false;

// 타입: false
type CheckString = CheckAgainstNumber<'parakeet'>;

// 타입: true
type CheckString = CheckAgainstNumber<1891>;

// 타입: true
type CheckString = CheckAgainstNumber<number>;



type CallableSetting<T> =
    T extends () => any
        ? T
        : () => T

// 타입: () => number[]
type GetNumberSetting = CallableSetting<() => number[]>;

// 타입: () => string
type StringSetting = CallableSetting<string>;



interface QueryOptions {
    throwIfNotFound: boolean;
}

type QueryResult<Options extends QueryOptions> =
    Options["throwIfNotFound"] extends true ? string : string | undefined;

declare function retrieve<Options extends QueryOptions>(
    key: string,
    options?: Options,
): Promise<QueryResult<Options>>;

// 반환된 타입: string | undefined
await retrieve("Birutè Galdikas");

// 반환된 타입: string | undefined
await retrieve("Jane Goodall", { throwIfNotFound: Math.random() > 0.5 });

// 반환된 타입: string
await retrieve("Dian Fossey", { throwIfNotFound: true });

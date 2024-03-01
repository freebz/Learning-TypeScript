// 15.4.3 매핑된 타입 키 다시 매핑하기

interface DataEntry<T> {
    key: T;
    value: string;
}

type DataKey = "location" | "name" | "year";

type DataEntryGetters = {
    [K in DataKey as `get${Capitalize<K>}`]: () => DataEntry<K>;
};
// 다음과 같음:
// {
//     getLocation: () => DataEntry<"location">;
//     getName: () => DataEntry<"name">;
//     getYear: () => DataEntry<"year">;
// }



const config = {
    location: "unknown",
    name: "anonymous",
    year: 0,
};

type LazyValues = {
    [K in keyof typeof config as `${K}Lazy`]: () => Promise<typeof config[K]>;
};
// 다음과 같음:
// {
//     location: Promise<string>;
//     name: Promise<string>;
//     year: Promise<number>;
// }

async function withLazyValues(configGetter: LazyValues) {
    await configGetter.locationLazy; // 결과 타입: string

    await configGetter.missingLazy();
    //                 ~~~~~~~~~~~
    // Error: Property 'missingLazy' does not exist on type 'LazyValues'.
};



type TurnIntoGettersDirect<T> = {
    [K in keyof T as `get${K}`]: () => T[K]
    //                     ~
    // Error: Type 'K' is not assignable to type
    // 'string | number | bigint | boolean | null | undefined'.
    //   Type 'keyof T' is not assignable to type
    //   'string | number | bigint | boolean | null | undefined'.
    //     Type 'string | number | symbol' is not assignable to type
    //     'string | number | bigint | boolean | null | undefined'.
    //       Type 'symbol' is not assignable to type
    //       'string | number | bigint | boolean | null | undefined'.
};



const someSymbol = Symbol("");

interface HasStringAndSymbol {
    StringKey: string;
    [someSymbol]: number;
}

type TurnIntoGetters<T> = {
    [K in keyof T as `get${string & K}`]: () => T[K]
};

type GettersJustString = TurnIntoGetters<HasStringAndSymbol>;
// 다음과 같음:
// {
//     getStringKey: () => string;
// }

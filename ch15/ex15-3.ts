// 15.1.2 제한자 변경

interface Environmentalist {
    area: string;
    name: string;
}

type ReadonlyEnvironmentalist = {
    readonly [K in keyof Envorionmentalist]: Environmentalist[K];
};
// 다음과 같음:
// {
//     readonly area: string;
//     readonly name: string;
// }

type OptionalReadonlyEnvironmentalist = {
    [K in keyof ReadonlyEnvironmentalist]?: ReadonlyEnvironmentalist[K];
};
// 다음과 같음:
// {
//     readonly area?: string;
//     readonly name?: string;
// }



interface Conservationist {
    name: string;
    catchphrase?: string;
    readonly born: number;
    readonly died?: number;
}

type WritableConservationist = {
    -readonly [K in keyof Conservationist]: Conservationist[K];
};
// 다음과 같음:
// {
//     name: string;
//     catchphrase?: string;
//     born: number;
//     died?: number;
// }

type RequiredWritableConservationist = {
    [K in keyof WritableConservationist]-?: WritableConservationist[K];
};
// 다음과 같음:
// {
//     name: string;
//     catchphrase: string;
//     born: number;
//     died: number;
// }

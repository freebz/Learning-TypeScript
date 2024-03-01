// 15.3.2 never와 조건부 타입

type OnlyStrings<T> = T extends string ? T : never;

type RedOrBlue = OnlyStrings<"red" | "blue" | 0 | false>;
// 다음과 같음: "red" | "blue"



type FirstParameter<T extends (...args: any[]) => any> =
    T extends (arg: infer Arg) => any
        ? Arg
        : never;

type GetsString = FirstParameter<
    (arg0: string) => void
>); // 타입: string

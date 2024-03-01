// 15.2.2 타입 분산

type ArrayifyUnlessString<T> = T extends string ? T : T[];

// 타입: string | number[]
type HalfArrayified = ArrayifyUnlessString<string | number>;

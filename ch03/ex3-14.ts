// 3.5.2 타입 별칭 결합

type Id = number | string;

// IdMaybe 타입은 다음과 같음: number | string | undefined | null
type IdMaybe = Id | undefined | null;



type IdMaybe = Id | undefined | null; // Ok
type Id = number | string;

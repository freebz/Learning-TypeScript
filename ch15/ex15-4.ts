// 15.1.3 제네릭 매핑된 타입

type MakeReadonly<T> = {
    readonly [K in keyof T]: T[K];
}

interface Species {
    genus: string;
    name: string;
}

type ReadonlySpecies = MakeReadonly<Species>;
// 다음과 같음:
// {
//     readonly genus: string;
//     readonly name: string;
// }



interface GenusData {
    family: string;
    name: string;
}

type MakeOptional<T> = {
    [K in keyof T]?: T[K];
}
// 다음과 같음:
// {
//     family?: string;
//     name?: string;
// }

/**
 * GenusData의 기본값 위에 모든 {overrides}를 구조 분해 할당합니다.
 */
function createGenusData(overrides?: MakeOptional<GenusData>): GenusData {
    return {
	family: 'unknown',
	name: 'unknown',
	...overrides,
    }
}

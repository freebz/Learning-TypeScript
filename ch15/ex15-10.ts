// 15.3 never

// 15.3.1 never와 교차, 유니언 타입

type NeverIntersection = never ? string; // 타입: never
type NeverUnion = never | string; // 타입: string

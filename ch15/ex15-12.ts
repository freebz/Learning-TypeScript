// 15.3.3 never와 매핑된 타입

type OnlyStringProperties<T> = {
    [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

interface AllEventData {
    participants: string[];
    location: string;
    name: string;
    year: number;
}

interface OnlyStringEventData = OnlyStringProperties<AllEventData>;
// 다음과 같음: "location" | "name"

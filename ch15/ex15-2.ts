// 15.1.1 타입에서 매핑된 타입

interface AnimalVariants {
    alligator: boolean;
    baboon: number;
    cat: string;
}

type AnimalCounts = {
    [K in keyof AnimalVariants]: number;
};
// 다음과 같음:
// {
//     alligator: number;
//     baboon: number;
//     cat: number;
// }



interface BirdVariants {
    dove: string;
    eagle: boolean;
}

type NullableBirdVariants = {
    [K in keyof BirdVariants]: BirdVariants[K] | null,
};
// 다음과 같음:
// {
//     dove: string | null;
//     eagle: boolean | null;
// }



// 매핑된 타입과 시그니처

interface Researcher {
    researchMethod(): void;
    researchProperty: () => string;
}

type JustProperties<T> = {
    [K in keyof T]: T[K];
};

type ResearchProperties = JustProperties<Researcher>;
// 다음과 같음:
// {
//     researchMethod: () => void;
//     researchProperty: () => string;
// }

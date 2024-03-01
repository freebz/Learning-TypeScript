// 15.1 매핑된 타입

type NewType = {
    [K in OriginalType]: NewProperty;
};



type Animals = "alligator" | "baboon" | "cat";

type AnimalCounts = {
    [K in Animals]: number;
};
// 다음과 같음:
// {
//     alligator: number;
//     baboon: number;
//     cat: number;
// }

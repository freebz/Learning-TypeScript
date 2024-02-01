// 7.3.2 다중 인터페이스 확장

interface GivesNumber {
    giveNumber(): number;
}

interface GivesString {
    giveString(): string;
}

interface GivesBothAndEither extends GivesNumber, GivesString {
    giveEither(): number | string;
}

function useGivesBoth(instance: GivesBothAndEither) {
    instance.giveEither(); // 타입: number | string
    instance.giveNumber(); // 타입: number
    instance.giveString(); // 타입: string
}

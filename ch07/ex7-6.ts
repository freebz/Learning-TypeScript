// 7.2.5 인덱스 시그니처

interface WordCounts {
    [i: string]: number;
}

const counts: WordCounts = {};

counts.apple = 0; // Ok
counts.banana = 1; // Ok

counts.cherry = false;
//~~~~~~~~~~~
// Error: Type 'boolean' is not assignable to type 'number'.



interface DatesByName {
    [i: string]: Date;
}

const publishDates: DatesByName = {
    Frankenstein: new Date("1 January 1818"),
};

publishDates.Frankenstein; // 타입: Date
console.log(publishDates.Frankenstein.toString()); // Ok

publishDates.Beloved; // 타입은 Date이지만 런타임 값은 undefined
console.log(publishDates.Beloved.toString());
// 타입 시스템에서는 오류가 나지 않지만 실제 런타임에서는 오류가 발생함
// Runtime error: Cannot read property 'toString'
// of undefined (reading publishDates.Beloved)



// 속성과 인덱스 시그니처 혼합

interface HistoricalNovels {
    Oroonoko: number;
    [i: string]: number;
}

// Ok
const novels: HistoricalNovels = {
    Outlander: 1991,
    Oroonoko: 1688,
};

const missingOroonoko: HistoricalNovels = {
    //~~~~~~~~~~~~~~~
    // Error: Property 'Oroonoko' is missing in type
    // '{ Outlander: number; }' but required in type 'HistoricalNovels'.
    Outlander: 1991,
};



interface ChapterStarts {
    preface: 0;
    [i: string]: number;
}

const correctPreface: ChapterStarts = {
    preface: 0,
    night: 1,
    shopping: 5
};

const wrongPreface: ChapterStarts = {
    preface: 1,
    //~~~~~
    // Error: Type '1' is not assignable to type '0'.

};



// 숫자 인덱스 시그니처

// Ok
interface MoreNarrowNumbers {
    [i: number]: string;
    [i: string]: string | undefined;
}

// Ok
const mixesNumbersAndStrings: MoreNarrowNumbers = {
    0: '',
    key1: '',
    key2: undefined,
}

interface MoreNarrowStrings {
    [i: number]: string | undefined;
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Error: 'number' index type 'string | undefined'
    // is not assignable to 'string' index type 'string'.
    [i: string]: string;
}

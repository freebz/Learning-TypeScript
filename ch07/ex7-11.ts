// 7.4 인터페이스 병합

interface Merged {
    fromFirst: string;
}

interface Merged {
    fromSecond: number;
}

// 다음과 같음:
// interface Merged {
//     fromFirst: string;
//     fromSecond: number;
// }



interface Window {
    myEnvironmentVariable: string;
}

window.myEnvironmentVariable; // 타입: string

// 11.3 내장된 선언

// 11.3.1 라이브러리 선언

// lib.es5.d.ts

interface Array<T> {
    /**
     * 배열의 길이를 가져오거나 설정합니다.
     * 배열의 가장 큰 인덱스보다 1이 더 큰 숫자입니다.
     */
    length: number;

    // ...
}



// 라이브러리 target

// lib.es2015.d.ts

interface NumberConstructor {
    /**
     * Number.EPSILON의 값은 1과 Number 값으로 나타낼 수 있는
     * 1보다 큰 가장 작은 값의 차이로 대략 다음과 같습니다.
     * 2.2204460492503130808472633361816 ㅌ 10-16.
     */
    readonly EPSILON: number;

    /**
     * 전달된 값이 유한한 경우 true를 반환합니다.
     * 전역 isFinite와 달리, Number.isFinite는 강제로 매개변수를 숫자로 변환하지
     * 않습니다. number 타입의 유한한(finite) 값만 true가 됩니다.
     * @param number는 숫자형 값입니다.
     */
    isFinite(number: unknown): boolean;

    // ...
}

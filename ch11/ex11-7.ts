// 11.3.2 DOM 선언

// lib.dom.d.ts

interface Storage {
    /**
     * 키/값 쌍의 수를 반환합니다.
     */
    readonly length: number;

    /**
     * 모든 키/값 쌍을 제거합니다.
     */
    clear(): void;

    /**
     * 주어진 키에 연결된 현잿값을 반환하거나
     * 주어진 키가 존재하지 않는 경우 null을 반환합니다.
     */
    getItem(key: string): string | null;

    // ...
}

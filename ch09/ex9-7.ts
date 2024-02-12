// 9.4.1 포착된 오류 타입 어서션

try {
    // (오류를 발생시키는 코드)
} catch (error) {
    console.warn("Oh no!", (error as Error).message);
}



try {
    // (오류를 발생시키는 코드)
} catch (error) {
    console.warn("Oh no!", error instanceof Error ? error.message : error);
}

// 5.5.1 호출 시그니처 호환성

function format(data: string): string; // Ok
function format(data: string, needle: string, haystack: string): string; // Ok

function format(getData: () => string): string;
//       ~~~~~~
// Error: This overload signature is not compatible with its implementation
// signature.

function format(data: string, needle?: string, haystack?: string) {
    return needle && haystack ? data.replace(needle, haystack) : data;
}

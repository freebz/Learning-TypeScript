// 13.8.3 JSDoc 지원

// index.js

/**
 * @param {string} text
 */
function sentenceCase(text) {
    return `${text[0].toUpperCase()} ${text.slice(1)}.`;
}

sentenceCase("hello world"); // Ok

sentenceCase(["hello", "world"]);
//           ~~~~~~~~~~~~~~~~~~
// Error: Argument of type 'string[]' is not assignable to parameter of type 'string'.

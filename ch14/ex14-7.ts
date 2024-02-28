// 14.4 네임스페이스

namespace Randomized {
    const value = Math.random();
    console.log(`My value is ${value}`);
}



var Randomized;
(function (Randomized) {
    const value = Math.random();
    console.log(`My value is ${value}`);
})(Randomized || (Randomized = {}));

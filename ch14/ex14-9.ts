// 14.4.2 중첩된 네임스페이스

namespace Root.Nested {
    export const value1 = true;
}

namespace Root {
    export namespace Nested {
	export const value2 = true;
    }
}



(function (Root) {
    let Nested;
    (function (Nested) {
	Nested.value2 = true;
    })(Nested || (Nested = {}));
})(Root || (Root = {}));

// 7.2.3 함수와 메서드

interface HasBothFunctionTypes {
    property: () => string;
    method(): string;
}

const hasBoth: HasBothFunctionTypes = {
    property: () => "",
    method() {
	return "";
    }
};

hasBoth.property(); // Ok
hasBoth.method(); // Ok



interface OptionalReadonlyFunctions {
    opotionalProperty?: () => string;
    optiionalMethod?(): string;
}

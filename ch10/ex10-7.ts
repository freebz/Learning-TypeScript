// 10.3 제네릭 클래스

class Secret<Key, Value> {
    key: Key;
    value: Value;

    constructor(key: Key, value: Value) {
	this.key = key;
	this.value = value;
    }

    getValue(key: Key): Value | undefined {
	return this.key === key
	    ? this.value
	    : undefined
    }
}

const storage = new Secret(12345, "luggage"); // 타입: Secret<number, string>

storage.getValue(1987); // 타입: string | undefined

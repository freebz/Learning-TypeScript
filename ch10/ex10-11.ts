// 10.3.4 메서드 제네릭

class CreatePairFactory<Key> {
    key: Key;

    constructor(key: Key) {
	this.key = key;
    }

    createPair<Value>(value: Value) {
	return { key: this.key, value }
    }
}

// 타입: CreatePairFactory<string>
const factory = new CreatePairFactory("role");

// 타입: { key: string, value: number }
const numberPair = factory.createPair(10);

// 타입: { key: string, value: string }
const stringPair = factory.createPair("Sophie");

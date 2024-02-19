// 10.3.5 정적 클래스 제네릭

class BothLogger<OnInstance> {
    instanceLog(value: OnInstance) {
	console.log(value);
	return value;
    }

    static staticLog<OnStatic>(value: OnStatic) {
	let fromInstance: OnInstance;
	//                ~~~~~~~~~~
	// Error: Static members cannot reference class type parameters.

	console.log(value);
	return value;
    }
}

const logger = new BothLogger<number[]>;
logger.instanceLog([1, 2, 3]); // 타입: number[]

// 유추된 OnStatic 타입 인수: boolean[]
BothLogger.staticLog([false, true]);

// 유추된 OnStatic 타입 인수: string
BothLogger.staticLog("You can't change the music of your soul.");

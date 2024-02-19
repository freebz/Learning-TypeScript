// 10.4.1 제네릭 판별된 유니언

type Result<Data> = FailureResult | SuccessfulResult<Data>;

interface FailureResult {
    error: Error;
    succeeded: false;
}

interface SuccessfulResult<Data> {
    data: Data;
    succeeded: true;
}

function handleResult(result: Result<string>) {
    if (result.succeeded) {
	// result: SuccessfulResult<string>의 타입
	console.log(`We did it! ${result.data}`);
    } else {
	// result: FailureResult의 타입
	console.error(`Awww... ${result.error}`);
    }

    result.data;
    //     ~~~~
    // Error: Property 'data' does not exist on type 'Result<string>'.
    //   Property 'data' does not exist on type 'FailureResult'.
}

// 9.2 타입 서술어

function isNumberOrString(value: unknown) {
    return ['number', 'string'].includes(typeof value);
}

function logValueIfExists(value: number | string | null | undefined) {
    if (isNumberOrString(value)) {
	// value: number | string | null | undefined의 타입
	value.toString();
	//~~~
	// Error: 'value' is possibly 'null' or 'undefined'.
    } else {
	console.log("value does not exists:", value);
    }
}



function typePredicate(input: WideType): input is NarrowType;



function isNumberOrString(value: unknown): value is number | string {
    return ['number', 'string'].includes(typeof value);
}

function logValueIfExists(value: number | string | null | undefined) {
    if (isNumberOrString(value)) {
	// value: number | string의 타입
	value.toString(); // Ok
    } else {
	// value: null | undefined의 타입
	console.log("value does not exist:", value);
    }
}



interface Comedian {
    funny: boolean;
}

interface StandupComedian extends Comedian {
    routine: string;
}

function isStandupComedian(value: Comedian): value is StandupComedian {
    return 'routine' in value;
}

function workWithComedian(value: Comedian) {
    if (isStandupComedian(value)) {
	// value: StandupComedian의 타입
	console.log(value.routine); // Ok
    }

    // value: Comedian의 타입
    console.log(value.routine);
    //                ~~~~~~~
    // Error: Property 'routine' does not exist on type 'Comedian'.
}



function isLongString(input: string | undefined): input is string {
    return !!(input && input.length >= 7);
}

function workWithText(text: string | undefined) {
    if (isLongString(text)) {
	// text: string의 타입
	console.log("Long text:", text.length);
    } else {
	// text: undefined의 타입
	console.log("Short text:", text?.length);
	//                               ~~~~~~
	// Error: Property 'length' does not exist on type 'never'.
    }
}

// 5.4 그 외 반환 타입

// 5.4.1 void 반환 타입

function logSong(song: string | undefined): void {
    if (!song) {
	return; // Ok
    }

    console.log(`${song}`);

    return true;
    //~~~~~~~~~~
    // Error: Type 'boolean' is not assignable to type 'void'.
}



let songLogger: (song: string) => void;

songLogger = (song) => {
    console.log(`${song}`);
};

songLogger("Heart of Glass"); // Ok



function returnVoid() {
    return;
}

let lazyValue: string | undefined;

lazyValue = returnVoid();
//~~~~~~~
// Error: Type 'void' is not assignable to type 'string | undefined'.



const records: string[] = [];

function saveRecords(newRecords: string[]) {
    newRecords.forEach(record => records.push(record));
}

saveRecords(['21', 'Come On Over', 'The Bodyguard'])

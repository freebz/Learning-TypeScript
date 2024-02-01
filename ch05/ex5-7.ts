// 5.2.1 명시적 반환 타입

function singSongsRecursive(songs: string[], count = 0): number {
    return songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;
}



const singSongsRecursive = (songs: string[], count = 0): number =>
    songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;



function getSongRecordingDate(song: string):
Date | undefined {
    switch (song) {
	case "Strange Fruit":
	    return new Date('April 20, 1939'); // Ok

	case "Greensleeves":
	    return "unknown";
	    //~~~~~~~~~~~~~~~
	    // Error: Type 'string' is not assignable to type 'Date'.
	default:
	    return undefined; // Ok
    }
}

// 5.2 반환 타입

// 타입: (songs: string[]) => number
function singSongs(songs: string[]) {
    for (const song of songs) {
	console.log(`${song}`);
    }

    return songs.length;
}



// 타입: (songs: string[], index: number) => string | undefined
function getSongAt(songs: string[], index: number) {
    return index < songs.length
	? songs[index]
	: undefined;
}

// 5.1.2 선택적 매개변수

function announceSong(song: string, singer?: string) {
    console.log(`Song: ${song}`);

    if (singer) {
	console.log(`Singer: ${singer}`);
    }
}

announceSong("Greensleeves"); // Ok
announceSong("Greensleeves", undefined); // Ok
announceSong("Chandelier", "Sia"); // Ok



function announceSongBy(song: string, singer: string | undefined) { /* ... */ }

announceSongBy("Greensleeves");
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Error: Expected 2 arguments, but got 1.

announceSongBy("Greensleeves", undefined); // Ok
announceSongBy("Chandelier", "Sia"); // Ok



function announceSinger(singer?: string, song: string) {}
//                                       ~~~~
// Error: A required parameter cannot follow an optional parameter.

// 5.3.2 매개변수 타입 추론

let singer: (song: string) => string;

singer = function (song) {
    // song: string의 타입
    return `Singing: ${song.toUpperCase()}!`; // Ok
};



const songs = ["Call Me", "Jolene", "The Chain"];

// song: string
// index: number
songs.forEach((song, index) => {
    console.log(`${song} is at index ${index}`);
});

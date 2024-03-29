// 5.1.3 기본 매개변수

function rateSong(song: string, rating = 0) {
    console.log(`${song} gets ${rating}/5 stars!`);
}

rateSong("Photograph") // Ok
rateSong("Set Fire to the Rain", 5); // Ok
rateSong("Set Fire to the Rain", undefined); // Ok

rateSong("At Last!", "100");
//                   ~~~~~
// Error: Argument of type 'string' is not assignable to
// parameter of type 'number | undefined'.

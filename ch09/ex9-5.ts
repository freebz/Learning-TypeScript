// 9.3.2 typeof

const original = {
    medium: "movie",
    title: "Mean Girls",
};

let adaptation: typeof original;

if (Math.random() > 0.5) {
    adaptation = { ...original, medium: "play" }; // Ok
} else {
    adaptation = { ...original, medium: 2 };
    //                          ~~~~~~
    // Error: Type 'number' is not assignable to type 'string'.
}



// keyof typeof

const ratings = {
    imdb: 8.4,
    metacritic: 82,
};

function logRating(key: keyof typeof ratings) {
    console.log(ratings[key]);
}

logRating("imdb"); // Ok

logRating("invalid");
//        ~~~~~~~~~
// Error: Argument of type '"invalid"' is not assignable
// to parameter of type '"imdb" | "metacritic"'.

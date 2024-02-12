// 9.5.1 리터럴에서 원시 타입으로

// 타입: () => string
const getName = () => "Maria Bamford";

// 타입: () => "Maria Bamford";
const getNameConst = () => "Maria Bamford" as const;



interface Joke {
    quote: string;
    style: "story" | "one-liner";
}

function tellJoke(joke: Joke) {
    if (joke.style === "one-liner") {
	console.log(joke.quote);
    } else {
	console.log(joke.quote.split("\n"));
    }
}

// 타입: { quote: string; style: "one-liner" }
const narrowJoke = {
    quote: "If you stay alive for no other reason do it for spite.",
    style: "one-liner" as const,
};

tellJoke(narrowJoke); // Ok

// 타입: { quote: string; style: string }
const wideObject = {
    quote: "Time files when you are anxious!",
    style: "one-liner",
};

tellJoke(wideObject);
//       ~~~~~~~~~~
// Error: Argument of type '{ quote: string; style: string; }'
// is not assignable to parameter of type 'Joke'.
//   Types of property 'style' are incompatible.
//     Type 'string' is not assignable to type '"story" | "one-liner"'.

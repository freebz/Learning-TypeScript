// 5.1.1 필수 매개변수

function singTwo(first: string, second: string) {
    console.log(`${first} / ${second}`);
}

// Logs: "Ball and Chain / undefined"
singTwo("Ball and Chain");
//~~~~~~~~~~~~~~~~~~~~~~
// Error: Expected 2 arguments, but got 1.

// Logs: "I Will Survive / Higher Love"
singTwo("I Will Survive", "Higher Love"); // Ok

// Logs: "Go Your Own Way / The Chain"
singTwo("Go Your Own Way", "The Chain", "Dreams");
//                                      ~~~~~~~~
// Expected 2 arguments, but got 3.

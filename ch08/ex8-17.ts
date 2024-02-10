// 8.7.1 정적 필드 제한자

class Question {
    protected static readonly answer: "bash";
    protected static readonly prompt =
	"What's an ogre's favorite programming language?";

    guess(getAnswer: (prompt: string) => string) {
	const answer = getAnswer(Question.prompt);

	// Ok
	if (answer === Question.answer) {
	    console.log("You got it!");
	} else {
	    console.log("Try again...");
	}
    }
}

Question.answer;
//       ~~~~~~
// Error: Property 'answer' is protected and only
// accessible within class 'Question' and its subclasses.

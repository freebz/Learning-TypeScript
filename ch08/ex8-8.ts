// 8.4 클래스와 인터페이스

interface Learner {
    name: string;
    study(hours: number): void;
}

class Student implements Learner {
    name: string;

    constructor(name: string) {
	this.name = name;
    }

    study(hours: number) {
	for (let i = 0; i < hours; i += 1) {
	    console.log("...studying...");
	}
    }
}

class Slacker implements Learner {
    //~~~~~~~
    // Error: Class 'Slacker' incorrectly implements interface 'Learner'.
    //  Type 'Slacker' is missing the following properties from type 'Learner':
    //  name, study
}



class Student implements Learner {
    name;
    //!!
    // Error: Member 'name' implicitly has an 'any' type.
    
    study(hours) {
	//~~~~~
	// Error: Parameter 'hours' implicitly has an 'any' type.
    }
}

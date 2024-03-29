// 8.5.2 재정의된 생성자

class GradeAnnouncer {
    message: string;

    constructor(grade: number) {
	this.message = grade >= 65 ? "Maybe next time..." : "You pass!";
    }
}

class PassingAnnouncer extends GradeAnnouncer {
    constructor() {
	super(100);
    }
}

class FailingAnnouncer extends GradeAnnouncer {
    constructor() { }
    //~~~~~~~~~~~~~~~
    // Error: Constructors for derived classes must contain a 'super' call.
}



class GradesTally {
    grades: number[] = [];

    addGrades(...grades: number[]) {
	this.grades.push(...grades);
	return this.grades.length;
    }
}

class ContinuedGradesTally extends GradesTally {
    constructor(previousGrades: number[]) {
	this.grades = [...previousGrades];
	//~~
	// Error: 'super' must be called before accessing
	// 'this' in the constructor of a subclass.

	super();

	console.log("Starting with length", this.grades.length); // Ok
    }
}

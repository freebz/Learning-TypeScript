// 8.6 추상 클래스

abstract class School {
    readonly name: string;

    constructor(name: string) {
	this.name = name;
    }

    abstract getStudentTypes(): string[];
}

class Preschool extends School {
    getStudentTypes() {
	return ["preschooler"];
    }
}

class Absence extends School { }
    //~~~~~~~
    // Error: Non-abstract class 'Absence' does not implement
    // all abstract members of 'School'



let school: School;

school = new Preschool("Sunnyside Daycare"); // Ok

school = new School("somewhere else");
//       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Error: Cannot create an instance of an abstract class.

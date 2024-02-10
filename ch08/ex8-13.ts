// 8.5.3 재정의된 메서드

class GradeCounter {
    countGrades(grades: string[], letter: string) {
	return grades.filter(grade => grade === letter).length;
    }
}

class FailureCounter extends GradeCounter {
    countGrades(grades: string[]) {
	return super.countGrades(grades, "F");
    }
}

class AnyFailureChecker extends GradeCounter {
    countGrades(grades: string[]) {
    //~~~~~~~~~
	// Error: Property 'countGrades' in type 'AnyFailureChecker' is not
	// assignable to the same property in base type 'GradeCounter'.
	//   Type '(grades: string[]) => boolean' is not assignable
	//   to type '(grades: string[], letter: string) => number'.
	//     Type 'boolean' is not assignable to type 'number'.
	return super.countGrades(grades, "F") !== 0;
    }
}

const counter: GradeCounter = new AnyFailureChecker();

// 예상한 타입: number
// 실제 타입: boolean
const count = counter.countGrades(["A", "C", "F"]);

// 8.5.4 재정의된 속성

class Assignment {
    grade?: number;
}

class GradedAssignment extends Assignment {
    grade: number;

    constructor(grade: number) {
	super();
	this.grade = grade;
    }
}



class NumericGrade {
    value = 0;
}

class VagueGrade extends NumericGrade {
    value = Math.random() > 0.5 ? 1 : "...";
    //~~~
    // Error: Property 'value' in type 'VagueGrade' is not
    // assignable to the same property in base type 'NumericGrade'.
    //   Type 'string | number' is not assignable to type 'number'.
    //     Type 'string' is not assignable to type 'number'.
}

const instance: NumericGrade = new VagueGrade();

// 예상한 타입: number
// 실제 타입: number | string
instance.value;

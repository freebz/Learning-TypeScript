// 8.5 클래스 확장

class Teacher {
    teach() {
	console.log("The surest test of discipline is its absence.");
    }
}

class StudentTeacher extends Teacher {
    learn() {
	console.log("I cannot afford the luxury of a closed mind.");
    }
}

const teacher = new StudentTeacher();

teacher.teach(); // Ok(기본 클래스에 정의됨)
teacher.learn(); // Ok(기본 클래스에 정의됨)

teacher.other()
     // ~~~~~
     // Error: Property 'other' does not exist on type 'StudentTeacher'.

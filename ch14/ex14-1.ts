// 14.1 클래스 매개변수 속성

class Engineer {
    readonly area: string;

    constructor(area: string) {
	this.area = area;
	console.log(`I work in the ${area} area.`);
    }
}

// 타입: string
new Engineer("mechanical").area;



class Engineer {
    constructor(readonly area: string) {
	console.log(`I work in the ${area} area.`);
    }
}

// 타입: string
new Engineer("mechanical").area;



class NamedEngineer {
    fullName: string;

    constructor(
	name: string,
	public area: string,
    ) {
	this.fullName = `${name}, ${area} engineer`;
    }
}



class NamedEngineer {
    fullName: string;
    area: string;

    constructor(
	name: string,
	area: string,
    ) {
	this.area = area;
	this.fullName = `${name}, ${area} engineer`;
    }
}

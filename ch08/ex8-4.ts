// 8.2.2 초기화 검사

class WithValue {
    immediate = 0; // Ok
    later: number; // Ok(constructor에서 할당)
    mayBeUndefined: number | undefined; // Ok(undefined가 되는 것이 허용됨)
    unused: number;
    //~~~~
    // Error: Property 'unused' has no initializer
    // and is not definitely assigned in the constructor.

    constructor() {
	this.later = 1;
    }
}



// JavaScript

class MissingInitializer {
    property: string;
}

new MissingInitializer().property.length;
// TypeError: Cann ot read property 'length' of undefined



// 확실하게 할당된 속성

class ActivitiesQueue {
    pending!: string[]; // Ok

    initialize(pending: string[]) {
	this.pending = pending;
    }

    next() {
	return this.pending.pop();
    }
}

const activities = new ActivitiesQueue();

activities.initializer(['eat', 'sleep', 'learn'])
activities.next();

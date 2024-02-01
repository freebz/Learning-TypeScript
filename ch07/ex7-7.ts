// 7.2.6 중첩 인터페이스

interface Novel {
    author: {
	name: string;
    };
    setting: Setting;
}

interface Setting {
    place: string;
    year: number;
}

let myNovel: Novel;

// Ok
myNovel = {
    author: {
	name: 'Jane Austen',
    },
    setting: {
	place: 'England',
	year: 1812,
    }
};

myNovel = {
    author: {
	name: 'Emmily Brontè',
    },
    setting: {
    //~~~~~
    // Error: Property 'year' is missing in type
    // '{ place: string; }' but required in type 'Setting'.
	place: 'West Yorkshire',
    },
};

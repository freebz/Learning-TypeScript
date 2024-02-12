// 9.3 타입 연산자

// 9.3.1 keyof

interface Ratings {
    audience: number;
    critics: number;
}

function getRating(ratings: Ratings, key: string): number {
    return ratings[key];
    //     ~~~~~~~~~~~~
    // Error: Element implicitly has an 'any' type because expression
    // of type 'string' can't be used to index type 'Ratings'.
    //   No index signature with a parameter of type 'string' was found on type
    //   'Ratings'.
}

const ratings: Ratings = { audience: 66, critics: 84 };

getRating(ratings, 'audience'); // Ok

getRating(ratings, 'not valid'); // 허용되지만 사용하면 안 됨


 
function getRating(ratings: Ratings, key: 'audience' | 'critics'): number {
    return ratings[key]; // Ok
}

const ratings: Ratings = { audience: 66, critics: 84 };

getRating(ratings, 'audience'); // Ok

getRating(ratings, 'not valid');
//                 ~~~~~~~~~~~
// Error: Argument of type '"not valid"' is not
// assignable to parameter of type '"audience" | "critics"'.



function getCountKeyof(ratings: Ratings, key: keyof Ratings): number {
    return ratings[key]; // Ok
}

const ratings: Ratings = { audience: 66, critics: 84 };

getCountKeyof(ratings, 'audience'); // Ok

getCountKeyof(ratings, 'not valid');
//                     ~~~~~~~~~~~
// Error: Argument of type '"not valid"' is not
// assignable to parameter of type 'keyof Ratings'.

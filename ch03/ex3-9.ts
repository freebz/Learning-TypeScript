// 3.4 업격한 null 검사

// 3.4.1 십억 달러의 실수

const firstName: string = null;



let nameMaybe = Math.random() > 0.5
    ? "Tony Hoare"
    : undefined;

nameMaybe.toLowerCase();
// Potential runtime error: Cannot read property 'toLowerCase' of undefined.



let nameMaybe = Math.random() > 0.5
    ? "Tony Hoare"
    : undefined;

nameMaybe.toLowerCase();
//~~~~~~~
// Error: Object is possibly 'undefined'.

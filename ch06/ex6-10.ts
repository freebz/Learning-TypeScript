// 6.3.2 나머지 매개변수 스프레드

function logWarriors(greeting: string, ...names: string[]) {
    for (const name of names) {
	console.log(`${greeting}, ${name}!`);
    }
}

const warriors = ["Cathay Williams", "Lozen", "Nzinga"];

logWarriors("Hello", ...warriors);

const birthYears = [1844, 1840, 1583];

logWarriors("Born in", ...birthYears);
//                     ~~~~~~~~~~~~~
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.

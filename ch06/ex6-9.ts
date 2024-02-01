// 6.3 스프레드와 나머지 매개변수

// 6.3.1 스프레드

// 타입: string[]
const soldiers = ["Harriet Tubman", "Joan of Arc", "Khutulun"];

// 타입: number[]
const doldierAges = [90, 19, 45];

// 타입: (string | number)[]
const conjoined = [...soldiers, ...soldierAges];

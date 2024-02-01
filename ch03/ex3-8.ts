// 3.3.1 리터럴 할당 가능성

let specificallyAda: "Ada";

specificallyAda = "Ada"; // Ok

specificallyAda = "Byron";
//~~~~~~~~~~~~~
// Error: Type '"Byron"' is not assignable to type '"Ada"'.

let someString = ""; // 타입: string

specificallyAda = someString;
//~~~~~~~~~~~~~
// Error: Type 'string' is not assignable to type '"Ada"'.



someString = ":)";

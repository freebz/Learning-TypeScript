// 6장 배열

const elements = [true, null, undefined, 42];

elements.push("even", ["more"]);
// elements 배열의 값: [true, null, undefined, 42, "even", ["more"]]



const warriors = ["Artemisia", "Boudica"];

// Ok: "Zenobia"의 타입은 string
warriors.push("Zenobia");

warriors.push(true);
//            ~~~~
// Error: Argument of type 'boolean' is not assignable to parameter of type 'string'.

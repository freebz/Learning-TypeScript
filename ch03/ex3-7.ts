// 3.3 리터럴 타입

const philosopher = "Hypatia";



let lifespan: number | "ongoing" | "uncertain";

lifespan = 89; // Ok
lifespan = "ongoing"; // Ok

lifespan = true;
//~~~~~~
// Error: Type 'true' is not assignable to type 'number | "ongoing" | "uncertain"'

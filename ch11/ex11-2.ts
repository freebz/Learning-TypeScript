// 11.2 런타임 값 선언

// types.d.ts
declare let declared: string; // Ok

declare let initializer: string = "Wanda";
//                                ~~~~~~~
// Error: Initializers are not allowed in ambient contexts.



// fairise.d.ts
declare function canGrantWish(wish: string): boolean; // Ok

declare function grantWish(wish: string) { return true; }
//                                       ~
// Error: An implementation cannot be declared in ambient contexts.

class Fairy {
    canGrantWish(wish: string): boolean; // Ok

    grantWish(wish: string) {
	//                  ~
	// Error: An implementation cannot be declared in ambient contexts.
	return true;
    }
}



// index.ts
declare const myGlobalValue: string;

console.log(myGlobalValue); // Ok



// index.d.ts
interface Writer {} // Ok
declare interface Writer {} // Ok

declare const fullName: string; // Ok: 타입은 원시 타입 string입니다.
declare const firstName: "Liz"; // Ok: 타입은 리터럴 "값"입니다.

const lastName = "Lemon";
//~~~
// Error: Top-level declarations in .d.ts files must
// start with either a 'declare' or 'export' modifier.

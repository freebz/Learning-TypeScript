// 2.3.1 불필요한 타입 애너테이션

let firstName: string = "Tina";	// 타입 시스템은 변경되지 않음



let firstName: string = 42;
//  ~~~~~~~~~
// Error: Type 'number' is not assignable to type 'string'.

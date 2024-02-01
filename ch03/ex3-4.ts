// 3.2 내로잉

// 3.2.1 값 할당을 통한 내로잉

let admiral: number | string;

admiral = "Grace Hopper";

admiral.toUpperCase(); // Ok: string

admiral.toFixed();
//      ~~~~~~~
// Error: Property 'toFixed' does not exist on type 'string'.



let inventor: number | string = "Hedy Lamarr";

inventor.toUpperCase(); // Ok: string

inventor.toFixed();
//       ~~~~~~~
// Error: Property 'toFixed' does not exist on type 'string'.

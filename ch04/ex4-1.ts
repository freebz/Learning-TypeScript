// 4.1 객체 타입

const poet = {
    born: 1935,
    name: "Mary Oliver",
};

poet['born']; // 타입: number
poet.name; // 타입: string

poet.end;
//   ~~~
// Error: Property 'end' does not exist on type '{ born: number; name: string; }'.

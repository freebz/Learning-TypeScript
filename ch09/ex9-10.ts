// 9.5 const 어서션

// 타입: (number | string)[]
[0, ''];

// 타입: readonly [0, '']
[0, ''] as const;

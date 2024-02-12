// 9.4 타입 어서션

const rawData = '["grace", "frankie"]';

// 타입: any
JSON.parse(rawData);

// 타입: string[]
JSON.parse(rawData) as string[];

// 타입: [string, string]
JSON.parse(rawData) as [string, string];

// 타입: ["grace", "frankie"]
JSON.parse(rawData) as ["grace", "frankie"];



// javascript

const rawData = '["grace", "frankie"]';

// 타입: any
JSON.parse(rawData);

// 타입: string[]
JSON.parse(rawData);

// 타입: [string, string]
JSON.parse(rawData);

// 타입: ["grace", "frankie"]
JSON.parse(rawData);

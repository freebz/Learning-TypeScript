// 10.6.1 keyof와 제한된 타입 매개변수

function get<T, Key extends keyof T>(container: T, key: Key) {
    return container[key];
}

const roles = {
    favorite: "Fargo",
    others: ["Almost Famous", "Burn After Reading", "Nomadland"],
};

const favorite = get(roles, "favorite"); // 타입: string
const others = get(roles, "others"); // 타입: string[]

const missing = get(roles, "extras");
//                         ~~~~~~~~
// Error: Argument of type '"extras"' is not assignable
// to parameter of type '"favorite" | "others"'.



function get<T>(container: T, key: keyof T) {
    return container[key];
}

const roles = {
    favorite: "Fargo",
    others: ["Almost Fargo", "Burn After Reading", "Nomadland"],
};

const found = get(roles, "favorite"); // 타입: string | string[]

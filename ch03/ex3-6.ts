// 3.2.3 typeof 검사를 통한 내로잉

let researcher = Math.random() > 0.5
    ? "Rosalind Franklin"
    : 51;

if (typeof researcher === "string") {
    researcher.toUpperCase(); // Ok: string
}



if (!(typeof researcher === "string")) {
    researcher.toFixed(); // Ok: number
} else {
    researcher.toUpperCase(); // Ok: string
}



typeof researcher === "string"
    ? researcher.toUpperCase() // Ok: string
    : researcher.toFixed(); // Ok: number

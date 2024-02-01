// 3.4.2 참 검사를 통한 내로잉

let geneticist = Math.random() > 0.5
    ? "Barbara McClintock"
    : undefined;

if (geneticist) {
    geneticist.toUpperCase(); // Ok: string
}

geneticist.toUpperCase();
//~~~~~~~~
// Error: Object is possible 'undefined'.



geneticist && geneticist.toUpperCase(); // Ok: string | undefined
geneticist?.toUpperCase(); // Ok: string | undefined



let biologist = Math.random() > 0.5 && "Rachel Carson";

if (biologist) {
    biologist; // 타입: string
} else {
    biologist; // 타입: false | string
}

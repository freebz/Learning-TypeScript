// 15.4.2 템플릿 리터럴 키

type DataKey = "location" | "name" | "year";

type ExistenceChecks = {
    [K in `check${Capitalize<DataKey>}`]: () => boolean;
};
// 다음과 같음:
// {
//     checkLocation: () => boolean;
//     checkName: () => boolean;
//     checkYear: () => boolean;
// }

function checkExistence(checks: ExistenceChecks) {
    checks.checkLocation(); // 타입: boolean
    checks.checkName(); // 타입: boolean

    checks.checkWrong();
    //     ~~~~~~~~~~
    // Error: Property 'checkWrong' does not exist on type 'ExistenceChecks'.
}

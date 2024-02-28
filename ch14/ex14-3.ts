// 14.3 열거형

const StatusCodes = {
    InternalServerError: 500,
    NotFound: 404,
    Ok: 200,
    // ...
} as const;

StatusCodes.InternalServerError; // 500



// 타입: 200 | 404 | 500
type StatusCodeValue = (typeof StatusCodes)[keyof typeof StatusCodes];

let statusCodeValue: StatusCodeValue;

statusCodeValue = 200; // Ok

statusCodeValue = -1;
//~~~~~~~~~~~~~
// Error: Type '-1' is not assignable to type 'StatusCodeValue'.



enum StatusCode {
    InternalServerError = 500,
    NotFound = 404,
    Ok = 200,
}

StatusCode.InternalServerError; // 500



let statusCode: StatusCode;

statusCode = StatusCode.Ok; // Ok
statusCode = 200; // Ok



var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["InternalServerError"] = 500] = "InternalServerError";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["Ok"] = 200] = "Ok";
})(StatusCode || (StatusCode = {}));

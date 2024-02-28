// 14.3.2 문자열값을 갖는 열거형

enum LoadStyle {
    AsNeeded = "as-nedded",
    Eager = "eager",
}



var LoadStyle;
(function (LoadStyle) {
    LoadStyle["AsNeeded"] = "as-nedded";
    LoadStyle["Eager"] = "eager";
})(LoadStyle || (LoadStyle = {}));



enum Wat {
    FirstString = "first",
    SomeNumber = 9000,
    ImplicitNumber, // Ok (value 9001)
    AnotherString = "another",

    NotAllowd,
    //~~~~~~~
    // Error: Enum member must have initializer.
}

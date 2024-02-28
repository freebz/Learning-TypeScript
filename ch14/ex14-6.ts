// 14.3.3 const 열거형

const enum DisplayHint {
    Opaque = 0,
    Semitransparent,
    Transparent,
}

let displayHint = DisplayHint.Transparent;



let displayHint = 2 /* DisplayHint.Transparent */;



var DisplayHint;
(function (DisplayHint) {
    DisplayHint[DisplayHint["Opaque"] = 0] = "Opaque";
    DisplayHint[DisplayHint["Semitransparent"] = 1] = "Semitransparent";
    DisplayHint[DisplayHint["Transparent"] = 2] = "Transparent";
})(DisplayHint || (DisplayHint = {}));

let displayHint = 2 /* Transparent */;

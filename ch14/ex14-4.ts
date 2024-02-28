// 14.3.1 자동 숫잣값

enum VisualTheme {
    Dark, // 0
    Light, // 1
    System, // 2
}



var VisualTheme;
(function (VisualTheme) {
    VisualTheme[VisualTheme["Dark"] = 0] = "Dark";
    VisualTheme[VisualTheme["Light"] = 1] = "Light";
    VisualTheme[VisualTheme["System"] = 2] = "System";
})(VisualTheme || (VisualTheme = {}));



enum Direction {
    Top = 1,
    Right,
    Bottom,
    Left,
}



var Direction;
(function (Direction) {
    Direction[Direction["Top"] = 1] = "Top";
    Direction[Direction["Right"] = 2] = "Right";
    Direction[Direction["Bottom"] = 3] = "Bottom";
    Direction[Direction["Left"] = 4] = "Left";
})(Direction || (Direction = {}));

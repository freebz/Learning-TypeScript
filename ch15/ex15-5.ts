// 15.2 조건부 타입

LeeftType extends RightType ? IfTrue : IfFalse



// 타입: false
type CheckStringAgainstNumber = string extends number ? true : false;

// 3.4.3 초기값이 없는 변수

let mathematician: string;

mathematician?.length;
//~~~~~~~~~~~
// Error: Variable 'mathematician' is used before being assigned.

mathematician = "Mark Goldberg";
mathematician.length; // Ok



let mathematician: string | undefined;

mathematician?.length; // Ok

mathematician = "Mark Goldberg";
mathematician.length; // Ok

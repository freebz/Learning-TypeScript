// 10.8.2 제네릭 명명 규칙

// L과 V는 과연 무엇일까요?
function labelBox<L, V>(l: L, v: V) { /* ... */ }



// 좀 더 명확합니다.
function labelBox<Label, Value>(label: Label, value: Value) { /* ... */ }

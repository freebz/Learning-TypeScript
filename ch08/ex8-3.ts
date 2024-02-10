// 8.2.1 함수 속성

class WithMethod {
    myMethod() {}
}

new WithMethod().myMethod === new WithMethod().myMethod; // true



class WithProperty {
    myProperty: () => {}
}

new WithProperty().myProperty === new WithProperty().myProperty; // false



class WithPropertyParameters {
    takesParameters = (input: boolean) => input ? "Yes" : "No";
}

const instance = new WithPropertyParameters();

instance.takesParameters(true); // Ok

instance.takesParameters(123);
//                       ~~~
// Error: Argument of type 'number' is not assignable to parameter of type 'boolean'.

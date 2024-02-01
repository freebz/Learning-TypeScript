// 7.3.1 재정의된 속성

interface WithNullableName {
    name: string | null;
}

interface WithNonNullableName extends WithNullableName {
    name: string;
}

interface WithNumericName extends WithNullableName {
    //    ~~~~~~~~~~~~~~~
    // Error: Interface 'WithNumericName' incorrectly extends interface
    // 'WithNullableName'.
    //  Types of property 'name' are incompatible.
    //    Type 'string | number' is not assignable to type 'string | null'.
    //      Type 'number' is not assignable to type 'string'.
    name: number | string;
}

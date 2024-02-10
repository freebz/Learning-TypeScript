// 8.2.3 선택적 속성

class MissingInitializer {
    property?: string;
}

new MissingInitializer().property?.length; // Ok

new MissingInitializer().property.length;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Error: Object is possibly 'undefined'.

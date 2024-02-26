// 13.7.3 CommonJS와의 상호 운용성

// esModuleInterop

import React from "react";
//     ~~~~~
// Error: Module '"file:///node_modules/@types/react/index"' can
// only be default-imported using the 'esModuleInterop' flag.



// allowSyntheticDefaultImports

import React from "react";
//     ~~~~~
// Error: Module '"file://node_modules/@types/react/index"' can only be
// default-imported using the 'allowSyntheticDefaultImports' flag.

// 13.7.1 module

{
    "compilerOptions": {
	"module": "commonjs"
    }
}



const my_example_lib = require("my-example-lib");
exports.logValue = () => console.log(my_example_lib.value);

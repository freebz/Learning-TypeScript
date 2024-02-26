// 13.6 타입 검사

// 13.6.1 lib

{
    "compilerOptions": {
	"lib": ["es2020"]
    }
}



const value = "a b c";

value.replaceAll(" ", ", ");
// Uncaught TypeError: value.replaceAll is not a function

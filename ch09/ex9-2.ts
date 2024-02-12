// 9.1.2 unknown

function greetComedian(name: unknown) {
    console.log(`Announcing ${name.toUpperCase()}!`);
    //                        ~~~~
    // Error: 'name' is of type 'unknown'.
}



function greetComedianSafety(name: unknown) {
    if (typeof name === "string") {
	console.log(`Announcing ${name.toUpperCase()}!`); // Ok
    } else {
	console.log("Well, I'm off.");
    }
}

greetComedianSafety("Betty White"); // Logs: 4
greetComedianSafety({}); // 로그 없음

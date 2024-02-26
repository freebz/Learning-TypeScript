// 13.5 자바스크립트로 내보내기

// 13.5.1 outDir

// 13.5.2 target

function defaultNameAndLog(nameMaybe: string | undefined) {
    const name = nameMaybe ?? "anonymous";
    console.log("From", nameMaybe, "to", name);
    return name;
}



function defaultNameAndLog(nameMaybe) {
    const name = nameMaybe ?? "anonymous";
    console.log("From", nameMaybe, "to", name);
    return name;
}



function defaultNameAndLog(nameMaybe) {
    const name = nameMaybe !== null && nameMaybe !== void 0
	? nameMaybe
	: "anonymous";
    console.log("From", nameMaybe, "to", name);
    return name;
}



function defaultNameAndLog(nameMaybe) {
    var name = nameMaybe !== null && nameMaybe !== void 0
	? nameMaybe
	: "anonymous";
    console.log("From", nameMaybe, "to", name);
    return name;
}

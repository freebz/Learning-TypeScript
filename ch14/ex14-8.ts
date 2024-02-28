// 14.4.1 네임스페이스 내보내기

namespace Settings {
    export const name = "My Application";
    export const version = "1.2.3";
    export function describe() {
	return `${Settings.name} at version ${Settings.version}`;
    }
    console.log("Initializing", describe());
}
console.log("Initialized", Settings.describe());



var Settings;
(function (Settings) {
    Settings.name = "My Application";
    Settings.version = "1.2.3";
    function describe() {
	return `${Settings.name} at version ${Settings.version}`;
    }
    Settings.describe = describe;
    console.log("Initializing", describe());
})(Settings || (Settings = {}));
console.log("Initialized", Settings.describe());



// settings/constants.ts
namespace Settings {
    export const name = "My Application";
    export const version = "1.2.3";
}



// settings/describe.ts
namespace Settings {
    export function describe() {
	return `${Settings.name} at version ${Settings.version}`;
    }
    console.log("Initializing", describe());
}



// index.ts
console.log("Initialized", Settings.describe());



// settings/constants.ts
var Settings;
(function (Settings) {
    Settings.name = "My Application";
    Settings.version = "1.2.3";
})(Settings || (Settings = {}));

// settings/describe.ts
(function (Settings) {
    function describe() {
	return `${Settings.name} at version ${Settings.version}`;
    }
    Settings.describe = describe;
    console.log("Initialized", describe());
})(Settings || (Settings = {}));
console.log("Initialized", Settings.describe());



const Settings = {
    describe: function describe() {
	return `${Settings.name} at version ${Settings.version}`;
    },
    name: "My Application",
    version: "1.2.3",
};

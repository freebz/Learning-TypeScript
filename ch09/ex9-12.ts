// 9.5.2 읽기 전용 객체

function describePreference(preference: "maybe" | "no" | "yes") {
    switch (preference) {
	case "maybe":
	    return "I suppose...";
	case "no":
	    return "No thanks.";
	case "yes":
	    return "Yes please!";
    }
}

// 타입: {movie: string, standup: string }
const preferencesMutable = {
    movie: "maybe",
    standup: "yes",
};

describePreference(preferencesMutable.movie);
//                 ~~~~~~~~~~~~~~~~~~~~~~~~
// Error: Argument of type 'string' is not assignable
// to parameter of type '"maybe" | "no" | "yes"'.

preferencesMutable.movie = "no"; // Ok

// 타입: readonly { readonly movie: "maybe", readonly standup: "yes" }
const preferencesReadonly = {
    movie: "maybe",
    standup: "yes",
} as const;

describePreference(preferencesReadonly.movie); // Ok

preferencesReadonly.movie = "no";
//                  ~~~~~
// Error: Cannot assign to 'movie' because it is a read-only property.

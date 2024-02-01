// 1.4.2 제한을 통한 자유

// 이전 코드: sayMyName(firstName, lastName) { ...
function sayMyName(fullName) {
    console.log(`You acting kind of shady, ain't callin' me ${fullName}`);
}

sayMyName("Beyoncé", "Knowles");
//                   ~~~~~~~~~
// Error: Expected 1 argument, but got 2.

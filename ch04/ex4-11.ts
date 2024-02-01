// 4.3.3 객체 타입 내로잉

if ("pages" in poem) {
    poem.pages; // Ok: poem은 PoemWithPages로 좁혀짐
} else {
    poem.rhymes; // Ok: poem은 PoemWithRhymes로 좁혀짐
}



if (poem.pages) { /* ... */ }
//       ~~~~~
// Error: Property 'pages' does not exist on type 'PoemWithPages | PoemWithRhymes'.
//   Property 'pages' does not exist on type 'PoemWithRhymes'.

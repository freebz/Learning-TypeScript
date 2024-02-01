// 7.2.2 읽기 전용 속성

interface Page {
    readonly text: string;
}

function read(page: Page) {
    // Ok: text 속성을 수정하지 않고 읽는 것
    console.log(page.text);

    page.text += "!";
    //   ~~~~
    // Error: Cannot assign to 'text' because it is a read-only property.
}



const pageIsh = {
  text: "Hello, world!",
};

// Ok: pageIsh는 Page 객체가 아니라 text가 있는, 유추된 객체 타입입니다.
pageIsh.text += "!";

// Ok: pageIsh의 더 구체적인 버전인 Page를 읽습니다.
read(pageIsh);

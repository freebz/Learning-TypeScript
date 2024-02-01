// 1.2 바닐라 자바스크립트의 함정

// 1.2.1 값 비싼 자유

function paintPainting(painter, painting) {
    return painter
	.prepare()
	.paint(painting, painter.ownMaterials)
	.finish();
}

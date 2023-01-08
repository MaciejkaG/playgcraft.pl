const regulamin = "<h1>Test</h1>\n<strong>test</strong>"

function loadFile(fileName) {
    if (fileName=="regulamin") {
        document.getElementById("doc-block").innerHTML = regulamin;
    }
}
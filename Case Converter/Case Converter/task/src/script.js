function lowerCase() {
    document.getElementById("text-area").value = document.getElementById("text-area").value.toLowerCase();
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}


document.getElementById("upper-case").addEventListener("click", function () {
    document.getElementById("text-area").value = document.getElementById("text-area").value.toUpperCase();
});

document.getElementById("lower-case").addEventListener("click", lowerCase);


document.getElementById("proper-case").addEventListener("click", function () {
    lowerCase();
    let text = document.getElementById("text-area").value.split(" "); //add each word to an array
    text.forEach(function (item, index) {
        text[index] = item.charAt(0).toUpperCase().concat(item.slice(1));//change first letter to uppercase then join it with the rest of the word
    })
    document.getElementById("text-area").value = text.join(" ");
});

document.getElementById("sentence-case").addEventListener("click", function () {
    lowerCase();
    let text = document.getElementById("text-area").value.split(" ");
    text[0] = text[0].charAt(0).toUpperCase().concat(text[0].slice(1)); //capitalise the first word
    for (let i = 1; i < text.length - 1; i++) {
        if (text[i].charAt(text[i].length - 1) === '.') {
            text[i + 1] = text[i + 1].charAt(0).toUpperCase().concat(text[i + 1].slice(1));
        }
    }
    //look for fullstops then capitalise the next letter after it
    document.getElementById("text-area").value = text.join(" ");
});


document.getElementById("save-text-file").addEventListener("click", function () {
    let text = document.getElementById("text-area").value;
    download('text.txt',text);
});

var myInput = document.getElementById("my-input");
function makeBold() {
    myInput.classList.toggle("bold");
}
function makeItalic() {
    myInput.classList.toggle("italic");
}
function makeUnderline() {
    myInput.classList.toggle("underline")
}
function textColor() {
    var textcolor = document.getElementById("color").value;
    myInput.style.color = textcolor;
}
function backgroundcolor(){
    var backgroundcolor = document.getElementById("background").value;
    myInput.style.backgroundColor = backgroundcolor ;
}
function textleft(){
    myInput.classList.toggle("textleft")
}
function textright(){
    myInput.classList.toggle("textright")
}
function textcenter(){
    myInput.classList.toggle("textcenter")
}
var myInput = document.getElementById("my-input");

function makeOrderedList() {
    // Get the text and split by line breaks
    var lines = myInput.innerText.split('\n');
    
    // Start building the ordered list
    var html = '<ol>';
    lines.forEach(line => {
        if(line.trim() !== '') { // skip empty lines
            html += `<li>${line}</li>`;
        }
    });
    html += '</ol>';

    // Replace the div content with the new list
    myInput.innerHTML = html;
}

function makeUnorderedList() {
    var lines = myInput.innerText.split('\n');
    var html = '<ul>';
    lines.forEach(line => {
        if(line.trim() !== '') {
            html += `<li>${line}</li>`;
        }
    });
    html += '</ul>';
    myInput.innerHTML = html;
}

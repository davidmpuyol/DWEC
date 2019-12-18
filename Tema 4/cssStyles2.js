var originalSize;
function bigger(){
    var letterSize = window.getComputedStyle(document.body,null).fontSize;
    letterSize = parseFloat(letterSize);
    document.body.style.fontSize = (letterSize + 2) + 'px';
}

function smaller(){
    var letterSize = window.getComputedStyle(document.body,null).fontSize;
    letterSize = parseFloat(letterSize);
    document.body.style.fontSize = (letterSize - 2) + 'px';
}

function reset(){
    document.body.style.fontSize = originalSize;
}

function justify(){
    document.body.style.textAlign = "center";
}
function alignLeft(){
    document.body.style.textAlign = "left";
}
function alignRight(){
    document.body.style.textAlign = "right";
}

window.onload = function(){
    originalSize = window.getComputedStyle(document.body,null).fontSize;
}
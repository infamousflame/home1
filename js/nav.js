var list = $("#globalNav>ul");
var logoEl = $("#globalNav>.logo");

function listLeft(){
    list.css("position", "fixed");
    list.css("color", "white")
    list.css("left", "-100px");
    list.css("z-index", "999")
}

function logo(){
    logoEl.css("width", "100px");
    logoEl.css("position", "fixed");
    logoEl.css("cursor","pointer");
    logoEl.css("z-index","999");
    
}

function goRight(){
    alert("yes");
}


listLeft();
logo();

logoEl.on("click", goRight);

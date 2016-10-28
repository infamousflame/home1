var list = $("#globalNav>ul");
var listEl = $("#globalNav>ul li");
var logoEl = $("#globalNav>.logo");

function listLeft(){
    list.css("position", "fixed");
    list.css("width", "200px");
    list.css("height", "100%");
    list.css("color", "black");
    list.css("left", "-200px");
    list.css("z-index", "999");
    list.css("padding-top", "120px");
    list.css("list-style-type", "none");
    list.css("background-color", "rgba(255,255,255,.8)");
    list.css("filter", "(4px)");
    listEl.css("padding-top", "50px");
}

function logo(){
    logoEl.css("width", "100px");
    logoEl.css("left", "20px");
    logoEl.css("top", "30px");
    logoEl.css("position", "fixed");
    logoEl.css("cursor","pointer");
    logoEl.css("z-index","9999");
}

function goRight(){
    list.animate({
        left: "+=200px"
    }, 200);
}

function goLeft(){
    list.animate({
        left: "-=200px"
    }, 200);
}

function toggleNav(){
    if(list.hasClass("toggled")){
        goLeft();
        list.removeClass("toggled");
    }else{
        goRight();
        list.addClass("toggled");
        console.log("xd");
    }
    
}


listLeft();
logo();

logoEl.on("click", toggleNav);
document.body.on("click", toggleNav);
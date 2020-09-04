var char1, x, y, dx, dy, timer;

function move(){
    if(x < 0 || x > window.innerWidth - 10 - 100){// 条件式||：あるいはという意味
        dx =-dx; //-dxは　変数dxにー１をかけたもの
    } //window.innerWidthはブラウザの横幅を取得する
    if(y < 0 || y > window.innerHeight - 10 - 100){
        dy =-dy; //-dxは　変数dxにー１をかけたもの
    } //window.innerWidthはブラウザの横幅を取得する
    x += dx;
    y += dy;
    char1.style.left = x + "px"; //文字列の連結
    char1.style.top = y + "px";
    char2.style.right = x + "px"; //文字列の連結
    char2.style.top = y + "px";
    char3.style.left = x + "px"; //文字列の連結
    char3.style.bottom = y + "px";
    char4.style.right = x + "px"; //文字列の連結
    char4.style.bottom = y + "px";
}

window.onload = function(){
    x = 0;
    y = 0;
    dx = 10;
    dy = 10;
    char1 = document.getElementById("char1");
    char2 = document.getElementById("char2");
    char3 = document.getElementById("char3");
    char4 = document.getElementById("char4");
    timer = setInterval(move,100);
    document.getElementById("size").innerHTML = innerWidth + "x" + innerHeight;
}
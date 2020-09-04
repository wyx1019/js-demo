var char1, x, timer;
var flg = 0;
function move(){
    if(flg % 2 == 0){
        x+=10;
    }else{
        x-=10;
    }
    
    if(x % 500 == 0){
        flg++;
    }
    char1.style.left=x+"px";
}

window.onload = function(){ //window.onloadは先に動かす 
    x=0;
    char1 = document.getElementById("char1");
    timer=setInterval(move,50); //100msごとにmove()関数を呼ぶ
}
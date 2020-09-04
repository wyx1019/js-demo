var count = 5 ; //5回制限する

function omikuji(){
    var dt;
    var kuji;

    if (count > 0 ) {
        dt =Math.floor(Math.random() * 7) // 0-6の乱数を作る 6足す１
        switch( dt ){
            case 0 : // if(dt == 0)
                kuji = "大吉";
                break; //それ以降は無視します
            case 1 :
                kuji = "中吉";
                break;            
            // case 2 :
            //     kuji = "末吉";
            //     break;
            // case 3 :
            //     kuji = "小吉";
            //     break;   
            case 4 :
                kuji = "吉";
                break;
            case 5 :
                kuji = "凶";
                break;
            case 2 :
            case 3 :
            case 6 :
                kuji = "大凶";
                break;                         
        }
        document.getElementById("show").innerHTML = kuji;
        count--;
    }
    else{
        document.getElementById("show").innerHTML = "もう引けいないよ！"
    }
}
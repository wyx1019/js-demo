var count = 5 ; //5回制限する
var kuji = ["大吉","中吉","末吉","小吉","吉","凶","大凶"]

function omikuji(){
    var dt;

    if (count > 0 ) {
        dt =Math.floor(Math.random() * 7)      
        document.getElementById("show").innerHTML = kuji[dt];
        count--;
    }
    
    else{
        document.getElementById("show").innerHTML = "もう引けいないよ！"
    }
}
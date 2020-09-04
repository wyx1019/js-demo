function keisan(){
    var inputH = document.getElementById("h").value;
    var inputW = document.getElementById("w").value;
    
    var hm = inputH / 100;
    var bmi = inputW / (hm * hm);
    var msg;
    if(bmi < 18.5 )   //｛｝なし → 処理が1つしかない時は省略できる
        msg = "低体重";
    else if( bmi >= 18.5 && bmi < 25 )
        msg ="普通体重"
    else if( bmi >= 25 && bmi < 30 )
        msg ="肥満(1度)";
    else if ( bmi >= 30 && bmi < 35 )
        msg ="肥満(2度)";
    else if ( bmi >= 35 && bmi < 40 ) 
        msg ="肥満(3度)";
    else
        msg ="肥満(4度)";
    bmi = "BMI：" + bmi.toFixed(1) + "" + msg; // toFixed(1) → 小数点第1位まで 四捨五入される
    document.getElementById("show").innerHTML = bmi; // 指定した場所にbmiを差し込む

}
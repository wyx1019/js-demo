window.onload = function () {
  setInterval("showCount()", 1000);
};

function showCount() {
  var nowDate = new Date(); //Date() 現在の日付を取得する
  var now = nowDate.getTime(); //日時データをミリ秒に変化する
  var tDate = new Date("2020/8/20 10:00:00"); //日付を指定する monthは０からカウントする
  // console.log(tDate);
  var t = tDate.getTime();
  var diffDate = t - now; //指定した日時と現在の日時の差分

  var Dday = Math.floor(diffDate / (1000 * 60 * 60 * 24)); //diffDate の中に何日ある
  diffDate = diffDate % (1000 * 60 * 60 * 24); // diffDate の中に何日ある？割れない分を新たなdiffDateにする
  var Dhour = Math.floor(diffDate / (1000 * 60 * 60)); //diffDate の中に何時間ある
  diffDate = diffDate % (1000 * 60 * 60); //diffDate の中に何時間ある 割れない分を新たなdiffDateにする
  var Dmin = Math.floor(diffDate / (1000 * 60));
  diffDate = diffDate % (1000 * 60);
  var Dsec = Math.floor(diffDate / 1000);

  if (t > now) {
    document.getElementById("day").innerHTML = Dday;
    document.getElementById("hour").innerHTML = Dhour;
    document.getElementById("min").innerHTML = Dmin;
    document.getElementById("sec").innerHTML = Dsec;
  } else if (Dday == -1 && (Dhour <= 0) | (Dmin <= 0) && Dsec <= 0) {
    document.getElementById("countdown").innerHTML = "開催日です";
  } else {
    document.getElementById("countdown").innerHTML = "終了しました";
  }
}

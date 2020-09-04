    // 此方法后台控制处会重复执行两次
    // 到达设定时间闹铃响起
    var flag = 0,
        ms = 0,
        min = 0,
        sec = 0;

    function timerOn() {
        flag++;
        var setMin = document.getElementById("setMin").value;
        var setSec = document.getElementById("setSec").value;
        var btn0 = document.getElementsByTagName("button")[0];
        var timer = setInterval(function () {
            ms++;
            if (ms == 60) {
                sec++;
                ms = 0;
            };
            if (sec == 60) {
                min++;
                sec = 0;
            };
            if (flag == 0) {
                ms = 0;
                sec = 0;
                min = 0;
                btn0.innerHTML = "Start";
            }
            if (flag % 2 !== 0) {
                btn0.innerHTML = "Stop";
            } else {
                btn0.innerHTML = "Start";
            }
            // 以上条件语句可简化
            document.getElementById("ms").value = ms;
            document.getElementById("sec").value = sec;
            document.getElementById("min").value = min;
            if (min == setMin && sec == setSec || flag % 2 == 0) {
                clearInterval(timer);
                console.log("stop");
            };
        }, 1000 / 60);
    }

    function timerOff() {
        flag = 0;
        document.getElementById("ms").value = ms = 0;
        document.getElementById("sec").value = sec = 0;
        document.getElementById("min").value = min = 0;
    }
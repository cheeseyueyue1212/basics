function updateEndTime() {

　　//当前时间,距1970年1月1日的秒数
　　var date = new Date();
　　var time = (date.getTime())/1000; 

　　//到期时间,可由后台传

　　var end_time = 1599744121.104;

　　//计算时间差并换算
　　var lag = end_time - time;
　　var second = Math.floor(lag % 60);
　　var minite = Math.floor((lag / 60) % 60);
　　var hour = Math.floor((lag / 3600) % 24);
　　var day = Math.floor((lag / 3600) / 24);

　　//页面显示
    var div = document.getElementsByClassName('myDiv')[0]

    div.innerHTML = day + "天" + hour + "时" + minite + "分" + second + "秒";

　　//定时器

　　setTimeout("updateEndTime()", 1000);
}

updateEndTime();


//eg:  just look look
var showtime = function () {
    var nowtime = new Date(),  //获取当前时间
        endtime = new Date("2020/8/8");  //定义结束时间
    var lefttime = endtime.getTime() - nowtime.getTime(),  //距离结束时间的毫秒数
        leftd = Math.floor(lefttime/(1000*60*60*24)),  //计算天数
        lefth = Math.floor(lefttime/(1000*60*60)%24),  //计算小时数
        leftm = Math.floor(lefttime/(1000*60)%60),  //计算分钟数
        lefts = Math.floor(lefttime/1000%60);  //计算秒数
    return leftd + "天" + lefth + ":" + leftm + ":" + lefts;  //返回倒计时的字符串
}
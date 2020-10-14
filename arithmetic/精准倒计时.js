    // 传入需要倒计时的秒数
    function countDown(times) {
        // 时间间隔 1秒
        const interval = 1000;
        // 计算时间，转化为毫秒
        let ms = times * 1000;
        let count = 0;
        const startTime = new Date().getTime();
        const endTime = startTime + ms;
        let timeCounter;
        timeCounter = setTimeout(countDownStart, interval)
        function countDownStart() {
            count++
            const offset = new Date().getTime() - (startTime + count * interval); //几个一分钟已经过去了
            
            // 计算剩余时间
            const diff = endTime - new Date().getTime();
            const h = Math.floor(diff / (60 * 1000 * 60));
            const hdiff = diff % (60 * 1000 * 60);
            const m = Math.floor(hdiff / (60 * 1000));
            const mdiff = hdiff % (60 * 1000);
            const s = mdiff / (1000);
            const sCeil = Math.ceil(s);
            const sFloor = Math.floor(s);


            let nextTime = interval - offset;
            if (nextTime < 0) {
                nextTime = 0
            }
            ms = ms - interval;
            console.log(`误差：${offset} ms，下一次执行：${nextTime} ms 后，离活动开始还有：${ms} ms`);
            console.log('时：' + h, '分：' + m, '毫秒：' + s, '秒向上取整：' + sCeil)
            if (ms < 0) {
                clearTimeout(timeCounter)
                console.log('此处执行自己想要的操作')
            } else {
                timeCounter = setTimeout(countDownStart, nextTime)
            }
        }
    }

    //继续线程占用
    setInterval(function(){ 
        var j = 0; 
        while(j++ < 100000000); 
    }, 0); 
 

    countDown(new Date().getTime() + 100000)

    //参考文档：https://www.xuanfengge.com/js-realizes-precise-countdown.html
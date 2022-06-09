var img = document.getElementById("img");
        //设置一个变量，负责切换图片，作为索引值
        var index = 0;
        //设置一个变量来存储定时器的返回值
        var t = null;
        //定义一个数组来存储照片的地址
        var imgPath = ["pic/team2.jpg", "pic/team2.jpg", "pic/team2.jpg", "pic/team2.jpg", "pic/team2.jpg"]
        function changeImg() {
            //我们用三目运算符
            index = index>=(imgPath.length-1)?0:++index;
            img.src = imgPath[index];
            // 或者是if判断
            // if (index>=imgPath.length-1){
            //     index=0;
            //     img.src = `${imgPath[index]}`;
            // } else {
            //      index++;
            //     img.src = `${imgPath[index]}`
            // }
        }
        //上一张
        function changeImg1() {
            //同上
            index= index<=0?(imgPath.length-1) : --index;
            img.src =imgPath[index]
            //下面这个if判断也可以
            // if (index > 0 && index <= 8) {
            //     index--;
            //     img.src = `${imgPath[index]}`;
            // } else if (index <= 0) {
            //     index = 8;
            //     img.src = `${imgPath[index]}`
 
            // }
        }
        //自动播放
       function autoplay1() {
               t= setInterval(() => {
                   //直接将下一张的方法放在里面
                    changeImg()
                }, 2000)}//2秒调用一次
        function autostop1(){
            //清除定时器
            clearInterval(t);
        }
/**
 * Created by Lenovo on 2017/9/12.
 */
//避免污染全局变量
(function () {
    //1.食物对象(随机位置，重新生成)
    //a.初始化
    //b.删除

    //1.食物对象(随机位置，重新生成)
    function Food(width,height,top,left,color){//1.宽高;  2.位置;   3.颜色;
        //默认值
        this.width = width || 20;
        this.height = height || 20;
        this.top = top || 0;
        this.left = left || 0;
        this.color = color || "green";
    }

    //a.初始化（放到map中）
    var div = null;
    Food.prototype.init = function (map) {
        //删除老的，在生成新的;
        remove(map);
        //创建div，作为食物，给定样式
        div = document.createElement("div");
        div.style.width = this.width+"px";
        div.style.height = this.height+"px";
        div.style.background = this.color;
        //位置！！！(随机)（进准赋值）(20为单位)
        this.top = parseInt(Math.random()*(map.offsetHeight-this.height)/this.height)*this.height;
        this.left = parseInt(Math.random()*(map.offsetWidth-this.width)/this.width)*this.width;
        //this.top = 40;
        //this.left = 200;
        div.style.top = this.top +"px";
        div.style.left = this.left +"px";
        //定位
        div.style.position = "absolute";

        //放入到map中
        map.appendChild(div);
    }

    //b.删除（私有，自己用）
    function remove(map){//从map中把div移除
        //如果没有就不删除
        if(div != null){
            map.removeChild(div);
        }
    }

    //暴露给全局
    window.Food = Food;
})();
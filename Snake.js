/**
 * Created by Lenovo on 2017/9/12.
 */
//避免污染全局变量
(function () {
    //2.蛇对象(固定位置，移动)
        //a.初始化
        //b.删除
        //c.移动


    //2.蛇对象(固定位置，移动)
    function Snake(width,height,direction){//1.宽高;   2.身体(对象-位置和颜色)   3.方向
        this.width = width || 20;
        this.height = height || 20;
        this.body = [
            //位置和颜色：
            {top: 2,left: 3,color:"red"},//头
            {top: 2,left: 2,color:"orange"},//身体
            {top: 2,left: 1,color:"orange"} //身体
        ];//数组组成，里面都是对象
        this.direction = direction || "right";
    }

    //a.初始化(删除旧的，放入map)
    var arr = [];
    Snake.prototype.init = function (map) {
        //删除旧的
        remove(map);
        //生成很多div放入map，因为不知一个身体;
        for(var i=0;i<this.body.length;i++){
            var div = document.createElement("div");
            div.style.width = this.width +"px";
            div.style.height = this.height +"px";
            //位置写上，方向现在不用;
            div.style.top = this.body[i].top*this.height+"px";
            div.style.left = this.body[i].left*this.width+"px";
            //背景色和定位
            div.style.background = this.body[i].color;
            div.style.position = "absolute";
            //添加到map中
            map.appendChild(div);
            arr.push(div);
        }

    }

    //b.删除(私有)
    function remove(map){
        //删除的不是一个
        for(var i=0;i<arr.length;i++){
            map.removeChild(arr[0]);
            arr.shift();
            i--;
        }
    }

    //c.移动(删除旧的蛇，画出新的蛇;)
    Snake.prototype.move = function (map,food) {
        //删除旧的蛇
        remove(map);

        //第二个开始后面的继承前面的位置;   第一个由方向决定，xy值+1/-1;
        //a.从后往前;     b.把前面的赋值给后面;   c.第一个不算;
        for(var i=this.body.length-1;i>=1;i--){
            //b.把前面的赋值给后面;
            this.body[i].top = this.body[i-1].top;
            this.body[i].left = this.body[i-1].left;
        }

        //第一个由方向决定，xy值+1/-1;
        switch (this.direction){
            case "right":
                this.body[0].left += 1;
                break;
            case "left":
                this.body[0].left -= 1;
                break;
            case "top":
                this.body[0].top -= 1;
                break;
            case "bottom":
                this.body[0].top += 1;
                break;
        }

        //吃到食物怎么办
            //食物和头坐标相同
        var headx = this.body[0].left*this.width;//乘宽
        var heady = this.body[0].top*this.height;//乘高
        if(food.left==headx && food.top == heady){
            //重新生成食物;
            food.init(map);
            //在蛇的身体的最末尾添加一部分;（和最后一部分参数相同）
            var last = this.body[this.body.length-1];
            var obj = {
                top: last.top,
                left: last.left,
                color:last.color
            };
            this.body.push(obj);
        }

        //画出新的蛇
        this.init(map);
    }


    //暴露给全局
    window.Snake = Snake;
})();
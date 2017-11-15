/**
 * Created by Lenovo on 2017/9/12.
 */
//避免污染全局变量
(function () {
    //3.游戏对象(创建，调用开始)
        //a.开始(对外)
        //b.定时器移动;
        //c.按键变向;

    //3.游戏对象(创建，调用开始)
    function Game(map){//只需要map；食物和蛇我们自己生成;
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
    }
    //a.开始(对外)
    Game.prototype.start = function () {
        //生成食物和蛇
        this.food.init(this.map);
        this.snake.init(this.map);
        //b.定时器移动;(小蛇快跑)
        snakeRun(this.food,this.snake,this.map);
        //c.按键变向;(私有)
        keyCtrl(this.snake);
    }

    //b.定时器移动;(私有)
    function snakeRun(food,snake,map){
        var timer = setInterval(function () {
            //小蛇移动(私有)
            snake.move(map,food);
            //撞墙处理;
                //蛇头的值不能大于最大值，小于最小值;
            var y = snake.body[0].top*snake.height;
            var x = snake.body[0].left*snake.width;
            if(x<0 || x>map.offsetWidth-snake.width){
                alert("Game over!");
                clearInterval(timer);
            }
            if(y<0 || y>map.offsetHeight-snake.height){
                alert("Game over!");
                clearInterval(timer);
            }

        },200);
    }


    //c.按键变向;(私有)
    function keyCtrl(snake){
        //按键改变snake中的方向属性
        document.onkeydown = function (event) {
            event = event || window.event;
            switch (event.keyCode){
                case 37: snake.direction="left";break;
                case 38: snake.direction="top";break;
                case 39: snake.direction="right";break;
                case 40: snake.direction="bottom";break;
            }
        }
    }

    //暴露给全局
    window.Game = Game;
})();
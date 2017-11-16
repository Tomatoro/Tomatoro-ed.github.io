/**
 * Created by 84295 on 17/9/16.
 */




(function(){

    function Game (map){
        this.food = new Food();
        this.snake = new Snake();
        this.map =map;
    }
    
    
    Game.prototype.start= function () {
        this.food.inn(this.map);
        this.snake.inn(this.map);
        snakeMoveOfTimer(this.snake,this.food,this.map);
        pressKey(this.snake);

    }

    function snakeMoveOfTimer(snake,food,map){
        //she  yidong
        var timer =setInterval(function () {
            snake.move(map,food);
            // panduan
            var headx = snake.body[0].left * snake.width;
            var heady = snake.body[0].top * snake.height;

            if(headx < 0 || headx > map.offsetWidth-snake.width){
                alert("Game Over");
                clearInterval(timer);
            }
            if(heady < 0 || heady > map.offsetHeight-snake.height){
                alert("Game Over");
                clearInterval(timer);
            }
        },150);

    }


    function pressKey(snake){
        document.onkeydown= function (event) {
            event=event||window.event;
            switch(event.keyCode){
                case 37 :snake.direction="left";break;
                case 38 :snake.direction="top";break;
                case 39 :snake.direction="right";break;
                case 40 :snake.direction="bottom";break;
            }
        }
    }



    window.Game =Game;
})()

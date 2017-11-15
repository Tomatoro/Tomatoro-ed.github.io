/**
 * Created by Lenovo on 2017/9/12.
 */
//������Ⱦȫ�ֱ���
(function () {
    //3.��Ϸ����(���������ÿ�ʼ)
        //a.��ʼ(����)
        //b.��ʱ���ƶ�;
        //c.��������;

    //3.��Ϸ����(���������ÿ�ʼ)
    function Game(map){//ֻ��Ҫmap��ʳ����������Լ�����;
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
    }
    //a.��ʼ(����)
    Game.prototype.start = function () {
        //����ʳ�����
        this.food.init(this.map);
        this.snake.init(this.map);
        //b.��ʱ���ƶ�;(С�߿���)
        snakeRun(this.food,this.snake,this.map);
        //c.��������;(˽��)
        keyCtrl(this.snake);
    }

    //b.��ʱ���ƶ�;(˽��)
    function snakeRun(food,snake,map){
        var timer = setInterval(function () {
            //С���ƶ�(˽��)
            snake.move(map,food);
            //ײǽ����;
                //��ͷ��ֵ���ܴ������ֵ��С����Сֵ;
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


    //c.��������;(˽��)
    function keyCtrl(snake){
        //�����ı�snake�еķ�������
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

    //��¶��ȫ��
    window.Game = Game;
})();
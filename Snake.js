/**
 * Created by 84295 on 17/9/16.
 */


(function () {

    function Snake(width, height, direction) {
        this.width = width || 20;
        this.height = height || 20;
        this.body = [
            {top: 2, left: 4, color: "#CC3367"},
            {top: 2, left: 3, color: "#2088A1"},
            {top: 2, left: 2, color: "#2088A1"}
        ];
        this.direction = direction || "right";
    }

    var arr = [];
    Snake.prototype.inn = function (map) {
        removeSnake(map);
        for (var i = 0; i < this.body.length; i++) {
            var newDiv = document.createElement("div");
            newDiv.style.width = this.width + "px";
            newDiv.style.height = this.height + "px";
            newDiv.style.position = "absolute";
            newDiv.style.top = this.body[i].top * this.height + "px";
            newDiv.style.left = this.body[i].left * this.width + "px";
            newDiv.style.backgroundColor = this.body[i].color;
            newDiv.style.borderRadius = 5 + "px";

            map.appendChild(newDiv);
            arr.push(newDiv);

        }
    }

    function removeSnake(map) {
        for (var i = 0; i < arr.length; i++) {
            map.removeChild(arr[0]);
            arr.shift();
            i--;
        }

    }

    Snake.prototype.move = function (map, food) {
        //删除旧蛇
        removeSnake(map);
        //身体的位置
        for (var i = this.body.length - 1; i >= 1; i--) {
            this.body[i].left = this.body[i - 1].left;
            this.body[i].top = this.body[i - 1].top;
        }
        //头的位置
        switch (this.direction) {
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
        //吃食物 身体的变化
        var headx = this.body[0].left * this.width;
        var heady = this.body[0].top * this.height;
        var last = this.body[this.body.length - 1];

        if (headx == food.left && heady == food.top) {
            food.inn(map);
            var obj = {
                top: last.top,
                left: last.left,
                color: last.color
            };

            this.body.push(obj);
        }
        //生成一个新蛇
        this.inn(map);

    }


    window.Snake = Snake;

})()
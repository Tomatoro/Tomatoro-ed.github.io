/**
 * Created by 84295 on 17/9/16.
 */
    //需要一个食物对象;
(function(window){
    function Food (width,height,top,left,bg){
        this.width=width ||20 ;
        this.height = height || 20;
        this.top = top || 0;
        this.left = left || 0;
        this.bg=bg ||"#984ACC";

    }
    var newDiv = null;
    Food.prototype.inn= function (map) {
        removeFood(map);
        newDiv = document.createElement("div");

        newDiv.style.width = this.width +"px";
        newDiv.style.height =  this.height +"px";
        newDiv.style.backgroundColor =this.bg;
        this.top = parseInt(Math.random()*(map.offsetHeight-this.height)/this.height)*this.height;
        this.left = parseInt(Math.random()*(map.offsetWidth-this.width)/this.width)*this.width;
        newDiv.style.top = this.top+"px";
        newDiv.style.left = this.left+"px";
        newDiv.style.borderRadius = 5+"px";
        newDiv.style.position ="absolute";
        map.appendChild(newDiv);
    }
    function removeFood(map){
        if(newDiv != null){
            map.removeChild(newDiv);
        }
    }

    window.Food = Food;
})(window);
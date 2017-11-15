/**
 * Created by Lenovo on 2017/9/12.
 */
//������Ⱦȫ�ֱ���
(function () {
    //2.�߶���(�̶�λ�ã��ƶ�)
        //a.��ʼ��
        //b.ɾ��
        //c.�ƶ�


    //2.�߶���(�̶�λ�ã��ƶ�)
    function Snake(width,height,direction){//1.���;   2.����(����-λ�ú���ɫ)   3.����
        this.width = width || 20;
        this.height = height || 20;
        this.body = [
            //λ�ú���ɫ��
            {top: 2,left: 3,color:"red"},//ͷ
            {top: 2,left: 2,color:"orange"},//����
            {top: 2,left: 1,color:"orange"} //����
        ];//������ɣ����涼�Ƕ���
        this.direction = direction || "right";
    }

    //a.��ʼ��(ɾ���ɵģ�����map)
    var arr = [];
    Snake.prototype.init = function (map) {
        //ɾ���ɵ�
        remove(map);
        //���ɺܶ�div����map����Ϊ��֪һ������;
        for(var i=0;i<this.body.length;i++){
            var div = document.createElement("div");
            div.style.width = this.width +"px";
            div.style.height = this.height +"px";
            //λ��д�ϣ��������ڲ���;
            div.style.top = this.body[i].top*this.height+"px";
            div.style.left = this.body[i].left*this.width+"px";
            //����ɫ�Ͷ�λ
            div.style.background = this.body[i].color;
            div.style.position = "absolute";
            //��ӵ�map��
            map.appendChild(div);
            arr.push(div);
        }

    }

    //b.ɾ��(˽��)
    function remove(map){
        //ɾ���Ĳ���һ��
        for(var i=0;i<arr.length;i++){
            map.removeChild(arr[0]);
            arr.shift();
            i--;
        }
    }

    //c.�ƶ�(ɾ���ɵ��ߣ������µ���;)
    Snake.prototype.move = function (map,food) {
        //ɾ���ɵ���
        remove(map);

        //�ڶ�����ʼ����ļ̳�ǰ���λ��;   ��һ���ɷ��������xyֵ+1/-1;
        //a.�Ӻ���ǰ;     b.��ǰ��ĸ�ֵ������;   c.��һ������;
        for(var i=this.body.length-1;i>=1;i--){
            //b.��ǰ��ĸ�ֵ������;
            this.body[i].top = this.body[i-1].top;
            this.body[i].left = this.body[i-1].left;
        }

        //��һ���ɷ��������xyֵ+1/-1;
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

        //�Ե�ʳ����ô��
            //ʳ���ͷ������ͬ
        var headx = this.body[0].left*this.width;//�˿�
        var heady = this.body[0].top*this.height;//�˸�
        if(food.left==headx && food.top == heady){
            //��������ʳ��;
            food.init(map);
            //���ߵ��������ĩβ���һ����;�������һ���ֲ�����ͬ��
            var last = this.body[this.body.length-1];
            var obj = {
                top: last.top,
                left: last.left,
                color:last.color
            };
            this.body.push(obj);
        }

        //�����µ���
        this.init(map);
    }


    //��¶��ȫ��
    window.Snake = Snake;
})();
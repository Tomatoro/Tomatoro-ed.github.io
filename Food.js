/**
 * Created by Lenovo on 2017/9/12.
 */
//������Ⱦȫ�ֱ���
(function () {
    //1.ʳ�����(���λ�ã���������)
    //a.��ʼ��
    //b.ɾ��

    //1.ʳ�����(���λ�ã���������)
    function Food(width,height,top,left,color){//1.���;  2.λ��;   3.��ɫ;
        //Ĭ��ֵ
        this.width = width || 20;
        this.height = height || 20;
        this.top = top || 0;
        this.left = left || 0;
        this.color = color || "green";
    }

    //a.��ʼ�����ŵ�map�У�
    var div = null;
    Food.prototype.init = function (map) {
        //ɾ���ϵģ��������µ�;
        remove(map);
        //����div����Ϊʳ�������ʽ
        div = document.createElement("div");
        div.style.width = this.width+"px";
        div.style.height = this.height+"px";
        div.style.background = this.color;
        //λ�ã�����(���)����׼��ֵ��(20Ϊ��λ)
        this.top = parseInt(Math.random()*(map.offsetHeight-this.height)/this.height)*this.height;
        this.left = parseInt(Math.random()*(map.offsetWidth-this.width)/this.width)*this.width;
        //this.top = 40;
        //this.left = 200;
        div.style.top = this.top +"px";
        div.style.left = this.left +"px";
        //��λ
        div.style.position = "absolute";

        //���뵽map��
        map.appendChild(div);
    }

    //b.ɾ����˽�У��Լ��ã�
    function remove(map){//��map�а�div�Ƴ�
        //���û�оͲ�ɾ��
        if(div != null){
            map.removeChild(div);
        }
    }

    //��¶��ȫ��
    window.Food = Food;
})();
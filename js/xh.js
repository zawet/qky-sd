var time1=null;
var poY=0;
var box=document.getElementById("sg-xh");
var w=box.offsetWidth;
var h=box.offsetHeight;
var xhMaxw=25;
    //生成雪花
    function createSnow(l,t,s,id,xhsrc){
        var newNode=document.createElement("div");
         newNode.style.height=s+"px";
         newNode.style.width=s+"px";
         newNode.style.left=l+"px";
         newNode.style.top="0";
         newNode.style.background=xhsrc;
         newNode.style.backgroundSize="100% 100%";
         id.appendChild(newNode);
         startMove(newNode,id);
    }
    //雪花下落
    function startMove(obj,id){
        var poY=obj.offsetTop;//获取对象到顶部边宽的距离
        var time2=null;
        function move(){
            poY++;
            obj.style.top=poY+"px";
            if(poY>h){//当雪花超出容器时的处理事件
                clearInterval(time2);//清除计时器
                id.removeChild(obj);//删除超出容器的节点对象
            }
        }
        time2=setInterval(move,10);
    }
    function xh(id,src){
        setInterval(function(){
            var le=parseInt(Math.random()*h);//随机生成位置及宽高
            var to=parseInt(Math.random()*w);
            var size=parseInt(Math.random()*10+(xhMaxw-10));
            createSnow(le,to,size,id,src);
        },300);
        
    }
    
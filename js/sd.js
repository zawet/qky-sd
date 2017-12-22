
var manifest;
var preload;



$(function () {
    setupManifest();
    startPreload();
});

function toStart(){
    //console.log(preload._loadItemsById);
    $(".audio_but").click(function(){
        if($(this).attr("isc")=="no"){
            $("#sd-audio").get(0).pause();
            $(this).removeClass("xz");
            $(this).attr("isc","yes");
        }else{
            $("#sd-audio").get(0).play();
            $(this).addClass("xz");
            $(this).attr("isc","no");
        }   
    });

    var imgids=preload._loadItemsById;
    setImg(imgids);
    dh();
    
}

function setImg(obj){
    for(var key in obj){
        //console.log(key);
        $("."+key).html(preload.getResult(key));    
    }  
}

function dh(){
    $(".sd-oldman").addClass("fadeInRight");
    setTimeout(function(){
        $(".hand").addClass("hui");
    },1000);
    setTimeout(function(){
        $(".sd-present.zero").removeClass("op0").addClass("bounceIn");
        xh(box,"url('images/xh.png')");
        xh(box,"url('images/xh2.png')");
        
    },2500);
    setTimeout(function(){
        togun();
    },3000);
    setTimeout(function(){
        $(".sd-family").removeClass("op0").addClass("fadeIn").addClass("yc2");
    },5000);
    setTimeout(function(){
        $(".sd-teacher").removeClass("op0").addClass("fadeIn").addClass("yc2");
    },10000);
    setTimeout(function(){
        $(".sd-bottom").removeClass("op0").addClass("slideInUp").addClass("yc2");
    },12000);
    setTimeout(function(){
        $(".sd-xr").removeClass("op0");
        $(".sd-qr").removeClass("op0"); 
    },14000);
    setTimeout(function(){
        huang();
    },14500);

    setTimeout(function(){
        $(".sd-bottom .sd-present").addClass("trn").removeClass("op0").addClass("zha");
    },21000);
    
    setTimeout(function(){
        $(".sd-bottom .sd-present").removeClass("zha");
    },30000);
    setTimeout(function(){
        $(".sd-present").addClass("bounceOut");
    },30500);
    setTimeout(function(){
        $(".bottom-txt").removeClass("op0").addClass("bounceIn").addClass("yc3");
    },31000);
}

function togun(){
    var bw=$("body").width();
    var bh=$("body").height();
    var mh=$(".sd-main").outerHeight();
    var minsmt=-(mh-bh);
    var smtop=0;
    var pstop=$(".sd-present").offset().top;
    var psleft=$(".sd-present").offset().left;
    var psdistleft=psleft;
    
    var smt=setInterval(function(){
        smtop--;
        $(".sd-main").css("top",smtop+"px");
        if(smtop<=minsmt) clearInterval(smt);
    },20);
    var pst=setInterval(function(){
        pstop++;
        
        //if(psleft<200)psleft=psleft+5;else if(psleft>20) psleft=psleft-5; 
        //console.log(psleft);
        //$(".sd-present.zero").css({"top":pstop+"px","left":psleft+"px"});
        $(".sd-present.zero").css({"top":pstop+"px"});
        if(pstop>=(mh-160)) clearInterval(pst);
    },20);  
}

function huang(){
    $(".sd-xr").addClass("wobble");
    $(".sd-qr").addClass("wobble");
}

//定义相关JSON格式文件列表
function setupManifest() {
    onemf= [
        {src: "images/bg.png",id: "bg"},
        {src: "images/xh.png",id: "xh"},
        {src: "images/xh2.png",id: "xh2"},
        {src: "images/bottom.png",id: "bottom"},
        {src: "images/bottom_snow.png",id: "bottom_snow"},
        {src: "images/choose_class_present.png",id: "choose_class_present"},
        {src: "images/classroom_present.png",id: "classroom_present"},
        {src: "images/comment_present.png",id: "comment_present"},
        {src: "images/exam_present.png",id: "exam_present"},
        {src: "images/logo_present.png",id: "logo_present"},
        {src: "images/oa_present.png",id: "oa_present"},
        {src: "images/new_home_school_present.png",id: "new_home_school_present"},
        {src: "images/second_class.png",id: "second_class"},
        {src: "images/family.png",id: "family"},
        {src: "images/oldman.png",id: "oldman"},
        {src: "images/oldman_hand_down.png",id: "oldman_hand_down"},
        {src: "images/penguin.png",id: "penguin"},
        {src: "images/snow_man.png",id: "snow_man"},
        {src: "images/teacher.png",id: "teacher"}
    ];   
}


//开始预加载
function startPreload() {
    preload = new createjs.LoadQueue(true);
    //preload.on("fileload", handleFileLoad);
    preload.on("progress", handleFileProgress);
    preload.on("complete", loadComplete);
    preload.on("error", loadError);
    preload.loadManifest(onemf);

}

//处理单个文件加载
function handleFileLoad(event) {
    console.log("文件类型: " + event.item.type);
    if (event.item.id == "logo") {
        console.log("logo图片已成功加载");
    }
}

//处理加载错误：大家可以修改成错误的文件地址，可在控制台看到此方法调用
function loadError(evt) {
    console.log("加载出错！", evt.text);
}

//已加载完毕进度 
function handleFileProgress(event) {
    var p=preload.progress * 100 | 0;
    $(".bf").html(p + "%");
    if(p<=50){
         $(".pro.proright b").css("transform","rotateZ("+(p*3.6+225)+"deg)");
     }else{
         $(".pro.proleft b").css("transform","rotateZ("+(p*3.6+45)+"deg)");
    }
    
}

//全度资源加载完毕
function loadComplete(event) {
    $(".loadprogress").fadeOut(200);
    toStart();
   
}




$(window).on('resize', function () {});



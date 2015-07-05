window.addEventListener("load", function() {
  console.log("Hello World!");

});

var PLAY_TIME=8;
var BEAT=4;

var ongen=new Array(PLAY_TIME*BEAT);
var imgs=new Array(PLAY_TIME*BEAT);
var cur_imgs=new Array(PLAY_TIME*BEAT);
var cnt=PLAY_TIME*BEAT-1;
var prev_cnt;//=0;

var pos_img="./icons/icon16x16.png";
var neg_img="./icons/icon16x16inv.png";
var cur_img="./icons/icon16x16current.png";
var nul_img="./icons/icon16x16nul.png";

function play(){
    flag=false;
    if(ongen[cnt]){
        flag=true;
        document.querySelector("#kick0").play();
    }
    prev_cnt=cnt;
    cnt++;
    if(cnt>=PLAY_TIME*BEAT){ cnt=0; }
    cur_imgs[prev_cnt].src=nul_img;
    cur_imgs[cnt].src=cur_img;
    console.log(cnt);
    if(flag){
        //document.querySelector("#kick0").pause();
        document.querySelector("#kick0").currentTime=0;
    }
}

function init(){
    for(i=0; i<PLAY_TIME*BEAT; i++){
        var img=document.createElement('img');
        img.src=neg_img;
        document.getElementById("field").appendChild(img);
        ongen[i]=true;
        imgs[i]=img;

        var cur=document.createElement('img');
        cur.src=nul_img;
        document.getElementById("cur_field").appendChild(cur);
        cur_imgs[i]=cur;
    }
}

function start(){
    for(i=0; i<PLAY_TIME*BEAT; i++){
        ongen[i]=false;
    }
    init();
    setInterval("play()", 1000/BEAT);
}

function left(){
    var idx=cnt;
    ongen[idx]=!ongen[idx];
    console.log("bt"+idx);
    console.log(ongen[idx]);
    if(ongen[idx]){
        imgs[idx].src=neg_img;
    } else{
        console.log("change"+idx);
        imgs[idx].src=pos_img;
    }
}

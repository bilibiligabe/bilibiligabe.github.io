//随机弹窗
var tanchuang = Math.floor((Math.random() * 10) + 1);
if(tanchuang < 5){
    setTimeout(function a () {
        var tanchuang = document.getElementById("tanchuang");tanchuang.style.height = tanchuang.offsetHeight===0 ? 230+'px' : 0+'px';var djs = 10;document.getElementById("djs").innerHTML= djs;
        setTimeout(function b () {djs--;document.getElementById("djs").innerHTML= djs;}, 1000);setTimeout(function b () {djs--;document.getElementById("djs").innerHTML= djs;}, 2000);
        setTimeout(function b () {djs--;document.getElementById("djs").innerHTML= djs;}, 3000);setTimeout(function b () {djs--;document.getElementById("djs").innerHTML= djs;}, 4000);
        setTimeout(function b () {djs--;document.getElementById("djs").innerHTML= djs;}, 5000);setTimeout(function b () {djs--;document.getElementById("djs").innerHTML= djs;}, 6000);
        setTimeout(function b () {djs--;document.getElementById("djs").innerHTML= djs;}, 7000);setTimeout(function b () {djs--;document.getElementById("djs").innerHTML= djs;}, 8000);
        setTimeout(function b () {djs--;document.getElementById("djs").innerHTML= djs;}, 9000);setTimeout(function b () {djs--;document.getElementById("djs").innerHTML= djs;}, 10000);
        setTimeout(function b () {tanchuang.style.height = tanchuang.offsetHeight===0 ? 230+'px' : 0+'px';}, 10400);
        setTimeout(function b () {tanchuang.style.display = "none";}, 10900);
    }, 1000);
}
//返回顶部
function fhdb() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//关闭按钮
function guanbi(guanbi) {
    guanbi.style.display = "none";
}
//计算时间
var nowtime = new Date;
var time = nowtime.getTime();
var time1 = time - 1672406400000; //TIME:2020/12/30/21:20:00
var second = parseInt(time1 / 1000);
var minute = second / 60;
var hour = minute / 60;
var day = parseInt(hour / 24);
window.onload = function(){
    document.getElementById("time").innerHTML="网站已运行："+day+"天";
}
//菜单
function caidan (){
    var caidan = document.getElementById("caidan");
    var height = caidan.offsetHeight;
    if (height == 0){document.getElementById("caidan-guanbi").style.display="block";}
    caidan.style.height = height===0 ? 350+'px' : 0+'px';
    if (height == 350){document.getElementById("caidan-guanbi").style.display="none";}
}
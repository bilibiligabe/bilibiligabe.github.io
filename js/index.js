//随机弹窗
var tanchuang = Math.floor((Math.random() * 10) + 1);
if(tanchuang < 5){
    setTimeout(function a () {
        var tanchuang = document.getElementById("tanchuang");tanchuang.style.height = tanchuang.offsetHeight===0 ? 230+'px' : 0+'px';var djs = 15;document.getElementById("djs").innerHTML= djs;
        setTimeout(function b () {djs--;document.getElementById("djs").innerHTML= djs;}, 1000);setTimeout(function b () {djs--;document.getElementById("djs").innerHTML= djs;}, 2000);
        setTimeout(function b () {djs--;document.getElementById("djs").innerHTML= djs;}, 3000);setTimeout(function b () {djs--;document.getElementById("djs").innerHTML= djs;}, 4000);
        setTimeout(function b () {djs--;document.getElementById("djs").innerHTML= djs;}, 5000);setTimeout(function b () {djs--;document.getElementById("djs").innerHTML= djs;}, 6000);
        setTimeout(function b () {djs--;document.getElementById("djs").innerHTML= djs;}, 7000);setTimeout(function b () {djs--;document.getElementById("djs").innerHTML= djs;}, 8000);
        setTimeout(function b () {djs--;document.getElementById("djs").innerHTML= djs;}, 9000);setTimeout(function b () {djs--;document.getElementById("djs").innerHTML= djs;}, 10000);
        setTimeout(function b () {djs--;document.getElementById("djs").innerHTML= djs;}, 11000);setTimeout(function b () {djs--;document.getElementById("djs").innerHTML= djs;}, 12000);
        setTimeout(function b () {djs--;document.getElementById("djs").innerHTML= djs;}, 13000);setTimeout(function b () {djs--;document.getElementById("djs").innerHTML= djs;}, 14000);
        setTimeout(function b () {djs--;document.getElementById("djs").innerHTML= djs;}, 15000);setTimeout(function b () {tanchuang.style.height = tanchuang.offsetHeight===0 ? 230+'px' : 0+'px';}, 15400);
        setTimeout(function b () {tanchuang.style.display = "none";}, 15900);
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

//答题
function dati(){
    var datiban = document.getElementById("datiban");
    datiban.style.display = "block";
}
function answer(){
    var answer = document.getElementById("O3").value;
    if(answer == 'O114514') {
        alert('好臭啊（恼）');
        document.getElementById("tongguotishi").innerHTML= "恭喜通过，抽奖中…";
        setTimeout(function qiehuan () {
            document.getElementById("tongguotishi").innerHTML= "恭喜获得价值666元红包<b>碎片</b>*99,已收集<b>99%</b>";
        }, 2000);
    } else if (answer == 'O3') {
        alert('答对了');
        document.getElementById("tongguotishi").innerHTML= "恭喜通过，抽奖中…";
        setTimeout(function qiehuan () {
            document.getElementById("tongguotishi").innerHTML= "恭喜获得价值666元红包<b>碎片</b>*99,已收集<b>99%</b>";
        }, 2000);
    }else {
        alert('错误，请重试');
    };
}
var A = 99;
var B = 9;
function huoqu(){
    var answer = document.getElementById("O3").value;
    if (answer !== 'O114514' && answer !== 'O3'){return;}
    B = B/10;
    A = A+B;
    if (A > 99.99999999999991){
        document.getElementById("tongguotishi").innerHTML= "发生”神秘“错误";
        return;
    }
    document.getElementById("tongguotishi").innerHTML= "已收集<b>"+A+"%</b>";
}

//登录验证
var cookie = document.cookie;
if (cookie==""){
    console.log("未登录");
    var dlzt = 0;
}else{
    console.log("已登陆");
    var dlzt = 1;
}



//随机弹窗
var tanchuang = Math.floor((Math.random() * 10) + 1);
if(tanchuang < 5){
    setTimeout(function a () {
        var tanchuang = document.getElementById("tanchuang");tanchuang.style.height = tanchuang.offsetHeight===0 ? 230+'px' : 0+'px';
        var djs = 7;var djsrq = document.getElementById("djs");
        djsrq.innerHTML= djs;
        setTimeout(function b () {djs--;djsrq.innerHTML= djs;}, 1000);
        setTimeout(function b () {djs--;djsrq.innerHTML= djs;}, 2000);
        setTimeout(function b () {djs--;djsrq.innerHTML= djs;}, 3000);
        setTimeout(function b () {djs--;djsrq.innerHTML= djs;}, 4000);
        setTimeout(function b () {djs--;djsrq.innerHTML= djs;}, 5000);
        setTimeout(function b () {djs--;djsrq.innerHTML= djs;}, 6000);
        setTimeout(function b () {djs--;djsrq.innerHTML= djs;}, 7000);
        setTimeout(function b () {tanchuang.style.height = tanchuang.offsetHeight===0 ? 230+'px' : 0+'px';}, 7500);
        setTimeout(function b () {tanchuang.style.display = "none";}, 7900);
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
function time() {
    var nowtime = new Date;
    var time = nowtime.getTime();
    var time1 = time - 1672502400000; //TIME：2023/1/1/00:00:00
    var second = parseInt(time1 / 1000);
    var minute = second / 60;
    var hour = minute / 60;
    var day = parseInt(hour / 24);
    window.onload = function(){
        document.getElementById("time").innerHTML="网站已运行："+day+"天";
        document.getElementById("time1").innerHTML="网站已运行："+day+"天";
    }
}
//菜单1
function dncdzk(){
    var dncd = document.getElementById("dncd");
    dncd.style.height = 300+'px';
}
function dncdgb(){
    var dncd = document.getElementById("dncd");
    dncd.style.height = 0+'px';
}
//菜单2
function caidan (){
    var caidan = document.getElementById("caidan");
    var height = caidan.offsetHeight;
    if (height == 0){caidan.style.display="block";}
    document.getElementById("caidan-guanbi").style.display="block";
    setTimeout(function a () {caidan.style.height = height===0 ? 420+'px' : 0+'px';},100);
    if (height == 420){setTimeout(function a () {caidan.style.display="none";}, 400);}
}
//登录
function sign (){
    document.getElementById("denglu").style.display = "block";
    /*
    var btn=document.createElement("button");
    var t=document.createTextNode("CLICK ME");
    btn.appendChild(t);
    btn.id="a";
    document.body.appendChild(btn);
    */
}
//From and Cookie
function usernews (){
    //cookie
    var username = "user="+document.getElementById("username").value+";";
    var mail = "mail="+document.getElementById("mail").value+";";
    var password = "password="+document.getElementById("password").value+";";
    var expires ="expires=Sun Feb 18 2024 09:00:00 GMT;";
    document.cookie = username + expires +"path=/";
    if(document.getElementById("username").value == ""){alert('输入用户名！');return;}
    document.cookie = mail+ expires +"path=/";
    if(document.getElementById("mail").value == ""){alert('输入邮箱！');return;}
    document.cookie = password + expires +"path=/";
    if(document.getElementById("password").value == ""){alert('输入密码！');return;}
    var cookie = document.cookie;

    //from
    document.getElementById("from").submit();

    //close
    document.getElementById("denglu").style.display = "none";

    //sign in PC
    var yh = document.getElementById("yh");
    yh.style.display = "none";
    var yhm = document.getElementById("yhm");
    yhm.style.display = "block";

    //sign in MP
    var yh = document.getElementById("yh1");
    yh.style.display = "none";
    var yhm = document.getElementById("yhm1");
    yhm.style.display = "block";
}
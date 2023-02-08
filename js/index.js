//添加事件
var cookies = document.cookie;
if(cookies === ""){
    setTimeout(function () {document.getElementById("userCenter").addEventListener("click", sign);}, 1000);
}else{
    setTimeout(function () {document.getElementById("userCenter").removeEventListener("click", sign);}, 1000);
}
//验证浏览器
var userAgent = window.navigator.userAgent.match("DingTalk");
if(userAgent === "DingTalk"){alert("不要用钉钉浏览器或QQ浏览器打开")};

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
    var second = time1 / 1000;
    var minute = second / 60;
    var hour = minute / 60;
    var day = parseInt(hour / 24) + 1;
    window.onload = function(){
        document.getElementById("time").innerHTML="网站已运行："+day+"天";
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
//Sign in
function sign (){
    document.getElementById("denglu").style.display = "block";
}
//From and Cookie
function usernews (){
    var user = "user="+encodeURI(document.getElementById("user").value)+";";
    var mail = document.getElementById("mail").value;
    var password = document.getElementById("password").value;
    //verify
    if(user == ""){
        alert('输入用户名！');
        return;
    } else if(mail == ""){
        alert('输入邮箱！');
        return;
    } else if(password == ""){
        alert('输入密码！');
        return;
    } else if(mail.indexOf("@") == -1){
        alert('输入正确的邮箱！');
        return;
    } else if(mail.indexOf(".") == -1){
        alert('输入正确的邮箱！');
        return;
    } else if(/[\u4E00-\u9FA5\uFE30-\uFFA0]/.test(mail)){
        alert('邮箱不能带有汉字和特殊字符！');
        return;
    } else if(/[\u4E00-\u9FA5\uFE30-\uFFA0]/.test(password)){
        alert('密码不能带有汉字和特殊字符！');
        return;
    }

    //setCookie
    var expires ="expires=Sun Feb 18 2024 09:00:00 GMT;";
    document.cookie = user + expires +"path=/";
    //from
    document.getElementById("form").submit();
    //close
    document.getElementById("denglu").style.display = "none";
}
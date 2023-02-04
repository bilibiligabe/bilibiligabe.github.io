var cookies=document.cookie.split("; ");  //把cookie自带的"; "存为数组并改为","
if(cookies !== ""){
    var name = decodeURI(cookies[0]);
    console.log(cookies[0]);
    var start = name.indexOf("=") + 1;
    var userName = name.slice(start);
    document.getElementById("username").innerHTML=userName;
}
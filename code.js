function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var time = ("0" + h).slice(-2)+":"+("0" + m).slice(-2)+":"+("0" + s).slice(-2);
    document.getElementById("Clock").textContent = time;
}
setInterval(showTime,1000);


function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var time = ("0" + h).slice(-2)+":"+("0" + m).slice(-2)+":"+("0" + s).slice(-2);
    document.getElementById("Clock").textContent = time;
}
setInterval(showTime,1000);
showQuote();
function showQuote(){
    var data;
    const Http = new XMLHttpRequest();
    const url='https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        // data=JSON.parse(Http.responseText)
        data=JSON.parse(Http.responseText);
        document.getElementById("Quote").textContent = data[Math.floor((Math.random() * 100))].quote;
        console.log(data[0].quote);

    }

}


// import './quotes.json'
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
    const url='http://quotes.rest/qod.json';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        data=JSON.parse(Http.responseText)
        document.getElementById("Quote").textContent = data.contents.quotes[0].quote;
        console.log(Http.responseText);
    }
    // quote="die u bitch";
    document.getElementById("Quote").textContent = quote;


}


window.onload=function(){
    var seconds=00;
    var tens=00;
    var Interval;
    var start=document.getElementById("start");
    var stop=document.getElementById("stop");
    var reset=document.getElementById("reset");
    var text_seconds=document.getElementById("seconds");
    var text_tens=document.getElementById("tens");

    start.onclick=function(){
       clearInterval(Interval);
       Interval=setInterval(startTimer,10);
    }
    stop.onclick=function(){
        clearInterval(Interval);
    }
    reset.onclick=function(){
        clearInterval(Interval);
        tens=00;
        seconds=00;
        text_seconds.innerHTML="00";
        text_tens.innerHTML="00";
    }

    function startTimer(){
        tens=tens+1;
        if(tens>=100){
            seconds=seconds+1;
            tens=0;
        }
        if(seconds<10){
        text_seconds.innerHTML="0"+seconds;
        }
        else{
            text_seconds.innerHTML=seconds;
        }
        if(tens<10){
            text_tens.innerHTML="0"+tens;
            }
        else{
                text_tens.innerHTML=tens;
            }
        
    }

}
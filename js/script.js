window.onload = function(){
    var counter = document.getElementById("number");
    var startButton = document.getElementById("start");
    var stopButton = document.getElementById("stop");
    var resetButton = document.getElementById("reset");
    var intervals;
    var count = 100;
    startButton.onclick = function(){
        intervals = setInterval(counterStart,1000);
    }
    stopButton.onclick = function(){
        clearInterval(intervals);
    }
    resetButton.onclick = function(){
        clearInterval(intervals);
        count = 100;
        counter.innerHTML = count;
    }
    function  counterStart(){
        count --;
        counter.innerHTML = count;
        if(count <0){
            clearInterval(intervals);
            count = 100;
            counter.innerHTML = count;
        }
    }
}
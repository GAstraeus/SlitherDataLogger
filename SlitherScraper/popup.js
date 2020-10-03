var logging = false;
var log_data = null;
var startButton = document.getElementById("startButton");

startStopLogging = function(){
    if(log_data != null){
        stop();
    } else {
    	  chrome.tabs.executeScript(null, {
    file: 'content.js'
  });
        change();
    }
}

change = function(){
var elem = document.getElementById("startButton");
if (elem.value=="Stop") elem.value = "Start";
else elem.value = "Stop";
}

stop = function(){
    clearTimeout(log_data);
    log_data = null;
}

startButton.addEventListener("click", startStopLogging);
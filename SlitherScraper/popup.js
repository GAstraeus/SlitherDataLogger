var logging = false;
var log_data = null;
var startButton = document.getElementById("startButton");

startStopLogging = function(){
    if(log_data != null){
        stop();
    } 
    else {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "start_logging"}, function(response) {});  
        });
        // chrome.windows.getCurrent(function (currentWindow) {
        //     chrome.tabs.query({ active: true, windowId: currentWindow.id }, function (activeTabs) {
        //         activeTabs.map(function (tab) {
        //             chrome.tabs.executeScript(tab.id, { file: 'content.js', allFrames: false });
        //         });
        //     });
        // });
    }
    change();
}


change = function(){
var elem = document.getElementById("startButton");
if (elem.value=="Stop") elem.value = "Start";
else elem.value = "Stop";
}

stop = function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {action: "stop_logging"}, function(response) {});  
    });
}

startButton.addEventListener("click", startStopLogging);
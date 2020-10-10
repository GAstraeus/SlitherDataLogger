function scan_scores(old_score, scoreElements){
	//document.getElementsByClassName("nsi")[39].style.opacity
	var scoreElements = document.getElementsByClassName("nsi");
	var your_rank = scoreElements[39].getElementsByTagName("span")[4].innerText;
	var total_players = scoreElements[39].getElementsByTagName("span")[6].innerText;
	var score = scoreElements[39].getElementsByTagName("span")[0].getElementsByTagName("span")[1].innerText;

	var p1 = scoreElements[36].getElementsByTagName("span")[0].textContent;
	var p2 = scoreElements[36].getElementsByTagName("span")[1].textContent;
	var p3 = scoreElements[36].getElementsByTagName("span")[2].textContent;
	var p4 = scoreElements[36].getElementsByTagName("span")[3].textContent;
	var p5 = scoreElements[36].getElementsByTagName("span")[4].textContent;
	var p6 = scoreElements[36].getElementsByTagName("span")[5].textContent;
	var p7 = scoreElements[36].getElementsByTagName("span")[6].textContent;
	var p8 = scoreElements[36].getElementsByTagName("span")[7].textContent;
	var p9 = scoreElements[36].getElementsByTagName("span")[8].textContent;
	var p10 = scoreElements[36].getElementsByTagName("span")[9].textContent;

	if (!(score === old_score))
		console.log(score);
	log_data = setTimeout(scan_scores,50, score,scoreElements); 
}

function send_data(){
	var ws = new WebSocket("ws://localhost:3330");
	ws.send("Message to send");
}

//scan_scores(0,scoreElements);
//send_data();

//setInterval
var interval = null; 
function test(){
	console.log("Yoyo");
}
chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
	if (msg.action == 'start_logging') {
		if (interval == null){
			var socket = io();
			//interval = setInterval(test, 50);
		}
			
		
			
	  sendResponse({farewell: "done"});
	}
	if (msg.action == 'stop_logging') {
		print("Stopping");
		clearInterval(interval);
		sendResponse({farewell: "done"});
	  }
  });
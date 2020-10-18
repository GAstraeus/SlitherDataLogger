var score = 0;
var reset = false
var interval;
var socket;

function scan_scores(){
	if (document.getElementsByClassName("nsi")[39].style.opacity >= 1 && !reset){
		socket.emit("birth");
		reset = true
	}
	else if (document.getElementsByClassName("nsi")[39].style.opacity < 1){
		reset = false
	}

	var scoreElements = document.getElementsByClassName("nsi");
	var your_rank = scoreElements[39].getElementsByTagName("span")[4].innerText;
	var total_players = scoreElements[39].getElementsByTagName("span")[6].innerText;
	old_score = score
	score = scoreElements[39].getElementsByTagName("span")[0].getElementsByTagName("span")[1].innerText;
	var p1 = scoreElements[36].getElementsByTagName("span")[0].textContent;
	// var p2 = scoreElements[36].getElementsByTagName("span")[1].textContent;
	// var p3 = scoreElements[36].getElementsByTagName("span")[2].textContent;
	// var p4 = scoreElements[36].getElementsByTagName("span")[3].textContent;
	// var p5 = scoreElements[36].getElementsByTagName("span")[4].textContent;
	// var p6 = scoreElements[36].getElementsByTagName("span")[5].textContent;
	// var p7 = scoreElements[36].getElementsByTagName("span")[6].textContent;
	// var p8 = scoreElements[36].getElementsByTagName("span")[7].textContent;
	// var p9 = scoreElements[36].getElementsByTagName("span")[8].textContent;
	// var p10 = scoreElements[36].getElementsByTagName("span")[9].textContent;
	if (!(score === old_score))
		send_data(score,your_rank,total_players,p1);
	//log_data = setTimeout(scan_scores,50, score,scoreElements); 
}


//scan_scores(0,scoreElements);
//send_data();

//setInterval

function test(){
	console.log("Yoyo");
}
chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
	if (msg.action == 'start_logging') {
		console.log(!interval)
		if (!interval){
			socket = io("http://localhost:8080");
			console.log("Connected to Server");
			interval = setInterval(scan_scores,50)
		}			
	  sendResponse({farewell: "done"});
	  
	}
	if (msg.action == 'stop_logging') {
		print("Stopping");
		clearInterval(interval);
		interval = null;
		sendResponse({farewell: "done"});
	  }
  });

  function send_data(score,your_rank,total_players,p1){
	var obj = new Object();
	obj.score = score;
	obj.rank = your_rank;
	obj.total_players  = total_players;
	obj.max_lobby_score = p1;
	var jsonString= JSON.stringify(obj);
	//socket.emit("log_score",'{"score":"'+score+'","rank":"'+your_rank+'","total_players":"'+total_players+'", "max_lobby_score":"'+p1+'"}')
	socket.emit("log_score",jsonString);
}

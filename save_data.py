from flask import Flask
import os
 
app = Flask(__name__)


userLogFile = userLogFile = open("userLogFile.txt", "a")
userAddHeader = False
leaderLogFile = userLogFile = open("LeaderLogFile.txt", "a")
leaderAddHeader = False

if userLogFile.tell() == 0:
    userLogFile.write("")
if leaderLogFile.tell() == 0:
    leaderLogFile.write("")


@app.route('/userScore', methods=['POST'])
def logUserScore():
    return 'Hello World'

@app.route('/leaderBoard', methods=['POST'])
def logLeaderBoard():
    return 'Hello World'
 
app.run(host='localhost', port=30000)
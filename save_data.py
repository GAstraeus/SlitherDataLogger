import os
import socketio
import json

from datetime import datetime
from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

output_file_path = "scores.csv"
output_file = open(output_file_path, "a")
if os.stat(output_file_path).st_size == 0:
    output_file.write("TIME,SCORE,RANK,TOTAL_PLAYERS,MAX_LOBBY_SCORE,TIME_ALIVE\n")

time_of_birth = datetime.now();
last_score = 100;

def export(dataframe):
    global output_file
    output_file.write(",".join(dataframe))


@socketio.on('connect')
def test_connect():
    print("Connected")

@socketio.on('birth')
def reset_time():
    global time_of_birth
    time_of_birth = datetime.now()
    print("----Time Reset")

@socketio.on('log_score')
def log_score(message):
    global time_of_birth
    global last_score
    data = json.loads(message)
    # if last_score <= int(data['score']):
    #     time_of_birth = datetime.now()
    #     last_score = int(data['score'])
    logtime = datetime.now()
    time_alive = str(logtime - time_of_birth)

    export((str(logtime),data["score"],data["rank"],data["total_players"],data["max_lobby_score"],time_alive+"\n"))

    
        
    

@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')
    global output_file
    output_file.close()
    output_file = open(output_file_path, "a")
    


if __name__ == '__main__':
    socketio.run(app,host="localhost", port=8080, debug=True)
    print("Started App")
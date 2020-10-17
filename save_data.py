import os
import socketio

from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on('connect')
def test_connect():
    print("Connected")

@socketio.on('test')
def test_connect(message):
    print(message)

@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')

if __name__ == '__main__':
    socketio.run(app,host="localhost", port=8080)
    print("Started App")
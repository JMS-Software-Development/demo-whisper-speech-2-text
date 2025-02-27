import os
import tempfile
import flask
from flask import request
from flask_cors import CORS
import whisper
import torch
import time 

app = flask.Flask(__name__)
CORS(app)


class DataStore():
    language = "dutch"
    model = "large" # set to "large" for better accuracy but slower inference
    device = "cuda" if torch.cuda.is_available() else "cpu"
    print("Using device: ", device)
    audio_model = whisper.load_model(model)

t = time.time()
data = DataStore()
print(f"Loading model took {time.time() - t} seconds")

@app.route('/transcribe', methods=['POST'])
def transcribe():
    if request.method == 'POST':
        #language = request.form['language']
        #model = request.form['model_size']
        start_time = time.time()
        print("Startinhg transcribing")
        audio_model = data.audio_model

        temp_dir = tempfile.mkdtemp()
        save_path = os.path.join(temp_dir, 'temp.wav')

        wav_file = request.files['audio_data']
        wav_file.save(save_path)

        result = audio_model.transcribe(save_path, language='dutch')

        print(result['text'])
        print(f"Transcribing took {time.time() - start_time} seconds")
        return result['text']
    else:
        return "This endpoint only processes POST wav blob"

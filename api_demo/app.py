from flask import Flask, jsonify, request
from nltk.corpus import wordnet
'''
Install NLTK :
    pip install nltk
Download the WordNet corpus
    Type python in terminal and then run the following commands,
    import nltk
    nltk.download('wordnet')
Run the script 
    python app.py
API URL
    http://your_ip_address:5000/meaning/hello
'''

app = Flask(__name__)

@app.route('/meaning/<word>', methods=['GET'])
def get_meaning(word):
    synsets = wordnet.synsets(word)
    if not synsets:
        return jsonify({"error": "Word not found"})
    meanings = [syn.definition() for syn in synsets]
    return jsonify({"word": word, "meanings": meanings})

if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True)

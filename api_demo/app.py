from flask import Flask, jsonify, request
from nltk.corpus import wordnet

app = Flask(__name__)

@app.route('/meaning', methods=['GET'])
def get_meaning():
    word = request.args.get('word')

    if word is None:
        return jsonify({"error": "Word parameter is missing"}), 400

    synsets = wordnet.synsets(word)

    if not synsets:
        return jsonify({"error": "Word not found"}), 404

    meanings = [syn.definition() for syn in synsets]

    return jsonify({"word": word, "meanings": meanings})

if __name__ == '__main__':
    app.run(debug=True)

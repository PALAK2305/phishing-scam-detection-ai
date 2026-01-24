from flask import Flask, request, jsonify
from flask_cors import CORS
import spacy
from pickle import load
import os

# 1. Setup paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "model.pkl")
VECTOR_PATH = os.path.join(BASE_DIR, "vector.pkl")

# 2. Load NLP model - FIXED: Added this line to prevent NameError
nlp = spacy.load("en_core_web_lg")

# 3. Load ML models
with open(MODEL_PATH, "rb") as f:
    model = load(f)

with open(VECTOR_PATH, "rb") as f:
    tv = load(f)

def clean_function(text):
    text = text.lower()
    doc = nlp(text) # Uses the nlp variable loaded above
    # Clean tokens: remove punctuation and stopwords, then lemmatize
    tokens = [t.lemma_ for t in doc if not t.is_punct and not t.is_stop]
    return " ".join(tokens)

app = Flask(__name__)
CORS(app) # Allows React (port 3000) to talk to Flask (port 5000)

@app.route("/api/analyze-text", methods=["POST"])
def analyze():
    data = request.get_json()
    text = data.get("text", "")
    
    if not text:
        return jsonify({"error": "No text provided"}), 400

    try:
        clean_text = clean_function(text)
        vector_text = tv.transform([clean_text])
        prediction = model.predict(vector_text)[0]
        
        # Standardize result for frontend
        final_result = "Not Spam" if prediction.lower() == "ham" else "Spam"

        return jsonify({
            "result": final_result,
            "original_text": text
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    print("✅ ScamGuard API is firing up... 🚀")
    app.run(debug=True, port=5000)
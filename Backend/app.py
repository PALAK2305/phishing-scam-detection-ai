from flask import * 
import spacy
from pickle import load

nlp = spacy.load("en_core_web_lg")

f = open("model.pkl" , "rb")
model = load(f)
f.close()

f = open("vector.pkl" , "rb")
tv = load(f)
f.close()

def clean_function(text):
    text = text.lower()
    text = nlp(text)
    text = [t for t in text]
    text = [t for t in text if not t.is_punct]
    text = [t for t in text if not t.is_stop]
    text = [t.lemma_ for t in text]
    text = [str(t) for t in text]
    text = " ".join(text)
    return text

app = Flask(__name__)



@app.route("/",methods=["GET","POST"])
def home():
    if request.method == "POST":
        text = request.form.get("text")
        clean_text = clean_function(text)
        vector_text = tv.transform([clean_text])
        result = model.predict(vector_text)
        result = result[0]
        if result.lower() =="ham":
            result = "Not Spam"
        return render_template ("home.html",result=result)
    else:
        return render_template("home.html")

if __name__ == "__main__":
    app.run(debug=True,use_reloader=True)
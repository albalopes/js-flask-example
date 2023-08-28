from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/questao04')
def questao04():
  return render_template('questao04.html')
  
app.run(host='0.0.0.0', port=81, debug=True)

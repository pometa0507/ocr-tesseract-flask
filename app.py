from flask import Flask, render_template, request, Response #追加
from PIL import Image
from io import BytesIO
import base64
import numpy as np
import pytesseract

app = Flask(__name__)

@app.route('/')
def index():

    return render_template('index.html') 

@app.route('/ocr_from_clipboard')
def ocr_from_clipboard():

    return render_template('ocr_from_clipboard.html') 

@app.route('/ocr_from_stream')
def ocr_from_stream():

    return render_template('ocr_from_stream.html') 

@app.route('/post', methods=['GET','POST']) 
def base64_post():
    
    print(request.method)
    
    if request.method == 'POST':
        img_data = request.form['data']
    else:
        return
    
    data = img_data.split(",")[1]   #base64部分の文字列を抽出
    data = data.replace('\n', '+').replace(' ', '+')  #改行とスペースを"+"に変換 base64対応

    #base64 -> Image
    im = Image.open(BytesIO(base64.b64decode(data)))
    #余白トリミング
    croprange = im.getbbox()
    nim = im.crop(croprange)

    text = pytesseract.image_to_string(nim, lang='jpn+eng', config='--psm 11')
    print(text)
    
    return Response(response=text, status=200)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

FROM python:3.8.3-slim

ENV DEBIAN_FRONTEND=noninteractive

COPY . /app
WORKDIR /app

RUN apt-get update  \
 && apt-get -y install \
    tesseract-ocr \
    tesseract-ocr-jpn \
 && apt-get clean  \
 && rm -rf /var/lib/apt/lists/* \
 && pip install -r requirements.txt

EXPOSE 5000

CMD ["python", "app.py"]

# docker build -t ocr-tesseract-flask .
# docker run -d -p 5000:5000 ocr-tesseract-flask
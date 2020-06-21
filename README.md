# ocr-tesseract-flask
OCR using Python, Tesseract and Flask in a Docker container

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
You will need Docker installed on your system and a command line editor.

  Docker

### Installing and Running
You can clone this repository or download a zip file, build and run the Docker image.

```
$ docker build -t ocr-tesseract-flask .
$ docker run -d -p 5000:5000 ocr-tesseract-flask
```
OR you can pull and/or run the Docker image from my repository on Docker Hub

```
$ docker pull pometa0507/ocr-tesseract-flask
$ docker run -d -p 5000:5000 pometa0507/ocr-tesseract-flask
```

Then open up browser to http://localhost:5000

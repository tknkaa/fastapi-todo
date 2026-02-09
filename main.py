from fastapi import FastAPI, Response

app = FastAPI()

@app.get("/")
def hello():
    return Response(content="Hello, world!\n", media_type="text/plain")

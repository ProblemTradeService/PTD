from fastapi import FastAPI
from problem import Problem

#uvicorn apicontroller:app --reload

app = FastAPI()

@app.get("/plagiarism")
def get_plagiarism_level(file: Problem, problems: list[Problem]):
    print(file.filename)
    return
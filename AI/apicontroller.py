from fastapi import FastAPI, UploadFile
from problem import Problem

#uvicorn apicontroller:app --reload

app = FastAPI()

@app.post("/plagiarism")
def get_plagiarism_level(file : list[UploadFile]): #Problem, problems: list[Problem])
    print(file.problemImage.filename)
    print(file.solvingProcessImage.filename)
    
    return "file post success"
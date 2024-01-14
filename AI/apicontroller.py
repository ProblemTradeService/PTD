from fastapi import FastAPI, UploadFile
from main import *

# fastAPI 서버 실행 코드
# uvicorn apicontroller:app --reload


app = FastAPI()


# 표절 수준 측정 요청 api
@app.post("/plagiarism")
async def get_plagiarism_level(problem: UploadFile, solvingProcess: UploadFile, problems : list[UploadFile] = None, solvingProcesses: list[UploadFile] = None):
    await check_plagiarism(problem, solvingProcess, problems, solvingProcesses)
    return "file post success"
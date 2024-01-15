from fastapi import FastAPI, UploadFile
import main

# fastAPI 서버 실행 코드
# uvicorn apicontroller:app --reload


app = FastAPI()


# 표절 수준 측정 요청 api
@app.post("/plagiarism")
async def get_plagiarism_level(problem: UploadFile, solvingProcess: UploadFile, problems : list[UploadFile], solvingProcesses: list[UploadFile]):
    
    print("-----fastAPI post test -----" )
    for file in problem, solvingProcess, problems, solvingProcesses:
        print(file.filename)
    print("\n\n\n")
    
    plagiarismLevelList = await main.check(problem, solvingProcess, problems, solvingProcesses, True)

    print("----- level list test ------")
    print(plagiarismLevelList)
    print("\n\n\n")

    return plagiarismLevelList

# 유사도 수준 측정 요청 api
@app.post("similarity")
async def get_similarity_level(problem: UploadFile, solvingProcess: UploadFile, problems : list[UploadFile], solvingProcesses: list[UploadFile]):
    similarityLevelList = await main.check(problem, solvingProcess, problems, solvingProcesses, False)
    return similarityLevelList
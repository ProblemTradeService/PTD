from fastapi import UploadFile
from pydantic import BaseModel

class Problem(BaseModel):
    #pid: int
    problemImage: UploadFile
    solvingProcessImage: UploadFile

class ProblemDto(BaseModel):
    uploadedProblem: Problem
    


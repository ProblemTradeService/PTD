from pydantic import BaseModel

class TextPath(BaseModel):
    problemPath: str
    solvingProcessPath: str
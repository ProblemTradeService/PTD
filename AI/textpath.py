from pydantic import BaseModel

class TextPath(BaseModel):
    problemPath: str = None
    solvingProcessPath: str = None
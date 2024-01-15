import imageparser
import problemai
from textpath import TextPath


async def check(problem, solvingProcess, problems, solvingProcesses, isPlagiarismCheck):
    txtPath = TextPath()
    txtPathList = list[TextPath]
    checkLevelList = list[str]

    # Upload file image path
    txtPath.problemPath = await imageparser.save_text_from_image(problem, True)
    txtPath.solvingProcessPath = await imageparser.save_text_from_image(solvingProcess, False)

    # Database files image path
    for prob, sol in problems, solvingProcesses:
        path = TextPath()
        path.problemPath = await imageparser.save_text_from_image(prob, True)
        path.solvingProcessPath = await imageparser.save_text_from_image(sol, False)
        txtPathList.append(path)

    # check plagiarism/similarity level for all problems from database
    for path in txtPathList:
        level = problemai.check_level(path, txtPath, isPlagiarismCheck)
        checkLevelList.append(level)
    
    return checkLevelList

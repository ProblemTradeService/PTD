import imageparser
import problemai
from textpath import TextPath
import os
import shutil
from typing import List


async def check(problem, solvingProcess, problems, solvingProcesses, isPlagiarismCheck):
    txtPath = TextPath()
    txtPathList = list() 
    checkLevelList = list()

    # Text file path of the uploaded image
    txtPath.problemPath = await imageparser.save_text_from_image(problem, True)
    txtPath.solvingProcessPath = await imageparser.save_text_from_image(solvingProcess, False)

    # Text file path of the database image
    for prob, sol in zip(problems, solvingProcesses):
        path = TextPath()
        path.problemPath = await imageparser.save_text_from_image(prob, True)
        path.solvingProcessPath = await imageparser.save_text_from_image(sol, False)
        txtPathList.append(path)

    # check plagiarism/similarity level for all problems from database
    for path in txtPathList:
        level = problemai.check_level(path, txtPath, isPlagiarismCheck)
        checkLevelList.append(level)
    
    # delete all saved files
    delete_all_files_in_directory('text/problem')
    delete_all_files_in_directory('text/solvingprocess')

    return checkLevelList


def delete_all_files_in_directory(directory):
    for filename in os.listdir(directory):
        file_path = os.path.join(directory, filename)
        try:
            if os.path.isfile(file_path) or os.path.islink(file_path):
                os.remove(file_path)
            elif os.path.isdir(file_path):
                shutil.rmtree(file_path)
        except Exception as e:
            print('Failed to delete %s. Reason: %s' % (file_path, e))

import imageparser

async def check_plagiarism(problem, solvingProcess, problems, solvingProcesses):
    await imageparser.save_text_from_image(problem, True)
    await imageparser.save_text_from_image(solvingProcess, False)
    return
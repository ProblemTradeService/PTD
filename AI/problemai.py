from textpath import TextPath
from openaikey import client
import prompt
from collections import Counter


def check_level(txtPath1 : TextPath, txtPath2 : TextPath, isPlagiarismCheck):
    # list for check level
    resultList = list[str]
    # number of check iteration
    iterNum = 10

    # read text files from path
    with open(txtPath1.problemPath, 'r', encoding='utf-8') as f:
        problem1 = f.read()
    with open(txtPath1.solvingProcessPath, 'r', encoding='utf-8') as f:
        solving_process1 = f.read()
    with open(txtPath2.problemPath, 'r', encoding='utf-8') as f:
        problem2 = f.read()
    with open(txtPath2.solvingProcessPath, 'r', encoding='utf-8') as f:
        solving_process2 = f.read()

    # set prompt
    if isPlagiarismCheck:
        promptText = prompt.check_plagiarism_prompt
    else:
        promptText = prompt.check_similarity_prompt


    # get response from gpt
    for _ in range(iterNum):
        response = client.chat.completions.create(
            model="gpt-4-1106-preview",
            temperature=0.5,
            top_p=0.5,
            messages=[
                {"role": "system", "content": promptText},
                {"role":"assistant", "content":"유사도:[낮음]"},
                {"role": "user", "content":"문제1: " + problem1 + "\n문제1 풀이 과정 : " + solving_process1 + \
                "\n\n문제2: " + problem2 + "\n\n문제2 풀이 과정 : " + solving_process2 +"\n유사도: "},
        ])
        content = response.choices[0].message.content
        resultList.append(content)

    return find_most_common(resultList)


# 리스트의 최빈값 반환
def find_most_common(lst):
    # 리스트 내 각 요소의 빈도수 계산
    frequency = Counter(lst)
    
    # 가장 많이 등장하는 요소 찾기
    most_common = frequency.most_common(1)
    
    # 최빈값 반환 (동일한 빈도의 값이 여러 개 있을 경우 하나만 반환)
    return most_common[0][0] if most_common else None
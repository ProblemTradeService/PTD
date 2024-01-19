from imageparser import ImageParser
from openai import OpenAI
import prompt


class ProblemAI:
    def __init__(self):
        self.client = OpenAI(api_key="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")
        self.imageparser = ImageParser(self)

    # 문제 풀이과정을 사용하여 표절 수준 검사
    def check_plagiarism_enhanced(self, problem_image1, solving_process_image1, problem_image2, solving_process_image2,):
        problem_text1 = self.imageparser.extract_text_from_image(problem_image1)
        problem_text2 = self.imageparser.extract_text_from_image(problem_image2)
        solving_process_text1 = self.imageparser.extract_text_from_image(solving_process_image1)
        solving_process_text2 = self.imageparser.extract_text_from_image(solving_process_image2)

        response = self.client.chat.completions.create(
            model="gpt-4-1106-preview",
            temperature=0.5,
            messages=[
                {"role": "system", "content": prompt.check_plagiarism_enhanced_prompt},
                {"role":"assistant", "content":"유사도:[낮음]"},
                {"role": "user", "content":"문제1: " + problem_text1 + "\n문제1 풀이 과정 : " + solving_process_text1 + \
                "\n\n문제2: " + problem_text2 + "\n\n문제2 풀이 과정 : " + solving_process_text2 +"\n유사도: "},
        ])
        content = response.choices[0].message.content
        print(content)

    def check_plagiarism_with_text(self, problem1_text, solving_process1_text, problem2_text, solving_process2_text):
        
        with open(problem1_text, 'r', encoding='utf-8') as f:
            problem1 = f.read()
        with open(solving_process1_text, 'r', encoding='utf-8') as f:
            solving_process1 = f.read()
        with open(problem2_text, 'r', encoding='utf-8') as f:
            problem2 = f.read()
        with open(solving_process2_text, 'r', encoding='utf-8') as f:
            solving_process2 = f.read()

        response = self.client.chat.completions.create(
            model="gpt-4-1106-preview",
            temperature=0.5,
            top_p=0.5,
            messages=[
                {"role": "system", "content": prompt.check_plagiarism_enhanced_prompt2},
                {"role":"assistant", "content":"유사도:[낮음]"},
                {"role": "user", "content":"문제1: " + problem1 + "\n문제1 풀이 과정 : " + solving_process1 + \
                "\n\n문제2: " + problem2 + "\n\n문제2 풀이 과정 : " + solving_process2 +"\n유사도: "},
        ])
        content = response.choices[0].message.content
        print('.' + content + '.')

    # 문제와 풀이과정을 사용하여 유사도 검사
    def check_similarity_enhanced(self, problem_image1, solving_process_image1, problem_image2, solving_process_image2,):
        problem_text1 = self.imageparser.extract_text_from_image(problem_image1)
        problem_text2 = self.imageparser.extract_text_from_image(problem_image2)
        solving_process_text1 = self.imageparser.extract_text_from_image(solving_process_image1)
        solving_process_text2 = self.imageparser.extract_text_from_image(solving_process_image2)

        response = self.client.chat.completions.create(
            model="gpt-4-1106-preview",
            temperature=0.5,
            messages=[
                {"role": "system", "content": prompt.check_similarity_enhanced_prompt},
                {"role":"assistant", "content":"유사도:[낮음]"},
                {"role": "user", "content":"문제1: " + problem_text1 + "\n문제1 풀이 과정 : " + solving_process_text1 + \
                "\n\n문제2: " + problem_text2 + "\n\n문제2 풀이 과정 : " + solving_process_text2 +"\n유사도: "},
        ])
        content = response.choices[0].message.content
        print(content)

    # 두 문제의 텍스트만을 사용하여 표절 수준을 비교
    def check_plagiarism_default(self, image1, image2):
        information1 = self.extract_text_from_image(image1)
        information2 = self.extract_text_from_image(image2)

        response = self.client.chat.completions.create(
            model="gpt-4-1106-preview",
            temperature=0.5,
            messages=[
                {"role": "system", "content": prompt.check_plagiarism_prompt},
                {"role":"assistant", "content":"표절 수준:[보통]"},
                {"role": "user", "content":"문제1 : " + information1 + "\n\n문제2 : " + information2 +"\n표절 수준: "},
        ])
        judge = response.choices[0].message.content
        print('\n.' + judge +'.')

    # 두 문제가 유사한 유형인지 문제 텍스트만을 사용하여 비교
    def check_similarity_default(self, image1, image2):
        information1 = self.extract_text_from_image(image1)
        information2 = self.extract_text_from_image(image2)

        response = self.client.chat.completions.create(
            model="gpt-4-1106-preview",
            temperature=0.5,
            messages=[
                {"role": "system", "content": prompt.check_similarity_prompt},
                {"role":"assistant", "content":"유사도:[보통]"},
                {"role": "user", "content":"문제1 : " + information1 + "\n\n문제2 : " + information2 +"\n유사도: "},
        ])
        judge = response.choices[0].message.content
        print(judge)

ai = ProblemAI()

#Wai.check_plagiarism_enhanced('AI/image/problem11.png', 'AI/image/solving_process11.png','AI/image/problem12.png', 'AI/image/solving_process12.png')
# for _ in range(10):
#     ai.check_plagiarism_with_text('AI/text/problem11.txt','AI/text/solving_process11.txt', 'AI/text/problem12.txt', 'AI/text/solving_process12.txt')
for _ in range(10):
    ai.check_plagiarism_with_text('AI/text/problem/problem1.txt','AI/text/solvingprocess/solution1.txt', 'AI/text/problem/problem2.txt', 'AI/text/solvingprocess/solution2.txt')


# parser = ImageParser(ai)
# parser.save_text_from_image('AI/image/problem12.png', 12, True)
# parser.save_text_from_image('AI/image/solving_process12.png', 12, False)

# parser.save_text_from_image('AI/image/problem13.png', 13, True)
# parser.save_text_from_image('AI/image/solving_process13.png', 13, False)
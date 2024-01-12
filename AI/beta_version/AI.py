import requests
import base64
from openai import OpenAI

client = OpenAI(api_key="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")

# 이미지 경로 설정
image_path1 = './problem.jpg'
image_path2 = './problem2.jpg'
image_path3 = './problem3.jpg'
image_path4 = './problem4.jpg'
image_path5 = './problem5.jpg'
image_path6 = './problem6.jpg'
image_path7 = './problem7.jpg'
image_path8 = './problem8.jpg'
image_path9 = './problem9.jpg'

# 이미지를 base64로 인코딩하는 함수
def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')


# 문제 이미지로부터 텍스트 추출하는 함수
def extract_text_from_image(image_path):
    # base64 문자열 얻기
    base64_image = encode_image(image_path)
    
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {client.api_key}"
    }
    
    payload = {
        "model": "gpt-4-vision-preview",
        "messages": [
            {
                "role":"system", 
                "content":"너는 문제 출제자이고, 수학 문제 이미지를 텍스트로 옮겨 적어야 해. \
                이미지에 있는 문제 텍스트를 제외하고 어떤 단어나 문장도 생성해서는 안돼."},
            {
                "role": "user",
                "content": [
                {
                    "type": "image_url",
                    "image_url": {
                    "url": f"data:image/jpeg;base64,{base64_image}"
                    }
                }
                ]
            }
        ],
        "max_tokens": 1000
    }
    
    response = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, json=payload)
    # 'content' 부분만 추출하여 출력
    content = response.json()['choices'][0]['message']['content']
    
    print(content+"\n")
    return content

# 문제 정보를 추출하는 함수
def offering_information(text):
    response = client.chat.completions.create(
        model="gpt-4-1106-preview",
        temperature=0.5,
        top_p=0.5,
        messages=[
            {"role": "system", "content": "제공 정보는 수학 문제 텍스트에서 얻을 수 있으며 문제 해결에 필요한 단서들이야.\
             너는 주어진 수학 문제의 제공 정보를 요약하고 요구하는 답이 무엇인지 판별해야 해. \
             절대로 문제를 풀어서는 안돼. 제공 정보와 요구하는 답 이외의 문장을 생성하면 절대 안돼.\
             부연 설명을 생성하면 안돼.\
             문제: a> 루트2 인 실수 a에 대하여 함수 f(x)를 f(x) = -x^3 + ах^2 + 2x라 하자. \
             곡선 y=f(x) 위의 점 O(0, 0) 에서의 접선이 곡선 y=f(x)와 만나는 점 중 0가 아닌 점을 A라 하고, \
             곡선 y=f(x) 위의 점 A에서의 접선이 x축과 만나는 점을 B라 하자. 점 A가 선분 OB를 지름으로 하는 원 위의 점일 때, \
             OA X AB의 값을 구하시오. [4점]\n \
             제공 정보: \n \
             - 실수 a는 루트2보다 크다. \n \
             - 함수 f(x) = -x^3 + ах^2 + 2x이다. \n \
             - 곡선 y=f(x) 위에 점 O(0,0)이 있다. \n \
             - 점 A는 선분 OB를 지름으로 하는 원 위의 점이다. \n \
             요구하는 답: \n \
             - OA X AB의 값\n \
            문제: 원 C: x^2 + y^2 - 2ax - ay - b = 0에 대하여 아래 문제에 답하여라. \
            원 C의 중심이 직선 y = 2x - 1 위에 있다. \
            원 C와 직선 y = 2x - 1 이 만나는 서로 다른 두 점을 A, B라 하자. \
            원 C의 점 P에서 대하여 삼각형 ABP의 넓이가 최대가 되려면, a + b의 값은? \
            (단, a, b는 상수이고, 점 P는 점 A도 아니고 점 B도 아닙니다.) [4점] \
            제공 정보: \n \
            - 원 C: x^2 + y^2 - 2ax - ay - b = 0 \n \
            - 원 C의 중심이 직선 y = 2x - 1 위에 있다. \n \
            - 원 C와 직선 y = 2x - 1은 서로 다른 두 점 A, B에서 만난다. \n \
            - 점 P는 원 C 위의 점이다. \n \
            - 삼각형 ABP의 넓이가 최대가 되야 한다.\n \
            - a, b는 상수이다. \n \
            - 점 P는 점 A도 아니고 점 B도 아니다. \n \
            요구하는 답: \n \
            - a + b의 값 \n"},
            {"role": "user", "content": "문제: "+ text}
    ])
    info = response.choices[0].message.content
    print(info+"\n")
    return info

# 문제 이미지로부터 정보를 추출하는 함수
def get_information(image_path):
    document_text = extract_text_from_image(image_path)
    information = offering_information(document_text)
    return information

# 두 문제의 유사도를 비교하는 함수
def check_similarity(image1, image2):
    information1 = offering_information(image1) #get_information(image1)
    information2 = offering_information(image2) #get_information(image2)

    response = client.chat.completions.create(
        model="gpt-4-1106-preview",
        temperature=0.5,
        top_p=0.5,
        messages=[
            {"role": "system", "content": "너는 수학 문제 표절 검사기야. \
            수식의 숫자가 다르더라도 문제의 맥락이 비슷하다면 내용이 유사하다고 판단해야 돼. \
            우선적으로 수학 문제 표절 수준은 두 문제의 주요 정보 내용이 유사할수록 높아져. \
            부차적으로 요구하는 답의 내용도 유사하다면 표절 수준은 더욱 높아져. \
            너는 제공된 두 수학 문제의 주요 정보와 요구하는 답을 고려해서 표절 수준을 측정해야 해.\
            표절 수준은 [매우 높음], [높음], [보통], [낮음], [매우 낮음] 5단계로 나뉘어."},
            {"role": "user", "content":"문제1 : \n" + information1 + "\n\n문제2 : \n" + information2},
    ])
    judge = response.choices[0].message.content
    print(judge)

# 전처리 없이 두 문제를 바로 비교
def check_similarity_basic(image1, image2):
    information1 = image1 #extract_text_from_image(image1)
    information2 = image2 #extract_text_from_image(image2)

    response = client.chat.completions.create(
        model="gpt-4-1106-preview",
        messages=[
            {"role": "system", "content": "너는 수학 문제 표절 검사기이고, 제공된 두 수학 문제의 표절 정도를 측정해야 해. 표절 수준은 [매우 높음], [높음], [보통], [낮음], [매우 낮음] 5단계로 나뉘어."},
            {"role": "user", "content":"문제1 : " + information1 + "\n\n문제2 : " + information2},
    ])
    judge = response.choices[0].message.content
    print(judge)

#check_similarity(image_path1, image_path2)
#check_similarity_basic(image_path1, image_path2)
    
text1 = "20. \( a > \sqrt{2} \)인 실수 \( a \)에 대하여 함수 \( f(x) \)를 \
\( f(x) = -x^3 + ax^2 + 2x \)라 하자. 그래프 \( y = f(x) \) 위의 점 \( O(0, 0) \)에서의 접선이 \
그래프 \( y = f(x) \)와 만나는 점 중 \( O \)가 아닌 점을 \( A \)라 하고,\
그래프 \( y = f(x) \) 위의 점 \( A \)에서의 접선이 \( x \)축과 만나는 점을\
\( B \)라 하자. 점 \( A \)가 선분 \( OB \)를 지름으로 하는 원 위의 점일 때,,\
\( OA \times AB \)의 값을 구하시오. [4점]"

text1_1 = "20. 함수 \( f(x) \)를 \( f(x) = -x^3 + ax^2 + 2x \)라 하자. \
a는 \( a > \sqrt{3} \)인 실수이다. 그래프 \( y = f(x) \) 위의 점 \( D(1, 1) \)에서의 접선이 \
그래프 \( y = f(x) \)와 만나는 점 중 \( D \)가 아닌 점을 \( A \)라 하고,\
그래프 \( y = f(x) \) 위의 점 \( A \)에서의 접선이 \( x \)축과 만나는 점을\
\( B \)라 하자. 점 \( A \)가 선분 \( DB \)를 지름으로 하는 원 위의 점일 때,\
\( DA \times DB \)의 값을 구하시오. [4점]"

text2 = "18. 다항식 \( f(x) \)와 최고차항의 계수가 1인 삼차항식 \( g(x) \)가 다음 조건을 만족시킨다. \
다항식 \( f(x)+g(x) \)를 \( x \)로 나누었을 때의 나머지와 \
다항식 \( f(x)+g(x) \)를 \( x^2 + 2x - 2 \)로 나누었을 때의 나머지가 \
\( x^2 + 2x - \frac{1}{2}f(x) \)로 같다. \
\( g(1) = 7 \)일 때, \( f(3) \)의 값은? [4점] \
① 20 \
② 22 \
③ 24 \
④ 26 \
⑤ 28" 

text2_1 = "18. 다항식 \( f(x) \)와 최고차항의 계수가 1인 삼차항식 \( g(x) \)가 다음 조건을 만족시킨다. \
다항식 \( f(x)+g(x) \)를 \( x \)로 나누었을 때의 나머지와 \
다항식 \( f(x)+g(x) \)를 \( x^2 + 3x - 3 \)로 나누었을 때의 나머지가 \
\( x^2 + 3x - \frac{1}{2}f(x) \)로 같다. \
\( g(2) = 4 \)일 때, \( f(5) \)의 + \( f(2) \)의 값은? [4점] \
① 20 \
② 22 \
③ 24 \
④ 26 \
⑤ 28" 

text3 = "아래 그림과 같이 평면 위의 임의의 다각형을 생각하자. \
이 다각형의 각 변마다 하나의 벡터가 대응된다. \
이 벡터는 대응되는 변에 수직이고, 그 크기는 대응되는 변의 길이와 같으며 방향은 다각형의 외부를 향한다. \
이들 벡터의 합은 0이 됨를 수학적 개념으로 사용하여 보이시오."

text3_1 = "1. Consider on the sides of a polygon orthogonal vectors of lengths proportional to the lengths of the sides, pointing outwards. Show that the sum of these vectors is zero."

check_similarity_basic(text1, text1_1)
import requests
import base64
from openai import OpenAI

client = OpenAI(api_key="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")



information1_1 = "0493 오른쪽 그림과 같이 ∠A = 90° 인 직각삼각형 ABC에서 AH⊥BC 일 때, x + y의 값을 구하시오. \
    이미지 정보: 이 그림은 직각삼각형 ABC를 보여주고 있으며, AH가 BC에 수직임을 나타냅니다. 선분 BC의 길이는 16cm이고, 선분 BH의 길이는 9cm입니다. 선분 AH의 길이는 x cm, 선분 HC의 길이는 y cm로 표시되어 있습니다."

information2_1 = "오른쪽 그림과 같은 △ABC에 서 ∠ADE = ∠C = 90° 일 때, BC의 길이는? \
    이미지 정보: 이 그림은 삼각형 ABC와 그 내부의 삼각형 ADE를 보여줍니다. 삼각형 ADE는 직각삼각형이며, 직각은 점 D에서 형성됩니다. 삼각형 ABC의 점 C에서도 90도의 직각이 형성됩니다. 선분 AD의 길이는 8cm, 선분 DE의 길이는 6cm, 선분 AE의 길이는 10cm입니다. 선분 EC의 길이는 6cm로 표시되어 있습니다. 문제는 선분 BC의 길이를 묻고 있습니다."




# 이미지를 base64로 인코딩하는 함수
def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')


# 문제 이미지로부터 그림/그래프/표 정보 추출
def get_information_from_image(image_path):
    # base64 문자열 얻기
    base64_image = encode_image(image_path)
    
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {client.api_key}"
    }
    
    payload = {
        "model": "gpt-4-vision-preview",
        "temperature":"0.5",
        "top_p":"0.5",
        "messages": [
            {
                "role":"system", 
                "content":"너는 주어진 수학 문제를 푸는 것에는 관심이 없어. 중요 정보를 추출하기만 해야 돼. \
                    수학 문제의 지문, 보기, 선택지를 제외하고 주어진 그림, 그래프, 표에서만 얻을 수 있는 정보를 자세하게 말해줘. \
                    이미지에서 얻은 정보를 제외하고 어떤 단어나 문장도 생성하면 안돼."
            },
            {
                "role": "user",
                "content": [
                {
                    "type":"text",
                    "text":"문제: "
                },
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
        "temperature":"0.5",
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

# 문제 이미지로부터 정보를 추출하는 함수
def get_information(image_path):
    image_information = get_information_from_image(image_path)
    problem_text = extract_text_from_image(image_path)
    return problem_text + "\n이미지 정보: " + image_information

# 두 문제의 표절 수준을 비교
def check_plagiarism(image1, image2):
    information1 = get_information(image1)
    information2 = get_information(image2)

    response = client.chat.completions.create(
        model="gpt-4-1106-preview",
        temperature=0.5,
        messages=[
            {"role": "system", "content": "너는 수학 문제 표절 검사기이고, 제공된 두 수학 문제의 표절 정도를 측정해야 해. 표절 수준은 [매우 높음], [높음], [보통], [낮음], [매우 낮음] 5단계로 나뉘어."},
            {"role":"assistant", "content":"표절 수준:[보통]"},
            {"role": "user", "content":"문제1 : " + information1 + "\n\n문제2 : " + information2 +"\n표절 수준: "},
    ])
    judge = response.choices[0].message.content
    print(judge)

# 두 문제가 유사한 유형인지 비교
def check_similarity(image1, image2):
    information1 = get_information(image1)
    information2 = get_information(image2)

    response = client.chat.completions.create(
        model="gpt-4-1106-preview",
        temperature=0.5,
        messages=[
            {"role": "system", "content": "너는 수학 문제집 편집자야. \
             문제의 출제 의도, 풀이에 사용되는 핵심 개념과 주제 등이 비슷할수록 두 문제가 유사한 유형이라고 판단해야 돼. \
             문제 형식이나 모양이 달라도 출제 의도와 핵심 개념, 주제가 비슷하다면 유사한 유형이야. \
             문제 분류를 위해 제공된 두 수학 문제가 유사한 유형인지를 평가해줘. \
             평가 단계는 [매우 높음], [높음], [보통], [낮음], [매우 낮음] 5단계로 나뉘어."},
            {"role":"assistant", "content":"유사도:[보통]"},
            {"role": "user", "content":"문제1 : " + information1 + "\n\n문제2 : " + information2 +"\n유사도: "},
    ])
    judge = response.choices[0].message.content
    print(judge)


check_similarity('./problem9.jpg', './problem10.jpg')
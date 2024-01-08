import requests
import base64
from openai import OpenAI

client = OpenAI(api_key="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")

# 이미지를 base64로 인코딩하는 함수
def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')


# 두 문제 이미지로부터 표절 체크
def plagiarism_check_from_image(image1, image2):
    # base64 문자열 얻기
    base64_image1 = encode_image(image1)
    base64_image2 = encode_image(image2)
    
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {client.api_key}"
    }
    
    payload = {
        "model": "gpt-4-vision-preview",
        "messages": [
            {
                "role":"system", 
                "content":"너는 수학 문제 표절 검사기이고, 제공된 두 수학 문제의 표절 정도를 측정해야 해. \
                    표절 수준은 [매우 높음], [높음], [보통], [낮음], [매우 낮음] 5단계로 나뉘어."},
            {
                "role": "user",
                "content": [
                {
                    "type":"text",
                    "text":"문제1: "
                },
                {
                    "type": "image_url",
                    "image_url": {
                    "url": f"data:image/jpeg;base64,{base64_image1}"
                    }
                },                
                {
                    "type":"text",
                    "text":"문제2: "
                },
                {
                    "type": "image_url",
                    "image_url": {
                    "url": f"data:image/jpeg;base64,{base64_image2}"
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


# 두 문제 이미지로부터 유사도 체크
def similarity_check_from_image(image1, image2):
    # base64 문자열 얻기
    base64_image1 = encode_image(image1)
    base64_image2 = encode_image(image2)
    
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {client.api_key}"
    }
    
    payload = {
        "model": "gpt-4-vision-preview",
        "messages": [
            {
                "role":"system", 
                "content":"너는 수학 문제집 편집자야. \
                문제의 출제 의도, 풀이에 사용되는 핵심 개념 등이 비슷할수록 두 문제가 유사한 유형이라고 판단해야 돼. \
                문제 형식이나 모양이 달라도 출제 의도와 핵심 개념이 비슷하다면 유사한 유형이야. \
                문제 분류를 위해 제공된 두 수학 문제가 유사한 유형인지를 평가해줘. \
                평가 단계는 [매우 높음], [높음], [보통], [낮음], [매우 낮음] 5단계로 나뉘어."},
            {
                "role": "user",
                "content": [
                {
                    "type":"text",
                    "text":"문제1: "
                },
                {
                    "type": "image_url",
                    "image_url": {
                    "url": f"data:image/jpeg;base64,{base64_image1}"
                    }
                },                
                {
                    "type":"text",
                    "text":"문제2: "
                },
                {
                    "type": "image_url",
                    "image_url": {
                    "url": f"data:image/jpeg;base64,{base64_image2}"
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

plagiarism_check_from_image('image/problem14.png', 'image/problem15.jpeg')
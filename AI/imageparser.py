import base64
import requests
import prompt
import os
from openaikey import client


# 이미지를 base64로 인코딩하는 함수
async def encode_image(image):
    contents = await image.read()
    return base64.b64encode(contents).decode('utf-8')
    

# 문제 이미지로부터 텍스트 파일 저장하는 함수
async def save_text_from_image(image, is_prob):
    # base64 문자열 얻기
    base64_image = await encode_image(image)
    
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
                "content":prompt.extract_text_from_image_prompt},
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
    if is_prob:
        file = open('text/problem/'+ os.path.splitext(image.filename)[0] +'.txt', 'w', encoding='utf-8')
    else:
        file = open('text/solvingprocess/'+ os.path.splitext(image.filename)[0] +'.txt', 'w', encoding='utf-8')
    file.write(content)
    file.close()
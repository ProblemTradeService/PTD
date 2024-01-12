import base64
import requests

class ImageParser:
    def __init__(self, ai):
        self.problemai = ai

    # 이미지를 base64로 인코딩하는 함수
    def encode_image(self,image_path):
        with open(image_path, "rb") as image_file:
            return base64.b64encode(image_file.read()).decode('utf-8')
        

    # 문제 이미지로부터 텍스트 추출하는 함수
    def extract_text_from_image(self, image_path):
        # base64 문자열 얻기
        base64_image = self.encode_image(image_path)
        
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {self.problemai.client.api_key}"
        }
        
        payload = {
            "model": "gpt-4-vision-preview",
            "temperature":"0.5",
            "messages": [
                {
                    "role":"system", 
                    "content":self.problemai.prompt.extract_text_from_image_prompt},
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
        
        #print(content+"\n")
        return content
    
    # 문제 이미지로부터 텍스트 파일 저장하는 함수
    def save_text_from_image(self, image_path, num, is_prob):
        # base64 문자열 얻기
        base64_image = self.encode_image(image_path)
        
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {self.problemai.client.api_key}"
        }
        
        payload = {
            "model": "gpt-4-vision-preview",
            "temperature":"0.5",
            "messages": [
                {
                    "role":"system", 
                    "content":self.problemai.prompt.extract_text_from_image_prompt},
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
            file = open('AI/text/problem'+str(num)+'.txt', 'w')
        else:
            file = open('AI/text/solving_process'+str(num)+'.txt', 'w')
        file.write(content)
        file.close()

    # 문제 이미지로부터 그림/그래프/표 정보 추출
    def get_information_from_image(self, image_path):
        # base64 문자열 얻기
        base64_image = self.encode_image(image_path)
        
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {self.problemai.client.api_key}"
        }
        
        payload = {
            "model": "gpt-4-vision-preview",
            "temperature":"0.5",
            "top_p":"0.5",
            "messages": [
                {
                    "role":"system", 
                    "content":self.problemai.prompt.get_information_from_image_prompt
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
    


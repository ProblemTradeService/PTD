import React, { useState } from 'react';
import Select from 'react-select';

const optionsBox1 = [
  { value: 'elementaryschool', label: '초등학교' },
  { value: 'middleschool', label: '중학교' },
  { value: 'highschool', label: '고등학교' },
];

const optionsBox2 = {
    highschool: [
    { value: 'math1', label: '수학1' },
    { value: 'math2', label: '수학2' },
    { value: 'mijeokbun', label: '미적분' },
    { value: 'kiha', label: '기하' },
    { value: 'hwaktong', label: '확률과 통계' },
  ],
  // 추가로 옵션 넣고 싶으면 이 자리에 넣기
};

const optionsBox3 = {
    math1: [
    { value: 'jisulog', label: '지수와 로그' },
    { value: 'jisulogfunction', label: '지수함수와 로그함수' },
    { value: 'samgakfunction', label: '삼각함수' },
    { value: 'suyeol', label: '수열' },
  ],
    math2: [
    { value: 'geukhan1', label: '함수의 극한과 연속' },
    { value: 'mibun1', label: '다항함수의 미분법' },
    { value: 'jeokbun1', label: '다항함수의 적분법' },
  ],
    mijeokbun: [
    { value: 'geukhan2', label: '수열의 극한' },
    { value: 'mibun2', label: '미분법' },
    { value: 'jeokbun2', label: '적분법' },
  ],
    kiha: [
    { value: 'second', label: '이차곡선' },
    { value: 'vector', label: '벡터' },
    { value: 'gonggan', label: '공간도형' },
  ],
    hwaktong: [
    { value: 'sunyeol', label: '순열과 조합' },
    { value: 'percentage', label: '확률' },
    { value: 'statistic', label: '통계' },
  ],
};

const optionsBox4 = {
    jisulog: [
    { value: 'jisu', label: '지수' },
    { value: 'log', label: '로그' },
  ],
    jisulogfunction: [
    { value: 'jisufunction', label: '지수함수' },
    { value: 'logfunction', label: '로그함수' },
  ],
    samgakfunction: [
    { value: 'samgakfunction', label: '삼각함수' },
    { value: 'graph', label: '삼각함수의 그래프' },
    { value: 'application', label: '삼각함수의 활용' },
  ],
    suyeol: [
    { value: 'deungcha', label: '등차수열' },
    { value: 'deungbi', label: '등비수열' },
    { value: 'suyeolhap', label: '수열의 합' },
    { value: 'induction', label: '수학적 귀납법' },
  ],
  geukhan1: [
    { value: 'deungcha', label: '함수의 극한' },
    { value: 'deungbi', label: '함수의 연속' },
  ],
  mibun1: [
    { value: 'dofunction', label: '미분계수와 도함수' },
    { value: 'dofunction1', label: '도함수의 활용(1)' },
    { value: 'dofunction2', label: '도함수의 활용(2)' },
    { value: 'dofunction3', label: '도함수의 활용(3)' },
  ],
  jeokbun1: [
    { value: 'bujung', label: '부정적분' },
    { value: 'jungjeok', label: '정적분' },
    { value: 'jungjeokapp', label: '정적분의 활용' },
  ],
  geukhan2: [
    { value: 'geukhan', label: '수열의 극한' },
    { value: 'geupsu', label: '급수' },
  ],
  mibun2: [
    { value: 'functionmibun', label: '지수함수와 로그함수의 미분' },
    { value: 'samgakmibun', label: '삼각함수의 미분' },
    { value: 'varietymibun', label: '여러가지 미분법' },
    { value: 'dofunction1', label: '도함수의 활용(1)' },
    { value: 'dofunction2', label: '도함수의 활용(2)' },
  ],
  jeokbun2: [
    { value: 'jeokbun', label: '여러가지 적분법' },
    { value: 'jungjeokbun', label: '정적분' },
    { value: 'jungjeokapp', label: '정적분의 활용' },
  ],
  second: [
    { value: 'bujung', label: '이차곡선' },
    { value: 'jungjeok', label: '이차곡선과 직선' },
  ],
  vector: [
    { value: 'vectorcal', label: '벡터의 연산' },
    { value: 'vecsungbun', label: '평면벡터의 성분' },
    { value: 'naejeok', label: '평면벡터의 내적' },
  ],
  gonggan: [
    { value: 'gongganshape', label: '공간도형' },
    { value: 'gonggangraph', label: '공간좌표' },
  ],
  sunyeol: [
    { value: 'varietysunyeol', label: '여러가지 순열' },
    { value: 'joongbok', label: '중복조합과 이항정리' },
  ],
  percentage: [
    { value: 'percentmean', label: '확률의 뜻과 활용' },
    { value: 'conditionper', label: '조건부확률' },

  ],
  statistic: [
    { value: 'percentbyunsu', label: '확률변수와 확률분포' },
    { value: 'yihang', label: '이항분포와 정규분포' },

  ],
};

const ConditionSelect = () => {
  const [selectedBox1, setSelectedBox1] = useState(null);
  const [selectedBox2, setSelectedBox2] = useState(null);
  const [selectedBox3, setSelectedBox3] = useState(null);
  const [selectedBox4, setSelectedBox4] = useState(null);

  const handleBox1Change = (selectedOption) => {
    setSelectedBox1(selectedOption);
    setSelectedBox2(null);
    setSelectedBox3(null);
    setSelectedBox4(null);
  };

  const handleBox2Change = (selectedOption) => {
    setSelectedBox2(selectedOption);
    setSelectedBox3(null);
    setSelectedBox4(null);
  };

  const handleBox3Change = (selectedOption) => {
    setSelectedBox3(selectedOption);
    setSelectedBox4(null);
  };

  const handleBox4Change = (selectedOption) => {
    setSelectedBox4(selectedOption);
  };

  //select 상자 크기와 폰트크기 조절
  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: 'auto', // 조절 필요한 폭으로 변경
      height:  '120%',
      borderColor: 'black'
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: 'auto', // 조절 필요한 폰트 크기로 변경
    }),
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <Select
        options={optionsBox1}
        value={selectedBox1}
        onChange={handleBox1Change}
        placeholder="초/중/고"
        defaultValue={null}
        styles={customStyles}
      />
        <Select
          options={selectedBox1 ? optionsBox2[selectedBox1.value]  : []}
          value={selectedBox2}
          onChange={handleBox2Change}
          placeholder="학년/학기"
          defaultValue={null}
          styles={customStyles}
        />
      
     
        <Select
          options={selectedBox2 ? optionsBox3[selectedBox2.value] : []}
          value={selectedBox3}
          onChange={handleBox3Change}
          placeholder="대단원"
          defaultValue={null}
          styles={customStyles}
        />
      
      
        <Select
          options={selectedBox3 ? optionsBox4[selectedBox3.value]: []}
          value={selectedBox4}
          onChange={handleBox4Change}
          placeholder="소단원"
          defaultValue={null}
          styles={customStyles}
        />
      
    </div>
  );
};

export default ConditionSelect;
import React, { useState } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../store/dataSlice'
import { optionsBox1, optionsBox2, optionsBox3, optionsBox4 } from './OptionBoxes'


function CategorySelector() {
  const dispatch = useDispatch();
  const category = useSelector((state=>state.data.category));

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

  const setCategoty = (index, value) => {
    dispatch(selectCategory({index, value}))
  }

  const getValue = (obj) => {
    if (Object.keys(obj).length === 0) {
      return null;
    } else {
      return obj
    }
}

  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <Select
        options={optionsBox1}
        value={getValue(category[0])}
        onChange={(newValue)=>{setCategoty(0, newValue)}}
        placeholder="초/중/고"
        defaultValue={null}
        styles={customStyles}
      />
        <Select
          options={category[0] ? optionsBox2[category[0].value]  : []}
          value={getValue(category[1])}
          onChange={(newValue)=>{setCategoty(1, newValue)}}
          placeholder="학년/학기"
          defaultValue={null}
          styles={customStyles}
        />
      
     
        <Select
          options={category[1] ? optionsBox3[category[1].value]  : []}
          value={getValue(category[2])}
          onChange={(newValue)=>{setCategoty(2, newValue)}}
          placeholder="대단원"
          defaultValue={null}
          styles={customStyles}
        />
      
      
        <Select
          options={category[2] ? optionsBox4[category[2].value]: []}
          value={getValue(category[3])}
          onChange={(newValue)=>{setCategoty(3, newValue)}}
          placeholder="소단원"
          defaultValue={null}
          styles={customStyles}
        />
      
    </div>
  );
};

export default CategorySelector;
import React from 'react';
import { CirclePicker, HuePicker, AlphaPicker } from 'react-color'; // ChromePicker,TwitterPicker
import { ColorPickerProps } from '../types/types';

import styles from './../assets/scss/ColorPicker.module.scss';

const ColorPicker = ({ name, color, handleColorChange }: ColorPickerProps) => {
  console.log('ColorPicker Render');

  return (
    <>

      <div className={styles.container}>
        <h2 className={styles.title}>{name}</h2>
        <input className={[styles.chkColor, styles.item].join(" ")} value={color} onChange={e => handleColorChange(e.target.value)}></input>
        <div className={styles.item}><CirclePicker width={'500px'} color={color} circleSize={40} onChange={color => handleColorChange(color.hex)}></CirclePicker></div>
        <div className={styles.item}><HuePicker height={'20px'} width={'500px'} color={color} onChange={color => handleColorChange(color.hex)}></HuePicker></div>
        {/* AlphaPicker 안움직임.. 확인 필요.. 투명도 조절 추가하면 좋을 것 같은디 ..
      <div className={styles.item}><AlphaPicker color={color} onChangeComplete={color=>handleColorChange(color.hex)}></AlphaPicker></div> 
      */}
      </div>
    </>
  );
}

// props 변경 시에만 렌더링 되도록 React.memo 사용 (color, handleColorChange 둘 다 color state 변경 시에만 바뀐다.)
export default React.memo(ColorPicker);
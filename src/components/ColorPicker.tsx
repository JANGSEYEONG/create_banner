import React from 'react';
import {CirclePicker,HuePicker} from 'react-color'; //,AlphaPicker,ChromePicker,TwitterPicker
import {ColorPickerProps} from '../types';

import styles from './../assets/scss/ColorPicker.module.scss';

const ColorPicker  = ({color, handleColorChange} : ColorPickerProps)=>{
  console.log('ColorPicker Render');


  return (
    <>    
      <input className={[styles.chkColor, styles.item].join(" ")} value={color} onChange={e=>handleColorChange(e.target.value)}></input>
      <div className={styles.item}><CirclePicker width={'500px'} color={color} circleSize={40} onChange={color=>handleColorChange(color.hex)}></CirclePicker></div>
      <div className={styles.item}><HuePicker height={'20px'} width={'500px'} color={color} onChange={color=>handleColorChange(color.hex)}></HuePicker></div>
      {/* <AlphaPicker></AlphaPicker> */}
      {/* <ChromePicker color={color} onChange={color=>handleColorChange(color.hex)}></ChromePicker> */}
      {/* <TwitterPicker></TwitterPicker> */}    
    </>
  );
}

// props 변경 시에만 렌더링 되도록 React.memo 사용 (color, handleColorChange 둘 다 color state 변경 시에만 바뀐다.)
export default React.memo(ColorPicker);
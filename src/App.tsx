import { useCallback, useState } from 'react';

import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';

import { CanvasProps } from './types';

import './App.scss';

function App() {
  console.log('App Render');

  const [color, setColor] = useState<string>('white');
  const [text, setText] = useState<string>('');
  const [textSize, setTextSize] = useState<string>('15');
  const [fileName, setFileName] = useState<string>('');
  const handleColorChange = useCallback((color:string)=>{
    setColor(color);
  },[color]);

  const canvasProps: CanvasProps = {
    width: 380,
    height: 200,
    backgroundColor: color,
    text: text,
    font:{
      feature: 'Arial',
      size: textSize,
      color: 'black'
    },
    fileName : fileName
  }

  const handleTextChange = useCallback((text:string)=>{
    setText(text);
  }, [text]);

  const handleTextSizeChange = useCallback((size:string)=>{
    setTextSize(size);
  }, [textSize]);

  const handleFileNameChange = useCallback((name:string)=>{
    setFileName(name);
  },[fileName]);

  return (
    <div className='app'>
      <div className='preview'>
        <Canvas canvasProps={canvasProps}></Canvas>
      </div>
      <div className='setting'>
        <div className='setting_text'>
          <div>
            <label htmlFor='textValue'></label>
            <input className='text' placeholder={'텍스트를 입력해주세요.'} value={text} onChange={e=>handleTextChange(e.target.value)} type='text' name='textValue'/>          
          </div>
          <div>
            <label htmlFor='filename'>저장 파일 이름</label>
            <input className='filename' onChange={e=>handleFileNameChange(e.target.value)} type='text' name='filename' value={fileName}/>
          </div>
          <div>
            <label htmlFor='textSize'>글자 크기</label>
            <input className='size' value={textSize} onChange={e=>handleTextSizeChange(e.target.value)} type='number' name='textSize' step={10}></input>
            <label htmlFor='backColor'>배경 색</label>
            <input className='color' type='text' name='backColor' value={color} disabled></input>
          </div>

        </div>
        
        <div className='setting_color'>
          <ColorPicker color={color} handleColorChange={handleColorChange}></ColorPicker>
        </div>
      </div>
    </div>
  );
}

export default App;

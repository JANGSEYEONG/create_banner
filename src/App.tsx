import { useCallback, useState } from 'react';

import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';

import { CanvasProps } from './types';

import './App.scss';

function App() {
  console.log('App Render');

  const [color, setColor] = useState<string>('white');
  const [text, setText] = useState<string>('');
  const [textSize, setTextSize] = useState<number>(15);

  const handleColorChange = useCallback((color:string)=>{
    setColor(color);
  },[color]);

  const canvasProps: CanvasProps = {
    width: 400,
    height: 250,
    backgroundColor: color,
    text: text,
    font:{
      size: 100,
      color: 'black'
    }
  }

  const handleTextChange = useCallback((text:string)=>{
    console.log(text)
    setText(text);
  }, [text]);

  return (
    <div className='app'>
      <div className='preview'>
        <div className='preview_canvas'><Canvas canvasProps={canvasProps}></Canvas></div>
        <div className='preview_btn'><button>Download</button></div>
      </div>
      <div className='setting'>
        <div className='setting_text'>
          <div>
            <label htmlFor='textValue'></label>
            <input onChange={e=>handleTextChange(e.target.value)} type='text' name='textValue'/>
          </div>
          <div>
            <label htmlFor='textSize'>글자 크기</label>
            <input className='size' type='number' name='textSize' step={10}></input>
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

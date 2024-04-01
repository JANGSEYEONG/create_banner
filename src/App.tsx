import { useState } from 'react';
import useInput from './hooks/useInput';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';
import { CanvasProps } from './types';

import './assets/scss/App.scss';
import useDownloadCanvasImg from './hooks/useDownloadCanvasImg';
import useColor from './hooks/useColor';

function App() {
  console.log('App Render');

  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);

  const [backgroundColor, backgroundColorChange] = useColor('white');
  const [fontColor, fontColorChange] = useColor('pink');

  const [content, contentChange] = useInput('hello');
  const [fontSize, fontSizeChange] = useInput('15');
  const [fileName, fileNameChange] = useInput('');

  const [handleDownloadClick] = useDownloadCanvasImg(canvas, fileName);

  const canvasProps: CanvasProps = {
    canvas: canvas,
    setCanvas: setCanvas,
    width: 380,
    height: 200,
    backgroundColor: backgroundColor,
    text: content,
    font: {
      feature: 'Arial',
      size: fontSize,
      color: fontColor
    },
    fileName: fileName
  }

  return (
    <div className='app'>
      <div className='preview'>
        <Canvas canvasProps={canvasProps}></Canvas>
        <div className='preview_btn'>
        <label htmlFor='filename'>저장 파일 이름</label>
          <input className='filename' onChange={e => fileNameChange(e.target.value)} type='text' name='filename' value={fileName} />
          {handleDownloadClick && <button onClick={handleDownloadClick}>Download</button>}
        </div>
      </div>
      <div className='setting'>
        <div className='setting_text'>
          <div>
            <label htmlFor='textValue'></label>
            <input className='text' placeholder={'텍스트를 입력해주세요.'} value={content} onChange={e => contentChange(e.target.value)} type='text' name='textValue' />
          </div>
          <div>
            <label htmlFor='textSize'>글자 크기</label>
            <input className='size' value={fontSize} onChange={e => fontSizeChange(e.target.value)} type='number' name='textSize' step={10}></input>
            <label htmlFor='backColor'>배경 색</label>
            <input className='color' type='text' name='backColor' value={backgroundColor} disabled></input>
            <label htmlFor='fontColor'>글자 색</label>
            <input className='color' type='text' name='fontColor' value={fontColor} disabled></input>
          </div>

        </div>

        <div className='setting_color'>
          <ColorPicker name={'배경 색 설정'} color={backgroundColor} handleColorChange={backgroundColorChange}></ColorPicker>
          <ColorPicker name={'글자 색 설정'} color={fontColor} handleColorChange={fontColorChange}></ColorPicker>
        </div>
      </div>
    </div>
  );
}

export default App;

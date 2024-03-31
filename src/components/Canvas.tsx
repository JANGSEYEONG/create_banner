import React, { useRef, useEffect, useState, useCallback } from 'react';
import { CanvasProps } from '../types';

const Cavas = ( props:{canvasProps:CanvasProps} ) => {
  //console.log('Cavas Render');
  
  const canvasOptions = props.canvasProps;
  console.log('Cavas Render: ' + canvasOptions.text);
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 최초 실행 시 ctx 관련 width, height, dpr 조정
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    setCanvas(canvas);
    setCtx(canvas.getContext("2d"));

  }, []);

  // 설정값이 바뀌면 canvasOptions의 주소값이 계속 바뀔거라 의존 변수에 추가해야함
  const handleDownloadClick = useCallback(()=>{
    if(canvas){
      const dataURL = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = canvasOptions.fileName;
      downloadLink.href = dataURL;
      downloadLink.click();
    }
    

  }, [canvas, canvasOptions]);

  if(ctx && canvas){

    canvas.width = canvasOptions.width;
    canvas.height = canvasOptions.height;

    // 1. 배경 색 설정하기
    ctx.fillStyle = canvasOptions.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. 글자 설정하기
    
    // 2-1) 글자 가운데 정렬
    ctx.textAlign='center';
    ctx.textBaseline = 'middle';

    // 2-2) 글자 색 설정
    ctx.fillStyle = canvasOptions.font.color;

    // 2-3) 글자 크기 및 폰트 설정
    ctx.font = `${canvasOptions.font.size}px ${canvasOptions.font.feature}`;

    // 2-4) 글자 채우기   
    ctx.fillText(canvasOptions.text, canvas.width / 2, canvas.height / 2);
  }

  return (
    <>
      <canvas className='preview_canvas' ref={canvasRef}></canvas>
      <div className='preview_btn'><button onClick={handleDownloadClick}>Download</button></div>
    </>
  );
}

export default Cavas;
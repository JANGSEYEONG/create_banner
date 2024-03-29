import React, { useRef, useEffect, useState } from 'react';
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

  if(ctx && canvas){

    ctx.textAlign='center';
    ctx.textBaseline = 'middle';

    ctx.fillStyle = canvasOptions.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = canvasOptions.font.color;
    ctx.fillText(canvasOptions.text, canvas.width / 2, canvas.height / 2);
  }

  return (
    <>
      <canvas ref={canvasRef} width={canvasOptions.width} height={canvasOptions.height} ></canvas>
    </>
  );
}

export default Cavas;
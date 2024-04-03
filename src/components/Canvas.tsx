import {useEffect} from 'react'
import type {CanvasProps} from '../types/types'
import React from 'react'

interface Props {
  canvasProps: CanvasProps // 색상 정보를 포함하는 객체
}

// forwardRef와 함께 props 타입 지정
const Canvas = React.forwardRef<HTMLCanvasElement, Props>(({canvasProps}, ref) => {
  console.log('Canvas Render: ' + canvasProps.content)

  const canvasOptions = {...canvasProps}
  const fontOptions = canvasOptions.font

  useEffect(() => {
    // ref를 사용해 캔버스에 접근
    const canvasRef = ref as React.RefObject<HTMLCanvasElement>

    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')

      canvas.width = canvasOptions.width
      canvas.height = canvasOptions.height

      if (ctx) {
        // 1. 배경 색 설정하기
        ctx.fillStyle = canvasOptions.backgroundColor
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // 2. 글자 설정하기
        // 2-1) 글자 가운데 정렬
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'

        // 2-2) 글자 색 설정
        ctx.fillStyle = fontOptions.fontColor

        // 2-3) 글자 크기 및 폰트 설정
        ctx.font = `${fontOptions.fontWeight} ${fontOptions.fontSize}px ${fontOptions.fontFamily}`

        // 2-4) 글자 채우기
        ctx.fillText(canvasOptions.content, canvas.width / 2, canvas.height / 2)
      }
    }
  }, [canvasProps, ref])

  return <canvas ref={ref} width='200' height='100' />
})

export default Canvas

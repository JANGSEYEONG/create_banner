import {useEffect} from 'react'
import React from 'react'

import {ThumnailDesignAtom} from '../recoil/ThumbnailAtom'
import {useRecoilValue} from 'recoil'

// forwardRef와 함께 props 타입 지정
const Canvas = React.forwardRef<HTMLCanvasElement>((props, ref) => {
  console.log('canvas render')
  const thumbnailOption = useRecoilValue(ThumnailDesignAtom)

  useEffect(() => {
    // ref를 사용해 캔버스에 접근
    const canvasRef = ref as React.RefObject<HTMLCanvasElement>

    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')

      canvas.width = thumbnailOption.width
      canvas.height = thumbnailOption.height

      if (ctx) {
        // 1. 배경 색 설정하기
        ctx.fillStyle = thumbnailOption.backgroundColor
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // 2. 글자 설정하기
        // 2-1) 글자 가운데 정렬
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'

        // 2-2) 글자 색 설정
        ctx.fillStyle = thumbnailOption.font.color

        // 2-3) 글자 크기 및 폰트 설정
        ctx.font = `${thumbnailOption.font.weight} ${thumbnailOption.font.size}px ${thumbnailOption.font.family}`

        // 2-4) 글자 채우기
        ctx.fillText(thumbnailOption.content, canvas.width / 2, canvas.height / 2)
      }
    }
  }, [thumbnailOption, ref])

  return (
    <canvas ref={ref} width={thumbnailOption.width} height={thumbnailOption.height} />
  )
})

export default Canvas

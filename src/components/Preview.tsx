import React, {useCallback, useRef} from 'react'

import Canvas from './Canvas'

import * as Util from './../utils'
import useLocalStorage from '../hooks/useLocalStorage'
import localStorageKeys from '../enums/localStorageKeys'

import type {PreviewProps} from '../types/types'

const Preview: React.FC<PreviewProps> = ({fileName}) => {
  console.log('preview render')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [_, setRecentDataURL] = useLocalStorage(localStorageKeys.DownloadImage, '')

  const handleDownloadClick = useCallback(() => {
    if (canvasRef.current) {
      const dataURL = canvasRef.current.toDataURL('image/png')

      // 이미지 다운로드 받고
      Util.downloadImageFromDataURL(dataURL, fileName.current)

      // 로컬스토리지 저장하기
      setRecentDataURL(dataURL)
    }
  }, [canvasRef, canvasRef.current, fileName.current])

  return (
    <div className='preview'>
      <Canvas ref={canvasRef}></Canvas>
      <div className='preview_btn'>
        {handleDownloadClick && <button onClick={handleDownloadClick}>Download</button>}
      </div>
    </div>
  )
}

export default Preview

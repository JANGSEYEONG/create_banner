import React, {useRef} from 'react'

import Canvas from './Canvas'

import type {PreviewProps, CanvasProps} from './../types/types'

import * as Util from './../utils'
import useLocalStorage from '../hooks/useLocalStorage'
import localStorageKeys from '../enums/localStorageKeys'

const Preview: React.FC<{previewProps: PreviewProps; fileName: string}> = ({
  previewProps,
  fileName
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [_, setRecentDataURL] = useLocalStorage(localStorageKeys.DownloadImage, '')

  const handleDownloadClick = () => {
    if (canvasRef.current) {
      const dataURL = canvasRef.current.toDataURL('image/png')

      // 이미지 다운로드 받고
      Util.downloadImageFromDataURL(dataURL, fileName)

      // 로컬스토리지 저장하기
      setRecentDataURL(dataURL)
    }
  }

  const canvasProps: CanvasProps = {
    ...previewProps
  }

  return (
    <div className='preview'>
      <Canvas canvasProps={canvasProps} ref={canvasRef}></Canvas>
      <div className='preview_btn'>
        {handleDownloadClick && <button onClick={handleDownloadClick}>Download</button>}
      </div>
    </div>
  )
}

export default Preview

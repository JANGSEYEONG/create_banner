import React, {useCallback} from 'react'

import ColorPicker from './../components/ColorPicker'
import LabelInput from './../components/LabelInput'

import {useRecoilState} from 'recoil'
import {ThumnailDesignAtom} from '../recoil/ThumbnailAtom'
import {SettingProps} from '../types/types'

const Setting: React.FC<SettingProps> = ({fileName}) => {
  const [thumbnailOption, setThumbnailOption] = useRecoilState(ThumnailDesignAtom)

  const changeBackgroundColor = useCallback(
    (color: string) => {
      setThumbnailOption(prev => {
        return {...prev, backgroundColor: color}
      })
    },
    [setThumbnailOption]
  )

  const changeFontColor = useCallback(
    (color: string) => {
      setThumbnailOption(prev => {
        return {...prev, font: {...prev.font, color: color}}
      })
    },
    [setThumbnailOption]
  )

  return (
    <div className='setting'>
      <div className='setting_text'>
        <div>
          <LabelInput
            attrs={{
              type: 'text',
              id: 'textValue',
              placeholder: '제목을 입력해주세요.',
              value: thumbnailOption.content,
              onChange: e => {
                setThumbnailOption(prev => {
                  return {...prev, content: e.currentTarget.value}
                })
              }
            }}
            caption=''
            width='450px'></LabelInput>
        </div>
        <div>
          <LabelInput
            attrs={{
              type: 'number',
              id: 'textSize',
              placeholder: '크기',
              value: thumbnailOption.font.size,
              onChange: e => {
                setThumbnailOption(prev => {
                  return {...prev, font: {...prev.font, size: e.currentTarget.value}}
                })
              },
              step: '10'
            }}
            caption='글자 크기'
            width='50px'></LabelInput>

          {/* <LabelInput
            attrs={{
              type: 'number',
              id: 'textWeight',
              placeholder: '두께',
              value: 'Bold' //fontWeight
            }}
            caption='글자 두께'
            width='70px'></LabelInput> */}

          {/* <LabelInput
            attrs={{
              type: 'checkbox',
              id: 'textStyle',
              placeholder: '기울임',
              value: 'false' //fontStyle,
            }}
            caption='글자 기울임'
            width='50px'></LabelInput> */}

          <LabelInput
            attrs={{
              type: 'text',
              id: 'backColor',
              placeholder: '설정된 배경 색',
              value: thumbnailOption.backgroundColor,
              disabled: true
            }}
            caption='배경 색'
            width='100px'></LabelInput>

          <LabelInput
            attrs={{
              type: 'text',
              id: 'fontColor',
              placeholder: '설정된 글자 색',
              value: thumbnailOption.font.color,
              disabled: true
            }}
            caption='글자 색'
            width='100px'></LabelInput>
        </div>
        <div>
          <LabelInput
            attrs={{
              type: 'text',
              id: 'filename',
              placeholder: '저장할 파일 이름을 입력해주세요.',
              // value: fileName.current,
              onChange: e => {
                fileName.current = e.currentTarget.value
              }
            }}
            caption=''
            width='365px'></LabelInput>
        </div>
      </div>

      <div className='setting_color'>
        <ColorPicker
          name={'배경 색 설정'}
          color={thumbnailOption.backgroundColor}
          handleColorChange={changeBackgroundColor}></ColorPicker>
        <ColorPicker
          name={'글자 색 설정'}
          color={thumbnailOption.font.color}
          handleColorChange={changeFontColor}></ColorPicker>
        <div></div>
      </div>
    </div>
  )
}

export default Setting

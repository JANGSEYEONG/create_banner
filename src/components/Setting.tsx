import type {SettingProps} from '../types/types'

import React from 'react'

import ColorPicker from './../components/ColorPicker'
import LabelInput from './../components/LabelInput'

const Setting: React.FC<{settingProps: SettingProps}> = ({settingProps}) => {
  const [content, contentChange] = settingProps.content
  const [fontSize, fontSizeChange] = settingProps.fontSize
  const [fontColor, fontColorChange] = settingProps.fontColor
  const [backgroundColor, backgroundColorChange] = settingProps.backgroundColor
  const [fileName, fileNameChange] = settingProps.fileName

  return (
    <div className='setting'>
      <div className='setting_text'>
        <div>
          <LabelInput
            attrs={{
              type: 'text',
              name: 'textValue',
              placeholder: '제목을 입력해주세요.',
              value: content,
              onChange: e => contentChange(e.target.value)
            }}
            caption=''
            width='450px'></LabelInput>
        </div>
        <div>
          <LabelInput
            attrs={{
              type: 'number',
              name: 'textSize',
              placeholder: '크기',
              value: fontSize,
              onChange: e => fontSizeChange(e.target.value),
              step: '10'
            }}
            caption='글자 크기'
            width='50px'></LabelInput>

          {/* <LabelInput
            attrs={{
              type: 'number',
              name: 'textWeight',
              placeholder: '두께',
              value: 'Bold' //fontWeight
            }}
            caption='글자 두께'
            width='70px'></LabelInput> */}

          {/* <LabelInput
            attrs={{
              type: 'checkbox',
              name: 'textStyle',
              placeholder: '기울임',
              value: 'false' //fontStyle,
            }}
            caption='글자 기울임'
            width='50px'></LabelInput> */}

          <LabelInput
            attrs={{
              type: 'text',
              name: 'backColor',
              placeholder: '설정된 배경 색',
              value: backgroundColor,
              disabled: true
            }}
            caption='배경 색'
            width='100px'></LabelInput>

          <LabelInput
            attrs={{
              type: 'text',
              name: 'fontColor',
              placeholder: '설정된 글자 색',
              value: fontColor,
              disabled: true
            }}
            caption='글자 색'
            width='100px'></LabelInput>
        </div>
        <div>
          <LabelInput
            attrs={{
              type: 'text',
              name: 'filename',
              placeholder: '저장할 파일 이름을 입력해주세요.',
              value: fileName,
              onChange: e => fileNameChange(e.target.value)
            }}
            caption=''
            width='365px'></LabelInput>
        </div>
      </div>

      <div className='setting_color'>
        <ColorPicker
          name={'배경 색 설정'}
          color={backgroundColor}
          handleColorChange={backgroundColorChange}></ColorPicker>
        <ColorPicker
          name={'글자 색 설정'}
          color={fontColor}
          handleColorChange={fontColorChange}></ColorPicker>
        <div></div>
      </div>
    </div>
  )
}

export default Setting

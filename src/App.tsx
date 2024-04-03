import useInput from './hooks/useInput'
import useColor from './hooks/useColor'

import Preview from './components/Preview'
import Setting from './components/Setting'

import type {PreviewProps, SettingProps} from './types/types'
import './assets/scss/App.scss'

function App() {
  console.log('App Render')

  // 상태 끌어올리기
  const [backgroundColor, backgroundColorChange] = useColor('white')
  const [fontColor, fontColorChange] = useColor('pink')

  const [content, contentChange] = useInput<string>('hello')

  const [fontStyle, fontStyleChange] = useInput<string>('normal')
  const [fontVariant, fontVariantChange] = useInput<string>('normal')
  const [fontWeight, fontWeightChange] = useInput<string>('100')
  const [fontSize, fontSizeChange] = useInput<string>('75')
  const [fontFamily, fontFamilyChange] = useInput<string>('Arial')

  const [fileName, fileNameChange] = useInput<string>('')

  const previewProps: PreviewProps = {
    width: 380,
    height: 200, /// 1 : 1.9
    backgroundColor: backgroundColor,
    content: content,
    font: {
      fontStyle,
      fontVariant,
      fontWeight,
      fontSize,
      fontFamily,
      fontColor
    }
  }

  const settingProps: SettingProps = {
    content: [content, contentChange],
    backgroundColor: [backgroundColor, backgroundColorChange],
    fileName: [fileName, fileNameChange],
    fontStyle: [fontStyle, fontStyleChange],
    fontVariant: [fontVariant, fontVariantChange],
    fontWeight: [fontWeight, fontWeightChange],
    fontSize: [fontSize, fontSizeChange],
    fontFamily: [fontFamily, fontFamilyChange],
    fontColor: [fontColor, fontColorChange]
  }

  return (
    <>
      <div className='app'>
        <Preview previewProps={previewProps} fileName={fileName} />
        <Setting settingProps={settingProps} />
      </div>
    </>
  )
}

export default App

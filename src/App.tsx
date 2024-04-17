import {useRef} from 'react'

import Preview from './components/Preview'
import Setting from './components/Setting'

import './assets/scss/App.scss'

function App() {
  console.log('App Render')

  // props drilling이 깊지도 않고, fileName 변경으로는 재렌더링이 안일어나도록 하기 위해 useRef 사용
  const fileName = useRef<string>('')

  return (
    <>
      <div className='app'>
        <Preview fileName={fileName} />
        <Setting fileName={fileName} />
      </div>
    </>
  )
}

export default App

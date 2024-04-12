import type {LabelInputProps} from '../types/types'

const LabelInput: React.FC<{
  attrs: LabelInputProps
  caption: string
  width: string
}> = ({attrs, caption = '', width = '100px'}) => {
  return (
    <>
      <label htmlFor={attrs.id}>{caption}</label>
      <input {...attrs} style={{width}}></input>
    </>
  )
}

export default LabelInput

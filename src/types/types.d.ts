export type ThumnailDesign = {
  width: number
  height: number
  backgroundColor: string
  content: string
  font: {
    style: string
    variant: string
    weight: string
    size: string
    family: string
    color: string
  }
}

export type ColorPickerProps = {
  name: string
  color: string
  handleColorChange: (color: string) => void
}

export type PreviewProps = {
  fileName: MutableRefObject<string>
}

export type SettingProps = {
  fileName: MutableRefObject<string>
}

export type LabelInputProps = {
  type: string
  id: string
  placeholder: string
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  step?: string
  disabled?: boolean
}

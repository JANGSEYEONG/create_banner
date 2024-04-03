export type PreviewProps = {
  width: number
  height: number
  backgroundColor: string
  content: string
  font: {
    fontStyle: string
    fontVariant: string
    fontWeight: string
    fontSize: string
    fontFamily: string
    fontColor: string
  }
}

export type CanvasProps = PreviewProps

export type ColorPickerProps = {
  name: string
  color: string
  handleColorChange: (color: string) => void
}

export type SettingProps = {
  content: [string, (state: string) => void]
  backgroundColor: [string, (state: string) => void]
  fileName: [string, (state: string) => void]
  fontStyle: [string, (state: string) => void]
  fontVariant: [string, (state: string) => void]
  fontWeight: [string, (state: string) => void]
  fontSize: [string, (state: string) => void]
  fontFamily: [string, (state: string) => void]
  fontColor: [string, (state: string) => void]
}

export type LabelInputProps = {
  type: string
  name: string
  placeholder: string
  value: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  step?: string
  disabled?: boolean
}

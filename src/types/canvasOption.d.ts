export type CanvasOptionSchema = {
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

export type CanvasOptionStoreSchema = {
  options: CanvasOptionSchema
  actions: {
    changeWidth: (width: number) => void
    changeHeight: (height: number) => void
    changeBackgroundColor: (color: string) => void
    changeContent: (content: string) => void
    changeFontStyle: (style: string) => void
    changeFontVariant: (variant: string) => void
    changeFontWeight: (weight: string) => void
    changeFontSize: (size: string) => void
    changeFontFamily: (family: string) => void
    changeFontColor: (color: string) => void
  }
}

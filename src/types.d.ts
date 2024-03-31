export type CanvasProps = {
  width: number;
  height: number;
  backgroundColor: string;
  text: string;
  font : {
    feature: string;
    size: string;
    color: string;
  }
  fileName: string;
}

export type ColorPickerProps = {
  color: string,
  handleColorChange: (color:string) => void;
}
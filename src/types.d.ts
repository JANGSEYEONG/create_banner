export type CanvasProps = {
  width: number;
  height: number;
  backgroundColor: string;
  text: string;
  font : {
    size: number;
    color: string;
  }
}

export type ColorPickerProps = {
  color: string,
  handleColorChange: (color:string) => void;
}
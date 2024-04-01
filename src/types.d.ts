export type CanvasProps = {
  canvas: HTMLCanvasElement|null;
  setCanvas: (state:HTMLCanvasElement)=>void;
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
  name: string,
  color: string,
  handleColorChange: (color:string) => void;
}
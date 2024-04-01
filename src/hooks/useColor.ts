import { useCallback, useState } from "react";

const useColor = (initialColor: string):[string, (color:string)=>void]=>{

  const [color, setColor] = useState<string>(initialColor);

  const handleColorChange = useCallback((color:string)=>{
    setColor(color);
  },[color]);

  return [color, handleColorChange];
}

export default useColor;
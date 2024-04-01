import { useCallback, useState } from "react";

const useInput = (initialValue:string):[string, (newValue:string)=>void]=>{

  const [value, setValue] = useState<string>(initialValue);

  // input 내용이 바뀔 경우
  const handleInputChange = useCallback((newValue: string)=>{
    setValue(newValue);
  }, [value]);

  return [value, handleInputChange];

}

export default useInput;
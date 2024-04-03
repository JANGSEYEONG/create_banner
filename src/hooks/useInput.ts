import {useCallback, useState} from 'react'

const useInput = <T>(initialValue: T): [T, (newValue: T) => void] => {
  const [value, setValue] = useState<T>(initialValue)

  // input 내용이 바뀔 경우
  const handleInputChange = useCallback((newValue: T) => {
    setValue(newValue)
  }, [])

  return [value, handleInputChange]
}

export default useInput

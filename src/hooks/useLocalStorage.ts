import {useState} from 'react'

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  // 상태 초기화 함수. localStorage에서 값을 읽거나 초기값을 사용
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      // localStorage에 값이 있으면 파싱하여 반환, 없으면 initialValue 반환
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  // localStorage에 값을 저장하는 함수
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // 새로운 값을 계산하기 위해 함수가 제공될 수 있음
      const valueToStore = value instanceof Function ? value(storedValue) : value
      // 상태 업데이트
      setStoredValue(valueToStore)
      // localStorage에 값 저장
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage

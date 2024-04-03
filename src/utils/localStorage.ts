export const setLocal = (key: string, value: string) => {
  const data: string = JSON.stringify(value)
  localStorage.setItem(key, data)
}

export const getLocal = (key: string) => {
  const item = localStorage.getItem(key)

  if (item) {
    return JSON.parse(item)
  }

  return null
}

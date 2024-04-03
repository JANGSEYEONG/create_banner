export const downloadImageFromDataURL = (dataURL: string, fileName: string): void => {
  const downloadLink = document.createElement('a')
  downloadLink.download = fileName
  downloadLink.href = dataURL
  downloadLink.click()
}

import { useCallback } from "react";

const useDownloadCanvasImg = (canvas: HTMLCanvasElement | null, fileName: string, imgDataUrl?: string) => {

  const downloadImg = useCallback(() => {

    let dataURL = imgDataUrl;

    if (canvas) {
      dataURL = canvas.toDataURL('image/png');
    }

    if(dataURL){
      const downloadLink = document.createElement('a');
      downloadLink.download = fileName;
      downloadLink.href = dataURL;
      downloadLink.click();   
    }
    
  }, [canvas, fileName]);

  return [downloadImg];
}

export default useDownloadCanvasImg;
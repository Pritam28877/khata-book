// image worker
import imageWorker from 'src/webWorkers/Image';

// utils
import { decodeImage, drawableToImageData, canvasEncode } from './utils';
import * as encoder from 'src/webWorkers/Image/encoder/oxipng/encoder-meta';

export const convertToPng = async (url: string, fileName: string) => {
  try {
    const drawable = await decodeImage(url);
    const data = drawableToImageData(drawable);
    // resize image using web worker and wasm
    const result = await imageWorker.resize(data);
    const pngBlog = await canvasEncode(result, 'image/png');
    // convert to oxiPNG for small sizes
    const imageFile = await imageWorker.compressImage(pngBlog, fileName);
    const imageUrl = URL.createObjectURL(imageFile);

    return {
      file: imageFile,
      url: imageUrl,
      name: fileName.replace(/.[^.]*$/, `.${encoder.extension}`),
    };
  } catch (e) {
    return Promise.reject(e);
  }
};

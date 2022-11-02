import { IEncodeOptions } from './encoder-meta';

export async function compress(
  data: ArrayBuffer,
  options: IEncodeOptions
): Promise<ArrayBuffer> {
  const { optimise } = await import(
    /* webpackChunkName: "process-png" */
    'src/webWorkers/Image/codecs/oxipng/pkg'
  );
  return optimise(new Uint8Array(data), options.level).buffer;
}

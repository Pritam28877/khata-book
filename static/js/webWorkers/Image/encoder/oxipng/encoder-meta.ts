export interface IEncodeOptions {
  level: number;
}
export interface IEncoderState {
  type: typeof type;
  options: IEncodeOptions;
}

export const type = 'png';
export const label = 'OxiPNG';
export const mimeType = 'image/png';
export const extension = 'png';

export const defaultOptions: IEncodeOptions = {
  level: 2,
};

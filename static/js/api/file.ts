// helpers
import KBFetch from 'src/helpers/api';
import { ROUTES, getUrl } from 'src/api/url';

interface IUploadProps {
  file: Blob;
  fileName: string;
  userId: string;
}

export const upload = async ({ file, fileName, userId }: IUploadProps) => {
  const baseUrl = getUrl(ROUTES.S3_UPLOAD_URL);

  const fileExtension = fileName.replace(/^.*\./, '');

  const params = new URLSearchParams();
  params.append('userId', userId);
  params.append('contentType', file.type);
  params.append('extension', `.${fileExtension}`);

  const url = `${baseUrl}?${params.toString()}`;

  try {
    const response = await KBFetch(ROUTES.S3_UPLOAD_URL, url);
    const data: {
      accessUrl: string;
      uploadUrl: string;
    } = await response?.json();

    await fetch(data.uploadUrl, {
      method: 'PUT',
      body: file,
    });

    return data.accessUrl;
  } catch (e) {
    return Promise.reject(e);
  }
};

// libs
import { wrap, releaseProxy } from 'comlink';

const worker = new Worker('./Image', { name: 'img', type: 'module' });
const workerApi = wrap<import('./Image').ImageWorker>(worker);

export const imageWorkerCleanup = () => {
  workerApi[releaseProxy]();
  worker.terminate();
};

export default workerApi;

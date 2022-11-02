// libs
import { wrap } from 'comlink';

const worker = new Worker('./ApiWorker', { name: 'db', type: 'module' });
const workerApi = wrap<import('./ApiWorker').ApiWorker>(worker);

export default workerApi;

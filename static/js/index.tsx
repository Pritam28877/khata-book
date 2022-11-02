// libs
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// service worker
import * as serviceWorker from './serviceWorker';

// helpers
import { dispatchServiceWorkerUpdate } from 'src/helpers/customEvents';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const onSWUpdate = (sw: ServiceWorker) => {
  dispatchServiceWorkerUpdate(sw);
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({ onUpdate: onSWUpdate });

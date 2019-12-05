import React from 'react';
import DOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app/app.js';
import store from './store';

import Theme from './theme.scss';

DOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app-container')
);

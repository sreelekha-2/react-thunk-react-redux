import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import apiData from './redux/apidata';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

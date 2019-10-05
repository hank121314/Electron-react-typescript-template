import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import { App } from './App';
import 'normalize.css';

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root'),
);

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept();
  }
}

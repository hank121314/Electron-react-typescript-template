// src/main.tsx
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Index = () => {
  return <div>Hello React!!</div>;
};

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

ReactDOM.render(
  <AppContainer>
    <Index />
  </AppContainer>,
  document.getElementById('root'),
);

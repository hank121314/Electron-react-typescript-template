// src/main.tsx
import React, { ReactElement } from 'react';
import { History } from 'history';
import { Button } from '@material-ui/core';
import routes from '../routes';

export interface SplashProps {
  history: History;
}

export const Splash = (props: SplashProps): ReactElement => {
  const navigationToDashboard = (): void => {
    props.history.push(routes.Dashboard);
  };
  return (
    <div>
      <Button onClick={navigationToDashboard}>Go to dashboard!</Button>
    </div>
  );
};

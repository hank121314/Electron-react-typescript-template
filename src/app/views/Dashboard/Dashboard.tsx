// src/main.tsx
import React, { ReactElement } from 'react';
import { Button } from '@material-ui/core';
import { History } from 'history';
import styles from './Dashboard.scss';
import routes from '../routes';

export interface DashboardProps {
  history: History;
}

export const Dashboard = (props: DashboardProps): ReactElement => {
  const navigateToSplash = (): void => {
    props.history.replace(routes.Splash);
  };
  return (
    <div>
      <p className={styles.title}>Hello React Dashboard!!</p>
      <Button onClick={navigateToSplash}>Back to Splash</Button>
    </div>
  );
};

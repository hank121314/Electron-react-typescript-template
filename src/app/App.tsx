// src/main.tsx
import React, { ReactElement } from 'react';
import { Button } from '@material-ui/core';
import styles from './App.scss';

export const Index = (): ReactElement => {
  return (
    <div className={styles.app}>
      <Button color="primary" className={styles.title}>
        Hello React!!
      </Button>
    </div>
  );
};

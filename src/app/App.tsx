// src/main.tsx
import React from 'react';
import { Button } from '@material-ui/core';
import styles from './App.scss';

export const Index = () => {
  return (
    <div className={styles.App}>
      <Button color="primary" className={styles.title}>
        Hello React!!
      </Button>
    </div>
  );
};

// src/main.tsx
import React, { ReactElement } from 'react';
import styles from './App.scss';

export const Index = (): ReactElement => {
  return (
    <div className={styles.app}>
      <p className={styles.title}>Hello React!!</p>
    </div>
  );
};

import React from 'react';
import BottomNav from './BottomNav';
import styles from './MainLayout.module.scss';

function MainLayout({ children }) {
  return (
    <main className={styles.main}>
      <article>{children}</article>
      <BottomNav />
    </main>
  );
}

export default MainLayout;

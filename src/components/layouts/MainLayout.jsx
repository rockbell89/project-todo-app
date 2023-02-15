import React from 'react';
import BottomNav from './BottomNav';
import styles from './MainLayout.module.scss';

function MainLayout({ children, onClickCreateModal }) {
  return (
    <main className={styles.main}>
      <article>{children}</article>
      <BottomNav onClickCreateModal={onClickCreateModal} />
    </main>
  );
}

export default MainLayout;

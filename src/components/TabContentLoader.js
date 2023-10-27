import React, { Suspense, lazy } from 'react';
import Loader from './Loader';
import styles from '../styles/tabs.module.css';

const TabContentLoader = ({ path }) => {
  const TabContent = lazy(() => import(`../${path}`));

  return (
    <Suspense fallback={<Loader />}>
      <div className={styles.container}>
        <TabContent />
      </div>
    </Suspense>
  );
};

export default TabContentLoader;

import React from 'react';
import styles from '../styles/tabs.module.css';
import { Routes, Route, Link, useMatch } from 'react-router-dom';
import tabsData from '../tabs/tabs.json';
import TabContentLoader from './TabContentLoader';

const Tabs = () => {
  const params = useMatch('/*');

  return (
    <div>
      <nav className={styles.tabs}>
        <ul className={styles.tabs_list}>
          {tabsData.map((tab) => (
            <li
              className={tab.id === params.params['*'] ? styles.active : ''}
              key={tab.id}
            >
              <Link to={`${tab.id}`}>{tab.title.split(' ').slice(1)}</Link>
            </li>
          ))}
        </ul>

        <Link to={'/'}>Home</Link>
      </nav>

      <Routes>
        {tabsData.map((tab) => (
          <Route
            key={tab.id}
            path={`/${tab.id}`}
            element={<TabContentLoader path={tab.path} />}
          />
        ))}
        <Route
          path="/*"
          element={<TabContentLoader path={tabsData[0].path} />}
        />
      </Routes>
    </div>
  );
};

export default Tabs;

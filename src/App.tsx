import React from 'react';
import styles from './App.module.css';
import Example from './components/example.component';

const App = () => (
  <section>
    <div className={styles.App}>
      <h1>React TypeScript Webpack Starter Template</h1>
      <img className={styles.App__image} src="./images/react.svg" alt="react-logo" />
      <p className={styles.App__text}>Text</p>
    </div>
    <Example></Example>
  </section>
);
export default App;

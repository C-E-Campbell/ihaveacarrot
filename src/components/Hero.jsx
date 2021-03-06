import React from 'react';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <div className="row">
      <div className=" teal lighten-2">
        <div className={styles.hero}>
          <div className={styles.hero_text}>
            <h1 className={styles.hero_h1}>iHaveACarrot</h1>
            <h1 className={styles.hero_sub_h1}>
              For those moments when you only have a carrot
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

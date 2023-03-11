import React from 'react';
import {
  default as image1,
  default as image2,
} from '../../assets/home_bg2.jpg';
import Navbar from '../../components/navbar/Navbar';
import styles from './about.module.css';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.mainHeader}>
        <h1>About</h1>
      </div>
      <div className={styles.container}>
        <section className={styles.section}>
          <div className={styles.content}>
            <h2>History</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              condimentum augue id lectus consequat imperdiet. Etiam vestibulum
              odio quis leo fermentum commodo.{' '}
            </p>
          </div>
          <div className={styles.image}>
            <img
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              src={image1}
              alt='Test 1'
            />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.image}>
            <img
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              src={image2}
              alt='Test 2'
            />
          </div>
          <div className={styles.content}>
            <h2>Structure</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              condimentum augue id lectus consequat imperdiet. Etiam vestibulum
              odio quis leo fermentum commodo.{' '}
            </p>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.content}>
            <h2>Capacity</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              condimentum augue id lectus consequat imperdiet. Etiam vestibulum
              odio quis leo fermentum commodo.{' '}
            </p>
          </div>
          <div className={styles.image}>
            <img
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              src={image1}
              alt='Test 1'
            />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.image}>
            <img
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              src={image2}
              alt='Test 2'
            />
          </div>
          <div className={styles.content}>
            <h2>Environment</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              condimentum augue id lectus consequat imperdiet. Etiam vestibulum
              odio quis leo fermentum commodo.{' '}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

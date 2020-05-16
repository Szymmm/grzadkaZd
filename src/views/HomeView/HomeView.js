import React from 'react';
import styles from "./Home.module.scss";
import boxImage from '../../assets/images/home_skrzynka.jpg';
import patchImage from '../../assets/images/home_grzadka.jpg';
import otherImage from '../../assets/images/home_other.jpg';
import app from "../../base";

const HomeView = () => ( 
  <ol>
    <button onClick={() => app.auth().signOut()}>Sign out</button>
    <h1 className={styles.headline}>Witaj na eGrządce</h1>
    <p className={styles.description_main}>eGrządka pomoże ci odnaleźć zdrowe i świeże produkty z wioski nieopodal ciebie</p>
    <p className={styles.description_main}>Tu skonfigurujesz dostawamy oraz podejrzysz co dzieje się w ogródku</p>
    <ul className={styles.wrapper}>
        <img 
          src={patchImage} 
          className={styles.image}
          alt="skrzynka"      
        />
        <div>
          <h1>Nasze uprawy</h1>
          <p className={styles.description}>Sprawdź, co zostało wysiane i nabierz apetytu na to co niedługo będziemy zbierać.</p>
        </div>
      </ul>
      <li className={styles.wrapper}>
        <div>
          <h1>Twoja skrzynka</h1>
          <p className={styles.description}>Skonfiguruj swoją skrzynkę, by otrzymywać ulubione warzywa i owoce.</p>
        </div>
        <img 
          src={boxImage} 
          className={styles.image}
          alt="skrzynka"      
        />
      </li>
      <li className={styles.wrapper}>
        <img 
          src={otherImage} 
          className={styles.image}
          alt="skrzynka"      
        />
        <div>
          <h1>Lokalne wyroby</h1>
          <p className={styles.description}>Zobacz co jeszcze ci oferujemy. W naszej ofercie mamy także inne produkty z lokalnego rynku.</p>
        </div>
      </li>
    </ol>
);

export default HomeView;
import 'rc-slider/assets/index.css';
import styles from "./Box.module.scss";
import React from 'react';
import Slider from 'rc-slider';

const wrapperStyle = {
 // width: 400, 
  margin: 50 };


const BoxView = () => (
    <div style={wrapperStyle}>
  
       <h1 className={styles.headline}>Ustawienia skrzynki</h1>
       <p className={styles.description_main}>Ustaw swoje preferencje warzyw i owoców. Przesuń suwak by wybrać warzywa i owoce, które lubisz najbardziej, a także te których mógłbyś dostać mniej.</p>


      <p className={styles.description_slider}>Sałata masłowa</p>
      <li className={styles.wrapper}>
      <Slider
        dotStyle={{borderColor: '#e9e9e9'}} activeDotStyle={{borderColor: '#e9e9e9'}}
        trackStyle={{ backgroundColor: 'green' }}
        handleStyle={{ borderColor: 'lightgreen' }}
        min={1} max={3} startPoint={2} defaultValue={2} marks={{ 1: 'mniej', 2: 'średnio', 3: 'więcej' }} step={null} />
    </li>
    
    <p className={styles.description_slider}>Sałata lodowa</p>
    <li className={styles.wrapper}>
    <Slider
      dotStyle={{borderColor: '#e9e9e9'}} activeDotStyle={{borderColor: '#e9e9e9'}}
      trackStyle={{ backgroundColor: 'green' }}
      handleStyle={{ borderColor: 'lightgreen' }}
      min={1} max={3} startPoint={2} defaultValue={2} marks={{ 1: 'mniej', 2: 'średnio', 3: 'więcej' }} step={null} />
 </li>
 
   <p className={styles.description_slider}>Sałata rzymska</p>
   <li className={styles.wrapper}>
  <Slider 
    dotStyle={{borderColor: '#e9e9e9'}} activeDotStyle={{borderColor: '#e9e9e9'}}
    trackStyle={{ backgroundColor: 'green' }}
    handleStyle={{ borderColor: 'lightgreen' }}
    min={1} max={3} startPoint={2} defaultValue={2} marks={{ 1: 'mniej', 2: 'średnio', 3: 'więcej' }} step={null} />
</li>

 <p className={styles.description_slider}>Rukola</p>
 <li className={styles.wrapper}>
 <Slider
  dotStyle={{borderColor: '#e9e9e9'}} activeDotStyle={{borderColor: '#e9e9e9'}}
  trackStyle={{ backgroundColor: 'green' }}
  handleStyle={{ borderColor: 'lightgreen' }}
  min={1} max={3} startPoint={2} defaultValue={2} marks={{ 1: 'mniej', 2: 'średnio', 3: 'więcej' }} step={null} />
</li>
</div>
);


export default BoxView;
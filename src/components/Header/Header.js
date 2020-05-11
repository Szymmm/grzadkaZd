import React from 'react';
import Button from '../Button/Button';
import HeaderNavigation from './HeaderNavigation';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import logoImage from '../../assets/images/logo.PNG';

const Header = ({ openModalFn }) => (
  <header className={styles.wrapper}>
    <NavLink activeClassName={styles.navItemLinkActive}
      className={styles.navItemLink} to="/home">
      <img className={styles.logo} src={logoImage} alt="Zdalny Ogródek logo" />
    </NavLink >
    <HeaderNavigation />
    <Button onClick={openModalFn} secondary>new item</Button>
  </header>
);

export default Header;
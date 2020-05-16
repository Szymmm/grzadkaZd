import React, { Component } from 'react';
import Button from '../Button/Button';
import HeaderNavigation from './HeaderNavigation';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import logoImage from '../../assets/images/logo.PNG';
import app from "../../base";

class Header extends Component {
  constructor(props) {
    super(props)
    this.closePopover = this.closePopover.bind(this)
    this.state = {
      popoverOpen: false
    }
  }

  closePopover() {
    this.setState({ popoverOpen: false })
  }

render() {
    return (  
    <header className={styles.wrapper}>
    <NavLink activeClassName={styles.navItemLinkActive}
      className={styles.navItemLink} to="/">
      <img className={styles.logo} src={logoImage} alt="Zdalny Ogródek logo" />
    </NavLink >
    <HeaderNavigation />
    {
          this.props.authenticated
          ? (
            <Button onClick={() => app.auth().signOut()}>Wyloguj</Button>          )
            : (
              <div className="pt-navbar-group pt-align-right">
                <Button onClick={this.props.openModalFn}>Zaloguj się</Button>
              </div>
            )
        }
  </header>
);
    }
  }

export default Header;
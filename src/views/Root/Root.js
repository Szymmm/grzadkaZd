import React from "react";
import "./index.css";
import AppContext from '../../context';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import TwittersView from '../TwittersView/TwittersView';
import ArticlesView from '../ArticlesView/ArticlesView';
import BoxView from '../BoxView/BoxView';
import HomeView from '../HomeView/HomeView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import Login from '../Login';
import SignUp from '../SignUp';
import { AuthProvider } from "../../Auth";
import PrivateRoute from "../../PrivateRoute";
import app from '../../base';

function AuthenticatedRoute({component: Component, authenticated, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
          ? <Component {...props} {...rest} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} /> } />
  )
}


class Root extends React.Component {
  state = {
      twitter: [          
        {
          image: 'https://sklep-nasiona.pl/images/detailed/45/010507.jpg',
          title: 'Sałata Crimson - liściowa czerwona',
          description: 'Jej liście cechują się delikatnością, soczystością i wyjątkowo dobrym smakiem. Sałata Crimson doskonale sprawdza się jako składnik sałatek lud dodatek do kanapek. Jej atrakcyjnie wybarwione liście mogą być również doskonałą dekoracją wielu dań. Sałata liściowa jest warzywem niskokalorycznym, bogatym w sole wapnia, magnezu i żelaza oraz karoten, witaminy z grupy B i witaminę C.',
        },
        {
          image: 'https://sklep.swiatkwiatow.pl/images/detailed/60/salata-debolistna-dubacek.jpg',
          title: 'Sałata Dubacek - dębolistna zielona',
          description: 'Sałata Dubacek to odmiana sałaty liściowej zielonej, tak zwanej dębolistnej. Polecana przede wszystkim do sałatek, a także jako zielony dodatek do obiadu.',
        },
        {
          image: 'https://a.allegroimg.com/s400/064484/81edd5944085b19c95c6cdbebaff/SALATA-DEBOLISTNA-REDIN-CZERWONA-przepyszna',
          title: 'Sałata Redin - dębolistna czerwona',
          description: 'Znakomita sałata liściowa Redin tworzy intensywnie wybarwione rozety kruchych, bardzo smacznych liści. Sałata dębolistna ze względu na charakterystyczne, dekoracyjne ukształtowanie swoich delikatnych, wyśmienitych liści cieszy się rosnącą popularnością na polskim rynku.',
        }
      ],
      article: [ 
        {
          title: 'tytuł', 
          description: 'opis',
        }
      ],
      note: [],
    isModalOpen: false,
    authenticated: false
  };

  addItem = (e, newItem) => {
    e.preventDefault();

    this.setState(prevState => ({
      [newItem.type]: [...prevState[newItem.type], newItem]
    }));
    this.closeModal();
  };
  
  openModal = () => {
    this.setState({
      isModalOpen: true,
    })
  }
  
  closeModal = () => {
    this.setState({
      isModalOpen: false,
    })
  }

  componentWillMount() {
    this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false,
        })
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false,
        })
      }
    })
  }

  componentWillUnmount() {
    this.removeAuthListener();
  }

  render() {
    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addItem: this.addItem
    }
    
    return (
      <AuthProvider>
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} authenticated={this.state.authenticated} />
          <Switch>
            <Route exact path="/" component={HomeView} />
            <PrivateRoute exact path="/twitters" component={TwittersView} />
            <AuthenticatedRoute exact path="/home" 
              authenticated={this.state.authenticated} 
              component={HomeView} />
            <PrivateRoute path="/articles" component={ArticlesView} />
            <Route path="/box" component={BoxView} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
          { isModalOpen && <Modal closeModalFn={this.closeModal} /> }
        </AppContext.Provider>
      </BrowserRouter>
      </AuthProvider>
    );
  }
}

export default Root;

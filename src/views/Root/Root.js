import React from "react";
import "./index.css";
import AppContext from '../../context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TwittersView from '../TwittersView/TwittersView';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import HomeView from '../HomeView/HomeView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';

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

  render() {
    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addItem: this.addItem
    }
    
    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} />
          <Switch>
            <Route exact path="/" component={TwittersView} />
            <Route exact path="/home" component={HomeView} />
            <Route path="/articles" component={ArticlesView} />
            <Route path="/notes" component={NotesView} />
          </Switch>
          { isModalOpen && <Modal closeModalFn={this.closeModal} /> }
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;

import React from "react";
import AppContext from '../../context';
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Radio from "./FormRadio";

const types = {
  twitter: "twitter",
  article: "article"
};

const descriptions = {
  twitter: "Logowanie",
  article: "Rejestracja"
};

class Form extends React.Component {
  state = {
    type: types.twitter,
    name: '',
    surname: '',
    email: '',
    password: '',
    description: '',
  };

 

  handleRadioButtonChange = type => {
    this.setState({
      type: type,
    });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(`
    name: ${this.state.name},
    surname: ${this.state.surname},
    e-mail: ${this.state.email}
    `)
  };

  render() {
    const { type } = this.state;

    return (
      <AppContext.Consumer>
        {(context) => (
        <div className={styles.wrapper}>
          <Title>Add new {descriptions[type]}</Title>
          <form
            autoComplete="off"
            className={styles.form}
            onSubmit={(e) => context.addItem(e, this.state)}
          >
            <div className={styles.formOptions}>
              <Radio
                id={types.twitter}
                checked={type === types.twitter}
                changeFn={() => this.handleRadioButtonChange(types.twitter)}
              >
                Logowanie
              </Radio>
              <Radio
                id={types.article}
                checked={type === types.article}
                changeFn={() => this.handleRadioButtonChange(types.article)}
              >
                Rejestracja
              </Radio>
            </div>

            { type === types.article  ? 
            <Input 
              onChange={this.handleInputChange}
              value={this.state.name}
              name="name" 
              label={'Imię'} 
              /> : null }
            { type === types.article  ? 
            <Input 
              onChange={this.handleInputChange}
              value={this.state.surname}
              name="surname" 
              label={'Nazwisko'} 
              /> : null }
            <Input 
              onChange={this.handleInputChange}
              value={this.state.email}
              name="email" 
              label="e-mail"  />
            <Input 
              onChange={this.handleInputChange}
              value={this.state.password}
              name="password" 
              label="Hasło"  />
            
            <Button type="submit"> 
              {type === types.article ? 'Zarejestruj się' : 'Zaloguj się'}
            </Button>
          </form>
        </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;

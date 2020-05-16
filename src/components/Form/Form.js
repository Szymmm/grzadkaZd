import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import AppContext from '../../context';
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Radio from "./FormRadio";
import app from "../../base";
import { AuthContext } from "../../Auth";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles.wrapper}>
      <Title>Logowanie</Title>
      <form
          autoComplete="off"
          className={styles.form}
          onSubmit={handleLogin}
        >

      <h1></h1>
          
          
        <label>
          e-mail:
          <Input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          hasło:
          <Input name="password" type="password" placeholder="Password" />
        </label>
        <Button type="submit"> 
            Zaloguj się
        </Button>
      </form>
    </div>
  );
};

export default withRouter(Login);
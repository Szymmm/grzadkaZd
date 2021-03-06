import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../base";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
      <form onSubmit={handleSignUp} >
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <h1></h1>
        <label> 
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <h1></h1>
        <button type="submit">Zarejestruj</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
import React, { useState } from "react";
import Form from "../../Layouts/Form/Form";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const LoginForm: React.FC = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [formHasError, setFormHasError] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.currentTarget.value);
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordValue(event.currentTarget.value);
  };

  const auth = getAuth();
  const email = emailValue;
  const password = passwordValue;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFormHasError(() => false);
    setErrorMessage(() => "");
    console.log("ok");

    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredentials) => {
            return userCredentials;
          })
          .catch(() => {
            setFormHasError(() => true);
            setErrorMessage(() => "Wrong email/password combination");
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Form className="form login-form" onSubmit={handleSubmit}>
      <h1 className="form-title">Login</h1>
      <Input
        id="email"
        className="input email-input"
        name="email"
        type="email"
        placeholder="Email Address"
        value={emailValue}
        onChange={emailChangeHandler}
      />
      <Input
        id="password"
        className="input password-input"
        name="password"
        type="password"
        placeholder="Password"
        value={passwordValue}
        onChange={passwordChangeHandler}
      />
      <Button className="btn login-btn" type="submit">
        Login to your account
      </Button>
      {formHasError && <p className="error">{errorMessage}</p>}
      <p className="switch-form">
        Don't have an account?
        <a className="form-action" href="/signup">
          Sign Up
        </a>
      </p>
    </Form>
  );
};

export default LoginForm;

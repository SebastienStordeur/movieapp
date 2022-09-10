import React, { useState } from "react";
import Form from "../../Layouts/Form/Form";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import { getAuth, signInWithEmailAndPassword, setPersistence, browserLocalPersistence, Auth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [formHasError, setFormHasError] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const emailChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmailValue(event.target.value);
  };

  const passwordChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordValue(event.target.value);
  };

  const auth: Auth = getAuth();
  const email: string = emailValue;
  const password: string = passwordValue;

  const handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFormHasError(false);
    setErrorMessage("");

    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            return navigate("/");
          })
          .catch(() => {
            setFormHasError(true);
            setErrorMessage("Wrong email/password combination");
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Form className="form login-form" onSubmit={handleSubmit}>
      <h1 className="form-title">Login</h1>
      <div className="form-validation">
        <Input
          id="email"
          className="input email-input"
          name="email"
          type="email"
          placeholder="Email Address"
          value={emailValue}
          onChange={emailChangeHandler}
        />
      </div>
      <div className="form-validation">
        <Input
          id="password"
          className="input password-input"
          name="password"
          type="password"
          placeholder="Password"
          value={passwordValue}
          onChange={passwordChangeHandler}
        />
      </div>
      <Button className="btn login-btn" type="submit">
        Login to your account
      </Button>
      {formHasError && <p className="error">{errorMessage}</p>}
      <p className="switch-form">
        Don't have an account? &nbsp;
        <a className="form-action" href="/signup">
          Sign Up
        </a>
      </p>
    </Form>
  );
};

export default LoginForm;

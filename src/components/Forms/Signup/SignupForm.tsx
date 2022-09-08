import React, { useRef, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import Form from "../../Layouts/Form/Form";
import Button from "../../UI/Button";
import Input from "../../UI/Input";

const SignupForm: React.FC = () => {
  const [emailValue, setEmailValue] = useState<string>("");

  const auth = getAuth();
  const email = emailValue;
  const password = "password";

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <Form className="form signup-form" onSubmit={handleSubmit}>
      <h1 className="form-title">Sign Up</h1>
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
      />
      <Input
        id="confirm-password"
        className="input password-input"
        name="confirm-password"
        type="password"
        placeholder="Repeat Password"
      />
      <Button className="btn login-btn" type="submit">
        Login to your account
      </Button>
      <p className="switch-form">
        Already have an account?
        <a className="form-action" href="/login">
          Login
        </a>
      </p>
    </Form>
  );
};

export default SignupForm;

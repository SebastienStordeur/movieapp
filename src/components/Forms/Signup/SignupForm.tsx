import axios from "axios";
import React from "react";
import Form from "../../Layouts/Form/Form";
import Button from "../../UI/Button";
import Input from "../../UI/Input";

const SignupForm: React.FC = () => {
  let formIsValid = false;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
        {
          email: "test1@test.com",
          password: "password",
          returnSecureToken: true,
        }
      )
      .then((response) => console.log(response));

    console.log("submit");
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

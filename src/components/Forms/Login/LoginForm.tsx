import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import Form from "../../Layouts/Form/Form";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import { authActions } from "../../../store/auth/auth";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submit");

    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
        {
          email: "test@test.com",
          password: "password",
        }
        /*         {
          headers: {
            "Content-Type": "application/json",
          },
        } */
      )
      .then((response) => {
        console.log(response.data);
        const payload = {
          token: response.data.idToken,
          id: response.data.localId,
          email: response.data.email,
        };
        dispatch(authActions.login(payload));
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
      />
      <Input
        id="password"
        className="input password-input"
        name="password"
        type="password"
        placeholder="Password"
      />
      <Button className="btn login-btn" type="submit">
        Login to your account
      </Button>
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

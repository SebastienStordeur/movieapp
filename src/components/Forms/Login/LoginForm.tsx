import React from "react";
import { useDispatch } from "react-redux";
import Form from "../../Layouts/Form/Form";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import { authActions } from "../../../store/auth/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const email = "test@test.com";
  const password = "password";
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        const user = userCredentials.user;
        user.getIdTokenResult().then((response) => {
          const token: string = response.token;
          const payload = {
            token: token,
            id: user.uid,
          };
          dispatch(authActions.login(payload));
        });
      }
    );
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

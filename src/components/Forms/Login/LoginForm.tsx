import React from "react";
import Form from "../../Layouts/Form/Form";
import Button from "../../UI/Button";
import Input from "../../UI/Input";

const LoginForm: React.FC = () => {
  return (
    <Form className="form login-form">
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
      <Button className="btn login-btn">Login to your account</Button>
      <p className="switch-form">
        Don't have an account? <span className="form-action">Sign Up</span>
      </p>
    </Form>
  );
};

export default LoginForm;

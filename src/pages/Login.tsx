import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/Forms/Login/LoginForm";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";

const Login: React.FC = () => {
  return (
    <section className="form-section">
      <Button className="btn return-btn">
        <Link to="/">Return to Home</Link>
      </Button>
      <Card className="card login-card">
        <LoginForm />
      </Card>
    </section>
  );
};

export default Login;

import React from "react";
import LoginForm from "../components/Forms/Login/LoginForm";
import Card from "../components/UI/Card";

const Login: React.FC = () => {
  return (
    <section className="form-section">
      <Card className="card login-card">
        <LoginForm />
      </Card>
    </section>
  );
};

export default Login;

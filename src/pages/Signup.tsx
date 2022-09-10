import React from "react";
import SignupForm from "../components/Forms/Signup/SignupForm";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import { Link } from "react-router-dom";

const Signup: React.FC = () => {
  return (
    <section className="form-section">
      <Button className="btn return-btn">
        <Link to="/">Return to Home</Link>
      </Button>
      <Card className="card signup-card">
        <SignupForm />
      </Card>
    </section>
  );
};

export default Signup;

import React from "react";
import SignupForm from "../components/Forms/Signup/SignupForm";
import Card from "../components/UI/Card";

const Signup: React.FC = () => {
  return (
    <section className="form-section">
      <Card className="card signup-card">
        <SignupForm />
      </Card>
    </section>
  );
};

export default Signup;

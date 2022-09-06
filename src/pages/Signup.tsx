import React, { useState, useEffect } from "react";
import SignupForm from "../components/Forms/Signup/SignupForm";
import Card from "../components/UI/Card";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const Signup: React.FC = () => {
  const [user, setUser] = useState<any>();
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  console.log(user);
  return (
    <section className="form-section">
      <Card className="card signup-card">
        <SignupForm />
      </Card>
    </section>
  );
};

export default Signup;

import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import Form from "../../Layouts/Form/Form";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";

const SignupForm: React.FC = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState<string>("");

  const auth = getAuth();
  const email = emailValue;
  let password: string;

  if (passwordValue === confirmPasswordValue) {
    password = passwordValue;
  }

  const usersCollectionRef = collection(db, "users");

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.currentTarget.value);
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordValue(event.currentTarget.value);
  };

  const confirmPasswordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPasswordValue(event.currentTarget.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then(async (user) => {
      const userUid = user.user.uid;
      const email = user.user.email;
      await setDoc(doc(usersCollectionRef, userUid), {
        userUid,
        email,
        bookmarks: [],
      });
    });
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
        value={passwordValue}
        onChange={passwordChangeHandler}
      />
      <Input
        id="confirm-password"
        className="input password-input"
        name="confirm-password"
        type="password"
        placeholder="Repeat Password"
        value={confirmPasswordValue}
        onChange={confirmPasswordChangeHandler}
      />
      <Button className="btn login-btn" type="submit">
        Create an account
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

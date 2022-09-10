import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, Auth } from "firebase/auth";

import Form from "../../Layouts/Form/Form";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import { collection, CollectionReference, doc, DocumentData, setDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";

const SignupForm: React.FC = () => {
  const emailRegex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  const [emailValue, setEmailValue] = useState<string>("");
  const [emailHasError, setEmailHasError] = useState<boolean>(false);
  const [isEmailUsed, setIsEmailUsed] = useState<boolean>(false);

  const [passwordValue, setPasswordValue] = useState<string>("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState<string>("");
  const [passwordHasError, setPasswordHasError] = useState<boolean>(false);

  const auth: Auth = getAuth();
  const usersCollectionRef: CollectionReference<DocumentData> = collection(db, "users");
  const email: string = emailValue;
  let password: string;
  let formIsValid: boolean = false;

  const emailChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmailValue(event.currentTarget.value);
  };

  const passwordChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordValue(event.currentTarget.value);
  };

  const confirmPasswordChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPasswordValue(event.currentTarget.value);
  };

  if (emailRegex.test(emailValue) && passwordValue === confirmPasswordValue && passwordValue.length >= 6) {
    password = passwordValue;
    formIsValid = true;
  }

  const handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (emailValue.length < 1 || !emailRegex.test(emailValue)) {
      setEmailHasError(true);
    }

    if (passwordValue !== confirmPasswordValue || passwordValue.length < 6) {
      setPasswordHasError(true);
    }

    if (!formIsValid) return;

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (user) => {
        const userUid = user.user.uid;
        const email = user.user.email;
        await setDoc(doc(usersCollectionRef, userUid), {
          userUid,
          email,
          bookmarks: [],
        });
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          setIsEmailUsed(true);
        } else {
          setIsEmailUsed(false);
        }
      });
  };

  return (
    <Form className="form signup-form" onSubmit={handleSubmit}>
      <h1 className="form-title">Sign Up</h1>
      <div className="form-validation">
        <Input
          id="email"
          className="input email-input"
          name="email"
          type="email"
          placeholder="Email Address  (6 characters min.)"
          value={emailValue}
          onChange={emailChangeHandler}
        />
        {emailHasError && !emailRegex.test(emailValue) && <p className="error">Wrong email format.</p>}
        {isEmailUsed && <p className="error">Email already used.</p>}
      </div>
      <div className="form-validation">
        <Input
          id="password"
          className="input password-input"
          name="password"
          type="password"
          placeholder="Password"
          value={passwordValue}
          onChange={passwordChangeHandler}
        />
      </div>
      <div className="form-validation">
        <Input
          id="confirm-password"
          className="input password-input"
          name="confirm-password"
          type="password"
          placeholder="Repeat Password"
          value={confirmPasswordValue}
          onChange={confirmPasswordChangeHandler}
        />
        {passwordHasError && passwordValue !== confirmPasswordValue && (
          <p className="error">Passwords are not identical.</p>
        )}
        {passwordHasError &&
          passwordValue === confirmPasswordValue &&
          passwordValue.length < 6 &&
          confirmPasswordValue.length < 6 && <p className="error">Passwords should be 6 characters min.</p>}
      </div>
      <Button className="btn login-btn" type="submit">
        Create an account
      </Button>
      <p className="switch-form">
        Already have an account? &nbsp;
        <a className="form-action" href="/login">
          Login
        </a>
      </p>
    </Form>
  );
};

export default SignupForm;

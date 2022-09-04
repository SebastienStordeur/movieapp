import axios from "axios";

export function signup() {
  axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDmniwNqVuJoZCPd0e3-2oSHhTFEepnKKU",
    {
      email: "",
      password: "",
      returnSecureToken: true,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

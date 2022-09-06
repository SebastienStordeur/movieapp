import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  isAuthenticated: boolean;
  user: {
    id: string;
    email: string;
  };
};

const initialState: AuthState = {
  isAuthenticated: false,
  user: {
    id: "",
    email: "",
  },
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<any>) {
      const payload = action.payload;
      state.isAuthenticated = true;
      state.user.id = payload.id;
      state.user.email = payload.email;

      localStorage.setItem("token", payload.token);
    },
    logout(state) {
      localStorage.removeItem("token");
      return (state = initialState);
    },
    checkIfTokenExists(state) {
      state.isAuthenticated = true;
    },
  },
});

export const authActions = AuthSlice.actions;
export default AuthSlice;

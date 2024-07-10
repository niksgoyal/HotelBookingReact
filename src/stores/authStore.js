import { create } from "zustand";
import axios from "axios";
const authStore = create((set) => ({
  loggedIn: null,
  loginForm: {
    email: "",
    password: "",
  },
  signupForm: {
    email: "",
    password: "",
  },

  updateLoginForm: (event) => {
    const { name, value } = event.target;
    const { loginForm } = authStore.getState();
    set((state) => {
      return {
        loginForm: {
          ...state.loginForm,
          [name]: value,
        },
      };
    });
  },
  login: async (event) => {
    const { loginForm } = authStore.getState();
    try {
      await axios.post("/login", loginForm, {
        withCredentials: true,
      });
      set({
        loggedIn: true,
        loginForm: {
          email: "",
          password: "",
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  checkAuth: async () => {
    try {
      await axios.get("/check-auth");
      set({ loggedIn: true });
    } catch (error) {
      set({ loggedIn: false });
      console.log(error);
    }
  },
  updateSignupForm: (event) => {
    const { name, value } = event.target;
    const { loginForm } = authStore.getState();
    set((state) => {
      return {
        signupForm: {
          ...state.signupForm,
          [name]: value,
        },
      };
    });
  },
  signup: async () => {
    const { signupForm } = authStore.getState();
    try {
      const res = await axios.post("/signup", signupForm, {
        withCredentials: true,
      });
      set({
        signupForm: {
          email: "",
          password: "",
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  },
  logout: async () => {
    await axios.get("/logout");
    set({
      loggedIn: false,
    });
  },
}));
export default authStore;

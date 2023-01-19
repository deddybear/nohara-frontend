import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import axios from "axios";
import config from "../lib/axios.config";

const AuthContext = createContext();

export const AuthProvider = ({ children, userData }) => {
  const [user, setUser] = useLocalStorage("user", userData);
  const BASE_URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const login = async (data) => {
    try {
      await axios
        .post(`${BASE_URL}/users/login`, data, {
          headers: config.headers_json,
        })
        .then((res) => {
          // console.log(res.data.result);
          //* get and set data user
          setUser(res.data.result);
          return user;
        })
        .catch((err) => {
          if (err.response) {
            throw new Error(err.response.data.message);
          }

          throw new Error(err.message);
        });
    } catch (err) {
      throw err;
    }
  };

  const logout = () => {
    setUser(null);
    // redirect("/login");
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

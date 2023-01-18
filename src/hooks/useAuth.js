import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import axios from "axios";
import config from "../lib/axios.config";
import Swal from "sweetalert2";

const AuthContext = createContext();

export const AuthProvider = ({ children, userData }) => {
  const [user, setUser] = useLocalStorage("user", userData);
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_API_URL;


  const login = async (data) => {

    await axios
      .post(`${BASE_URL}/users/login`, data, {
        headers: config.headers_json,
      })
      .then((res) => {
        //* get and set data user
        setUser(res.data.data.user)
      }).catch((res) => {
        Swal.fire({
            icon: "error",
            title: 'Oops... ada Kesalahan Server',
            text: `${res.data.message}`
          });
      });

    navigate("/dashboard/", { replace: true });
  };

  const logout = () => {
    setUser(null);
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

import { useState } from "react";
import { createContext } from "react";
import authApi from "../apis/auth-api";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../utils/local-storage";
import { useEffect } from "react";
import userApi from "../apis/auth-api";

export const AuthContext = createContext();

// 1. fetch on render : fetch after first render
// 2. fetch then render : promise all feature
// 3. render as you fetch eg. react-query swr, react version 19 use(promise)

export default function AuthContextProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const [isAuthUserLoading, setIsAuthUserLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (getAccessToken()) {
          // setIsAuthUserLoading(true)
          const res = await authApi.getAuthUser();
          setAuthUser(res.data.user);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsAuthUserLoading(false);
      }
    };
    fetchUser();
  }, []);

  const login = async (credentials) => {
    const res = await authApi.login(credentials);
    setAccessToken(res.data.accessToken);
    // get data of getAuthUser
    const resGetAuthUser = await authApi.getAuthUser();
    setAuthUser(resGetAuthUser.data.user);
    // console.log(resGetAuthUser.data.user);
    const resGetIsAdmin = await authApi.getAuthUser();

    console.log(resGetIsAdmin);
    setIsAdmin(resGetIsAdmin.data.isAdmin);
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };

  const updateAuthUser = async (formData) => {
    const res = await userApi.uploadUserImage(formData);
    //{ res.data  คือ สิ่งที่โชว์ใน Postman}

    setAuthUser((prev) => ({ ...prev, ...res.data }));
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        authUser,
        isAuthUserLoading,
        updateAuthUser,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

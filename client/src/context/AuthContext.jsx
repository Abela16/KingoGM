"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import api, { setAuthToken } from "@/lib/api";

const AuthContext = createContext(null);

const getStoredSession = () => {
  if (typeof window === "undefined") {
    return { storedUser: null, storedToken: null };
  }

  const storedToken = localStorage.getItem("kingogm_token");
  const storedUserValue = localStorage.getItem("kingogm_user");

  if (!storedToken || !storedUserValue) {
    return { storedUser: null, storedToken: null };
  }

  try {
    return {
      storedToken,
      storedUser: JSON.parse(storedUserValue),
    };
  } catch {
    localStorage.removeItem("kingogm_token");
    localStorage.removeItem("kingogm_user");
    return { storedUser: null, storedToken: null };
  }
};

export function AuthProvider({ children }) {
  const [{ storedUser, storedToken }] = useState(getStoredSession);
  const [user, setUser] = useState(storedUser);
  const [token, setToken] = useState(storedToken);
  const [loading] = useState(false);

  useEffect(() => {
    setAuthToken(token);
  }, [token]);

  const saveSession = useCallback(({ token: nextToken, user: nextUser }) => {
    localStorage.setItem("kingogm_token", nextToken);
    localStorage.setItem("kingogm_user", JSON.stringify(nextUser));
    setAuthToken(nextToken);
    setToken(nextToken);
    setUser(nextUser);
  }, []);

  const register = useCallback(async (payload) => {
    const { data } = await api.post("/users/register", payload);
    saveSession(data);
    return data;
  }, [saveSession]);

  const login = useCallback(async (payload) => {
    const { data } = await api.post("/users/login", payload);
    saveSession(data);
    return data;
  }, [saveSession]);

  const refreshProfile = useCallback(async () => {
    const { data } = await api.get("/users/profile");
    localStorage.setItem("kingogm_user", JSON.stringify(data.user));
    setUser(data.user);
    return data.user;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("kingogm_token");
    localStorage.removeItem("kingogm_user");
    setAuthToken(null);
    setToken(null);
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      token,
      loading,
      isAuthenticated: Boolean(token && user),
      register,
      login,
      logout,
      refreshProfile,
    }),
    [user, token, loading, register, login, logout, refreshProfile]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}

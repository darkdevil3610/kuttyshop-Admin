/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
import { useApolloClient, useQuery } from '@apollo/client';
import React, {
  useContext, createContext, useState, useEffect,
} from 'react';
import { QUERY_ADMINDATA } from '../Operations/query';
import { LOGIN_ADMIN } from '../Operations/mutation';

const adminContext = createContext();

export const useAdmin = () => {
  const context = useContext(adminContext);
  if (!context) throw new Error('context not found');
  return context;
};

export function AdminProvider({ children }) {
  const [token, setToken] = useState();
  const [admin, setAdmin] = useState();
  const client = useApolloClient();
  const { loading, data, refetch } = useQuery(QUERY_ADMINDATA);

  const login = async ({ username, password }) => {
    try {
      const tk = await client.mutate({
        mutation: LOGIN_ADMIN,
        variables: {
          username,
          password,
        },
      });
      console.log(tk);
      if (tk) {
        setToken(tk.data.loginAdmin.value);
      }
      location.reload();
    } catch (err) {
      throw new Error('Wrong credentials');
    }
  };

  useEffect(() => {
    if (data?.findAdminData) {
      setAdmin(data.findAdminData);
    }
  }, [data]);

  useEffect(() => {
    if (token) {
      localStorage.setItem('admin-login-token', token);
    }
  }, [token]);

  useEffect(() => {
    if (localStorage.getItem('admin-login-token')) refetch();
  }, []);

  const isLoged = () => !!admin;

  const logout = () => {
    localStorage.clear();
    client.clearStore();
    location.reload();
  };

  return (
    <adminContext.Provider
      value={{
        admin,
        loading,
        login,
        logout,
        isLoged,
        refetch,
      }}
    >
      {children}
    </adminContext.Provider>
  );
}

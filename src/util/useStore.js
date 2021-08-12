import React from 'react';
import { storeInstance } from "../stores/appstate";
import { useLocalObservable } from "mobx-react";

const storeContext = React.createContext(null);
const store = storeInstance;

export const StoreProvider = ({ children }) => {
  const localStore = useLocalObservable(() => {
    return store;
  });
  return <storeContext.Provider value={localStore}>{children}</storeContext.Provider>
};

export const useStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};
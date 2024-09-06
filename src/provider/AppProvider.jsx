 import { Provider } from "react-redux";
import {store} from "@app";
import AppContext from "../provider/AppContext";
import { router } from "@router";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import MyAbout from "../pages/about/About";


const ContextProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logOut = () => {
    console.log("User is loggin out.....");
    setIsLoggedIn(false);
  };

  const logIn = () => {
    console.log("User is loggin out.....");
    setIsLoggedIn(false);
  };



  return (
    <AppContext.Provider
    value={
      {
        isLoggedIn: isLoggedIn,
        logOut: logOut,
        logIn: logIn,
      }
    }
    
    >
       {children} 
      <MyAbout/>
    </AppContext.Provider>
  );
};

export default ContextProvider;

export const AppProvider = () => {
  <Provider store={store}>
    <ContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
  </Provider>;
};

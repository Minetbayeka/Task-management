 import { Provider } from "react-redux";
import {store} from "@app";
import AppContext from "../provider/AppContext";
import { router } from "@router";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import MyAbout from "../pages/about/About";


const ContextProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const ButtonIn = () => {
   console.log("user just click the button")
    setIsLoggedIn(true)
 }

const userAuth = {
    isLoggedIn,
    setIsLoggedIn,
    ButtonIn
}

  return (
    <AppContext.Provider
    value={userAuth}
    //   value={{
    //     isLoggedIn: isLoggedIn,
    //     ButtonIn: ButtonIn
    //   }}
    >
       {children} 
      <MyAbout/>
    </AppContext.Provider>
  );
};

export default ContextProvider;

// export const AppProvider = () => {
//   <Provider store={store}>
//     <ContextProvider>
//       <RouterProvider router={router}></RouterProvider>
//     </ContextProvider>
//   </Provider>;
// };

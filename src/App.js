import React, { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Background from "./components/layout/Background";
import LogStatusPopUp from "./components/layout/LogStatusPopUp";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import ShowJobs from "./pages/ShowJobs";
import StoreContext from "./store/context-store";

const loggedInPopUp = {
  title: "Login",
  text: "You have succesfully logged in",
};

const loggedOutPopUp = {
  title: "Logout",
  text: "You have succesfully logged out",
};

const App = () => {
  const store = useContext(StoreContext);
  const loginState = store.isLoggedIn;
  const [showPopUp, setShowPopUp] = useState(false);
  const [appInitialized, setAppInitialized] = useState(false);

  let popUpMessage = loginState ? loggedInPopUp : loggedOutPopUp;

  useEffect(() => {
    let x = setTimeout(() => {
      setAppInitialized(true);
    }, 3000);

    if (appInitialized) {
      setShowPopUp(true);
      let hidePopUp = setTimeout(() => {
        setShowPopUp(false);
      }, 5000);
    }

    return () => {
      clearTimeout(x);
    };
  }, [loginState]);

  console.log({ appInitialized });

  return (
    <>
      <Background />
      <Header />
      {showPopUp && (
        <LogStatusPopUp
          title={popUpMessage.title}
          text={popUpMessage.text}
          close={() => setShowPopUp(false)}
        />
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/showJobs" element={<ShowJobs />} />
      </Routes>
    </>
  );
};

export default App;

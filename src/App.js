import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();
  const navigate = useNavigate();

  let popUpMessage = loginState ? loggedInPopUp : loggedOutPopUp;

  useEffect(() => {
    let x = setTimeout(() => {
      setAppInitialized(true);
    }, 3000);

    if (appInitialized) {
      setShowPopUp(true);
      setTimeout(() => {
        setShowPopUp(false);
      }, 5000);
    }

    return () => {
      clearTimeout(x);
    };
  }, [loginState]);

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname.toLocaleLowerCase() === "/showjobs" && !loginState) {
      navigate("/login");
    }
  }, [location]);

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

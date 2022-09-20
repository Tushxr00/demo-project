import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Background from "./components/layout/Background";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import ShowJobs from "./pages/ShowJobs";
import StoreContext from "./store/context-store";

const App = () => {
  const store = useContext(StoreContext);
  const loginState = store.isLoggedIn;

  return (
    <>
      <Background />
      <Header />
      {/* <button
        onClick={() => {
          store.onLogin();
        }}
      >
        login
      </button>
      <br />
      <button
        onClick={() => {
          store.onLogout();
        }}
      >
        logout
      </button>
      <p>{`${loginState}`}</p> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/showJobs" element={<ShowJobs />} />
      </Routes>
    </>
  );
};

export default App;

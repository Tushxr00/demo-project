import React, { useState, useEffect } from "react";

const StoreContext = React.createContext({
  isLoggedIn: false,
  isModal: false,
  jobId: "",
  showModal: (jobId) => {},
  hideModal: () => {},
  onLogout: () => {},
  onLogin: () => {},
});

export const StoreContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [jobId, setJobId] = useState("");
  useEffect(() => {
    const isToken = localStorage.getItem("token");
    if (isToken) setIsLoggedIn(true);
  }, []);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const showModalHandler = (id) => {
    setJobId(id);
    setIsModal(true);
  };

  const hideModalHandler = () => {
    setJobId("");
    setIsModal(false);
  };

  return (
    <StoreContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        isModal: isModal,
        jobId: jobId,
        showModal: showModalHandler,
        hideModal: hideModalHandler,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContext;

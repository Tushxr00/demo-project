import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StoreContext = React.createContext({
  isLoggedIn: false,
  isModal: false,
  jobId: "",
  email: "",
  onLogout: () => {},
  onLogin: () => {},
  showModal: (jobId) => {},
  hideModal: () => {},
});

export const StoreContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [jobId, setJobId] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isToken = localStorage.getItem("token");
    if (isToken) {
      setIsLoggedIn(true);
      const emailId = localStorage.getItem("email");
      setEmail(emailId);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    setEmail("");
    navigate("/");
  };

  const loginHandler = (emailId) => {
    setEmail(emailId);
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
        email: email,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        showModal: showModalHandler,
        hideModal: hideModalHandler,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContext;

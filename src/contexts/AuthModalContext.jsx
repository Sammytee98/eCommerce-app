import { createContext, useContext, useState } from "react";

// Create the context object
const AuthModalContext = createContext();

export const AuthModalProvider = ({ children }) => {
  // Controls whether the modal is open
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Tracks current auth mode: 'login' or 'signup'
  const [authMode, setAuthMode] = useState("login");

  // Opens the modal and sets the mode
  const openModal = (mode = "login") => {
    setAuthMode(mode);
    setIsModalOpen(true);
  };

  // Closes the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AuthModalContext.Provider
      value={{ isModalOpen, authMode, openModal, closeModal, setAuthMode }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};

// Custom hook to consume auth modal context
export const useAuthModal = () => useContext(AuthModalContext);

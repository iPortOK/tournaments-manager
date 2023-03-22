import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user') || 'null'));

  const login = () => {
    setCurrentUser({ 
    id: 1,
    name: 'John Doe',
    profilePicurl: 'https://images2.alphacoders.com/104/1048461.jpg'});
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; //Hook built in fuction we can use
import './SignIn.css'; 

const SignIn = () => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    getLocalStorage();
  }, []); //EMPTY Dependecy array

  const getLocalStorage = () => {
    let userNameFromLocalStorage = localStorage.getItem('userName');
    if (userNameFromLocalStorage && userNameFromLocalStorage.length > 0) {
      setUserName(userNameFromLocalStorage);
    }
    let isSignedInFromLocalStorage = localStorage.getItem('isSignedIn');
    if (isSignedInFromLocalStorage) {
      setIsSignedIn(true);
    }
  };

  const handleUserNameUpdate = (name) => {
    setUserName(name);
  };

  const setLocalStorage = () => {
    localStorage.setItem('userName', userName);
    localStorage.setItem('isSignedIn', true);
    setIsSignedIn(true);
    navigate('/home') // this "/" has to do with url
  };
  
  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <input 
        type="text" 
        value={userName} 
        onChange={(e) => handleUserNameUpdate(e.target.value)} 
        className="input"
        placeholder="Enter your name"
      />
      <button onClick={setLocalStorage} className="button">Sign In</button>
    </div>
  );
};

export default SignIn;
import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config.js";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  // Sign up/register a user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   verify user email address
  const verifyEmailAddress = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };

  // Login user
  const userLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update user profile name
  const updateUserProfileName = () => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: pName,
    });
  };

  // Change user password
  const changePassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // Log in with google provider
  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Log in with GitHub provider
  const gitHubLogIn = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  // Log out
  const logOut = () => {
    return signOut(auth);
  };

  // Set observer to watch user log in status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    // Unmounting the watcher
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    userLogIn,
    googleLogIn,
    gitHubLogIn,
    verifyEmailAddress,
    changePassword,
    updateUserProfileName,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

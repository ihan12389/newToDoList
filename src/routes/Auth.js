// 로그인 페이지
import React from "react";
import { authService, firebaseInstance } from "fbase";
import AuthForm from "components/AuthForm";

const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };

  return (
    <div className="authContainer">
      <AuthForm />
      <div className="authBtns">
        <button className="authBtn" onClick={onSocialClick} name="google">
          Continue with Google
        </button>
        <button className="authBtn" onClick={onSocialClick} name="github">
          Continue with Github
        </button>
      </div>
    </div>
  );
};

export default Auth;

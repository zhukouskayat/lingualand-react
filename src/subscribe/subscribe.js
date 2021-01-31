import React, { useState } from "react";

import "./subscribe.css";

import Popup from "../content/popup/popup";

import subIll from "../ill/subscribe.svg";

const Subscribe = () => {
  const [modalActive, setModalActive] = useState(false);
  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email cannot be empty");
  const [emailValid, setEmailValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError !== "") {
      setEmailValid(false);
    } else {
      setEmailValid(true);
      setEmail("");
      setModalActive(true);
    }
  }

  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Email is not valid");
    } else {
      setEmailError("");
    }
  };

  const blurHandler = (e) => {
    if (e.target.name === "email") {
      setEmailDirty(true);
    }
  };

  const popupSub = () => {
    return <h3 className="popupSub">Thanks for your subscription!</h3>;
  };

  return (
    <div className="subscribe">
      <h2>Subscribe!</h2>
      <form>
        <input
          onChange={(e) => emailHandler(e)}
          onBlur={(e) => blurHandler(e)}
          value={email}
          name="email"
          type="email"
          placeholder="Email..."
          className="emailSub"
        />
        {emailDirty && emailError && <div className="subError">{emailError}</div>}
        <div>
          <button disabled={emailValid} onClick={(e) => handleSubmit(e)} type="submit" className="buttonSub">
            Subscribe
          </button>
        </div>
      </form>
      <Popup
        active={modalActive}
        setActive={setModalActive}
        children={popupSub()}
        name={"Canсel"}
      />
      <img src={subIll} alt="illustration" className="subIll"></img>
    </div>
  );
};

export default Subscribe;

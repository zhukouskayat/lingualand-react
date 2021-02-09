import React, { useState } from "react";

import "./subscribe.css";

import Popup from "components/popup/popup";

const Subscribe = () => {
  const [modalActive, setModalActive] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError !== "" || email === "") {
      setModalActive(false);
    } else {
      setEmailValid(true);
      setEmail("");

      const userEmail = { email };
      fetch("http://localhost:4000/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userEmail),
      }).then(() => {
        console.log("New userEmail add!!!");
      });

      setModalActive(true);
      setEmailValid(false);
    }
  };

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

  const popupSub = () => {
    return <h3 className="popupSub">Thanks for your subscription!</h3>;
  };

  return (
    <div className="subscribe">
      <h2>Subscribe!</h2>
      <form>
        <div className="subscribeForm">
          <input
            onChange={(e) => emailHandler(e)}
            value={email}
            name="email"
            type="email"
            placeholder="Email..."
            className="emailSub"
          />
          {emailError && <div className="subError">{emailError}</div>}
          <div>
            <button
              disabled={emailValid}
              onClick={(e) => handleSubmit(e)}
              type="submit"
              className="buttonSub"
            >
              Subscribe
            </button>
          </div>
        </div>
      </form>
      <Popup
        active={modalActive}
        setActive={setModalActive}
        children={popupSub()}
        name={"Thanks"}
      />
    </div>
  );
};

export default Subscribe;

/* eslint-disable default-case */
import React, { useState } from "react";

import "./request.css";

import icon from "illustrations/request.svg";

import Popup from "components/popup/popup";

const RequestCallBack = () => {
  const [popupActive, setPopupActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPopupActive(true);
  };

  const popupRequest = () => {
    return (
      <div className="reqContentPopup">
        <h3 className="popupReq">Request call back!</h3>
        <form>
          <input
            type="text"
            name="name"
            className="reqInput"
            placeholder="Name"
          ></input>
          <input
            type="email"
            name="email"
            className="reqInput"
            placeholder="Email"
          ></input>
          <input
            type="text"
            name="phone"
            className="reqInput"
            placeholder="Phone number"
          ></input>
          <div className="reqButton">
            <button type="button" id="submitButtonRequest">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div className="request">
      <form>
        <button
          type="button"
          className="requestButton"
          onClick={(e) => handleSubmit(e)}
        >
          <img className="icon" src={icon} alt="logo" />
        </button>
      </form>
      <Popup
        active={popupActive}
        setActive={setPopupActive}
        children={popupRequest()}
        name={"Cancel"}
      />
    </div>
  );
};

export default RequestCallBack;

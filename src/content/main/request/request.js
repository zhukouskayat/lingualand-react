import React from "react";

import "./request.css";

import icon from "../../../ill/request.svg";

const RequestCallBack = () => (
  <form>
    <button type="button" className="request">
    <img className="icon" src={icon} alt="logo" />
    </button>
  </form>
);

export default RequestCallBack;

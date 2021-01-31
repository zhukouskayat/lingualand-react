import React, { useState } from "react";

import "./subscribe.css";

import Popup from "../popup/popup";

const Subscribe = () => {
  const [modalActive, setModalActive] = useState(false);
  const [text, setText] = useState("");

  function handleSubmit(event){
    event.preventDefault();

    const emailValue = text;
  
    if (emailValue !== "") {
      setModalActive(true);
      setText("")
    } 
  }

  return (
    <div className="subscribe">
      <h2>Subscribe!</h2>
      <form>
        <input type="email" placeholder="Email..." className="emailSub" value={text} onChange={(event) => setText(event.target.value)}/>
        <div>
        <button type="submit" className="buttonSub" onClick={(event) => handleSubmit(event)}>
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
    </div>
  );
};

const popupSub = () => {
  return (
      <h3 className="popupSub" >Thanks for your subscription!</h3>
  );
};

export default Subscribe;

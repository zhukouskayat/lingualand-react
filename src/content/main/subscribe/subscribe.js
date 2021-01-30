import React, {useState} from "react";

import "./subscribe.css";

import Popup from "../popup/popup"

const Subscribe = () => {

  const[modalActive, setModalActive] = useState(false);

  return (
    <div >
    <h2>
      Subscribe!
    </h2>
    <form>
    <input type="email" placeholder="Email..." className="email" />
    <button type="button" onClick={() => setModalActive(true)}>
      Subscribe
    </button>
    </form>
    <Popup  active={modalActive} setActive={setModalActive} contentBlock={popupSub()} />
  </div>
  )
  }

  const popupSub = () => {
    return <div>Thanks for your subscription!</div>
    }

export default Subscribe;

import React from "react";

import "./popup.css";

const Popup = ({ active, setActive, children, name }) => {
  return (
    <div className={active ? "popup active" : "popup"}>
      <div className={active ? "popupContent active" : "popupContent"}>
        {children}
        <div className="popupButton">
        <form>
          <button className="buttonP" type="button" onClick={() => setActive(false)}>
            {name}
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;

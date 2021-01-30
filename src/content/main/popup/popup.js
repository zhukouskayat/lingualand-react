import React from "react";

import "./popup.css";

const Popup = ({ active, setActive, contentBlock }) => {

  return (
    <div className={active ? "popup active" : "popup"} onClick={() => setActive(false)}>
      <div className="popupContent" onClick={(event) => event.stopPropagation}>
          {contentBlock}
      </div>
    </div>
  );
};

export default Popup;

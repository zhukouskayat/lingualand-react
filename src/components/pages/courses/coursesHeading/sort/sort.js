import React, { useState, useEffect, useRef } from "react";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./sort.css";

function Sort({ items }) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const sortRef = useRef();
  const activeLabel = items[activeItem];

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  const onSelectItem = (index) => {
    setActiveItem(index);
    setVisiblePopup(false);
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sortLabel">
        <span className="sortBy">Sort by:</span>
        <span onClick={toggleVisiblePopup} className="sortActiveLabel">
          {activeLabel}
        </span>
        <FontAwesomeIcon
          icon={faAngleDown}
          onClick={toggleVisiblePopup}
          className={visiblePopup ? "faAngleDownRotated" : "faAngleDown"}
        />
      </div>
      {visiblePopup && (
        <div className="sortPopup">
          <ul>
            {items &&
              items.map((name, i) => (
                <li
                  onClick={() => onSelectItem(i)}
                  className={activeItem === i ? "active" : ""}
                  key={`${name}${i}`}
                >
                  {name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;

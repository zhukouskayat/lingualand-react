import React, { useState } from "react";

import "./filter.css";

function Filter({ items }) {
  const [activeItem, setActiveItem] = useState(null);

  const handleSelect = (i, event) => {
    event.preventDefault(event);
    setActiveItem(i);
  };

  return (
    <div>
      <form className="filter">
        <button
          type="button"
          className={activeItem === null ? "activeFilter" : "filterItem"}
          onClick={(event) => handleSelect(null, event)}
        >
          All
        </button>
        {items &&
          items.map((name, i) => (
            <button
              key={`${i}_${name}`}
              className={activeItem === i ? "activeFilter" : "filterItem"}
              onClick={(event) => handleSelect(i, event)}
            >
              {name}
            </button>
          ))}
      </form>
    </div>
  );
}

export default Filter;

import React, { useState, useEffect } from "react";

import "./reviewItems.css";

function ReviewItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {

    fetch("http://localhost:4000/reviews",)
      .then((response) => response.json())
      .then((result) => {
        setItems(result);
      });
  }, []);

  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="reviewItem">
          <h3>
            {item.name}
          </h3>
          <p>
            {item.review}
          </p>
        </div>
      ))}
    </>
  );
}

export default ReviewItems;

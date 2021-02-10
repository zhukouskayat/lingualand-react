import React, { useState, useEffect } from "react";

import "./reviewItems.css";

function ReviewItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const abortCount = new AbortController();

    fetch("http://localhost:4000/reviews", { signal: abortCount.signal })
      .then((response) => response.json())
      .then((result) => {
        setItems(result);
      });
    return () => abortCount.abort();
  }, [items]);

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

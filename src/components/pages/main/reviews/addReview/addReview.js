import React, { useState } from "react";
import "./addReview.css";

function AddReview(props) {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = () => {
    const reviewData = { name, review };

    fetch("http://localhost:4000/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewData),
    }).then(() => {
      setName("");
      setReview("");
    });
  };

  const handleClear = (event) => {
    event.preventDefault();
    setName("");
    setReview("");
  }

  return (
    <section>
      <div className="addReview">
        <h2>
          Add review!
      </h2>
        <form onSubmit={handleSubmit}>
          <div className="nameReview">
            <input
              type="text"
              placeholder="Enter your name"
              required
              value={review}
              onChange={(event) => setReview(event.target.value)}
            />
            <textarea
              type="text"
              placeholder="Enter your review"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="reviewButtons">
            <button className="clear" type="button" onClick={handleClear} >
              Clear
            </button>
            <button className="send" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddReview;

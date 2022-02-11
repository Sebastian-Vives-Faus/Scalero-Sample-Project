import React, { useState } from "react";
import {
  ReviewCharacterCount,
  FlexSpacedBetween,
  ReviewInputWrapper,
} from "./UI/style";
import { Button } from "../../UI/GlobalStyle.js";

import "./UI/review_input.css";

export const ReviewInput = (props) => {
  const [review, setReview] = useState("");

  const changeHandler = (event) => {
    if (event.target.value.length <= 120) {
      setReview(event.target.value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (review.length < 10) {
      alert("Review must be longer than 10 characters.");
    } else {
      props.videogame.reviews.push(review);
      props.updateLocalStorage(props.videogame);
      setReview("");
      props.setView(true);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <ReviewInputWrapper>
          <textarea
            value={review}
            onChange={changeHandler}
            placeholder="Thoughts..."
            className="review_input"
          ></textarea>
          <FlexSpacedBetween>
            <ReviewCharacterCount>
              Characters remaining: {120 - review.length}
            </ReviewCharacterCount>
            <Button type="submit">Done</Button>
          </FlexSpacedBetween>
        </ReviewInputWrapper>
      </form>
    </div>
  );
};

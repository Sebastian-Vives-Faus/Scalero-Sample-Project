import React from "react";
import { Card, CardContainer, ReviewParagraph } from "./UI/style";

export const ReviewCard = (props) => {
  console.log(props);

  return (
    <CardContainer>
      <Card>
        <ReviewParagraph>"{props.review}"</ReviewParagraph>
      </Card>
    </CardContainer>
  );
};

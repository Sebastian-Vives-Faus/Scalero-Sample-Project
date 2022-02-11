import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 2px 16px;
  margin: 0.5em 0.5em 0.5em 0.5em;
  
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0px 4% 0px 4%;
`;

export const ReviewParagraph = styled.p`
  margin: unset;
  text-align: center;
  display: flex;
  align-self: center;
  font-style: italic;
  font-size: initial;

  @media (max-width: 768px) {
    font-size: large;
  }
`;

export const TextWrapper = styled.div`
  margin: 0px 10% 0px 10%;
  display: flex;
  justify-content: center;
  align-content: center;
  font-weight: 300;
`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-image: linear-gradient(
    to bottom,
    rgba(40, 44, 52, 0),
    rgba(195, 149, 255, 0.8) 150%
  );
  width: 255px;
  border-radius: 5px;
  min-height: 105px;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 5px;

  @media (max-width: 768px) {
    width: 370px;
  }

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(
      to bottom,
      rgba(40, 44, 52, 0),
      rgba(188, 137, 255, 1) 150%
    );
  }
`;

// Review

export const ReviewInputWrapper = styled.div`
  margin: 10px 10% 0px 10%;
`;

export const ReviewCharacterCount = styled.p`
  margin: unset;
  font-size: medium;
  color: #c395ff;
`;

export const FlexSpacedBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

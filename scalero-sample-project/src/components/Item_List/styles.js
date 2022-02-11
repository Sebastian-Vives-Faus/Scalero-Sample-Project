import styled from "styled-components";

export const WrapperToggleButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1em;
`;

export const ToggleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  border-radius: 1px;
  border: 0px;
  padding: 5px;
  background: rgba(195, 149, 255, 1);
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background: rgba(188, 137, 255, 1);
  }

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  flex-direction: column;
`;

export const CardContainer = styled.div`
  padding: 2px 16px;
  margin: 10px;
`;

export const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 250px;
  border-radius: 5px;
  height: 105px;
  border: solid 2px #c395ff;
  background-image: linear-gradient(
    to bottom,
    rgba(40, 44, 52, 0),
    rgba(195, 149, 255, 0.8) 150%
  );

  @media (max-width: 768px) {
    width: 370px;
  }

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    background-color: rgba(195, 149, 255, 0.6);
  }
`;

export const CardTitle = styled.p`
  margin: unset;
  font-weight: 300;
  font-size: 18px;

  @media (max-width: 768px) {
    font-weight: 500;
    font-size: 20px;
  }
`;

export const LikeDislikeWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  min-width: 150px;
  font-weight: 300;

  @media (max-width: 768px) {
    min-width: none;
  }
`;

export const LikeDislikeIcon = styled.div`
  color: white;
  margin: 0;
  transition: 0.2s;

  &:hover {
    color: #b57ffb;
    cursor: pointer;
  }
`;

export const LikeDislikeDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

import styled from "styled-components";

export const WrapperToggleButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ToggleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  border-radius: 1px;
  border: 0px;
  padding: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  flex-direction: column;
`;

export const CardContainer = styled.div`
  padding: 2px 16px;
`;

export const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: #c395ff;
  width: 250px;
  border-radius: 5px;
  height: 105px;

  @media (max-width: 768px) {
    width: 370px;
  }

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    background-color: #b57ffb;
  }
`;

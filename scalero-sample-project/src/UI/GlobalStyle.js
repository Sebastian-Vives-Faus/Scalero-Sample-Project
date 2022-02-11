import styled from "styled-components";

export const AppHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Divider = styled.hr`
  border: 0;
  border-top: 2px solid #c395ff;
  width: 80%;
  border-radius: 2px;
`;

export const TitleSpan = styled.span`
    color: #c395ff;
`;

export const Button = styled.button`
  background: rgba(195, 149, 255, 1);
  border-radius: 999px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  outline: 0 solid transparent;
  padding: 2px 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  border: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &:hover{
    background: rgba(188, 137, 255, 1);
  }
`;
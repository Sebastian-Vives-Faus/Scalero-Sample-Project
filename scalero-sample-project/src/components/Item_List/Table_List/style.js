import styled from "styled-components";

export const TableHeader = styled.thead`
  background-color: rgba(195, 149, 255, 1);
`;

export const TableRow = styled.tr`
  border-bottom: solid 1px rgba(195, 149, 255, 0.5);
  text-decoration: none;
  font-weight: 100;
  transition: 0.4s;

  &:hover {
    background-color: rgba(195, 149, 255, 0.6);
  }
`;

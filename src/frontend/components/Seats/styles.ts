import styled from "styled-components";

export const Seat = styled.div<{ $isTaken: boolean }>`
  border: 1px solid black;
  padding: 4px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  background-color: ${(props) => (props.$isTaken ? "red" : "white")};
`;

export const Row = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

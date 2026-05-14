import styled from "styled-components";

export const SuccessNotification = styled.div`
  background-color: green;
  border-radius: 4px;
  position: absolute;
  width: 200px;
  height: 40px;
  padding: 10px;
  top: 20px;
  right: 10px;
  z-index: 10;
  display: flex;
  align-items: center;
`;

export const DangerNotification = styled.div`
  background-color: red;
  border-radius: 4px;
  position: absolute;
  width: 200px;
  display: flex;
  align-items: center;
  height: 40px;
  padding: 10px;
  top: 20px;
  right: 10px;
  z-index: 10;
`;

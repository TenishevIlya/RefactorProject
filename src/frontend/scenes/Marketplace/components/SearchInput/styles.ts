import styled, { css } from "styled-components";
import { Input as BaseInput } from "antd";

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;

export const Input = styled(BaseInput)`
  width: 200px;
`;

import styled, { css } from "styled-components";

const GridLayout = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const LoadingLayout = css`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Container = styled.div<{ $isLoading: boolean }>`
  ${(props) => (props.$isLoading ? LoadingLayout : GridLayout)}
`;

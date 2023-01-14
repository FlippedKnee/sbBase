import styled from "styled-components";

type TExampleImage = {
  background?: string;
};

export const ExampleImageContainer = styled.div<TExampleImage>`
  background: ${({ background }) => background ?? "#1e1f22"};
  box-shadow: 6px 6px 12px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 4px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const ImageContainer = styled.div`
  border-radius: 16px;
  overflow: hidden;
`;

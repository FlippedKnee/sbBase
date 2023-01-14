import styled from "styled-components";

export const IconTextBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: ${(props) => props.theme.mediaQuery.mediaMinMedium}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

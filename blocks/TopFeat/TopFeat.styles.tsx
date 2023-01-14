import styled from "styled-components";

export const TopFeatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media (min-width: ${({ theme }) => theme.mediaQuery.mediaMinMedium}) {
    gap: 12px;
    max-width: 300px;
  }
`;

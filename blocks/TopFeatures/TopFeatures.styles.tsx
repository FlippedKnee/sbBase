import styled from "styled-components";

export const TopFeats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (min-width: ${({ theme }) => theme.mediaQuery.mediaMinMedium}) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 64px;
  }
`;

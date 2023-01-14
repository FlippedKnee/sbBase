import styled from "styled-components";

export const TimeLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: ${({ theme }) =>
      theme.mediaQuery?.mediaMinMedium}) {
    display: grid;
    grid-template-columns: 1fr 32px 1fr;
  }
`;

export const TimeLineContent = styled.div`
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

export const TimeLineSeparator = styled.div`
  width: 1px;
  height: 100%;
  background: #fff;
  align-self: center;
  justify-self: center;
`;

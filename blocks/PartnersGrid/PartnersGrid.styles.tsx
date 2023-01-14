import styled from "styled-components";

type TGrid = {
  ref?: any;
};

export const Grid = styled.div<TGrid>`
  display: flex;

  align-items: center;
  gap: 20px;
  width: 100%;
  align-content: center;
  overflow-x: auto;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
  max-width: 1400px;
  width: 100%;
  > * {
    flex: 15% !important;
    max-width: 200px;
    min-width: 140px;
    padding: 8px 16px !important;
    min-height: 72px !important;
    max-height: 72px !important;
  }
`;

export const Controller = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  width: 100%;
`;

export const ControllerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 20px;
  gap: 16px;
`;

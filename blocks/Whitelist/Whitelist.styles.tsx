import styled from "styled-components";

export const WLContainer = styled.div`
  border-radius: 16px;
  padding: 32px;
  min-height: 500px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  gap: 36px;
  align-items: center;
`;
type TButton = {
  background?: string;
  color?: string;
  borderColor?: string;
};

export const ButtonContainer = styled.div<TButton>`
  transition: opacity 300ms ease;
  cursor: pointer;
  border-radius: 8px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: ${({ background }) => background};
  padding: 8px 12px;
  color: ${({ color }) => color};
  /* margin: 16px 0; */
  ${({ borderColor }) =>
    borderColor &&
    borderColor?.length > 0 &&
    `border: 2px solid ${borderColor};`}
`;

export const ButtonIcon = styled.span`
  margin-left: 8px;
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const SocialButton = styled.div<TButton>`
  border-radius: 100%;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
`;

export const SocialButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
type TVerifyType = {
  color: string;
};

export const VerifyType = styled.div<TVerifyType>`
  color: ${({ color }) => color};
  font-size: 13px;
  padding: 8px;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 16px 1fr;
  gap: 8px;
  /* border: 1px solid rgba(146, 146, 146, 0.2); */
  /* background: #2c2c2c;
  background: linear-gradient(145deg, #18191c, #141517);
  box-shadow: 5px 5px 0px #121315, -5px -5px 0px #1a1b1f; */
`;

export const VerifiedText = styled.span`
  display: block;
  /* position: absolute;
  bottom: -20px; */
  color: #fff;
  font-size: 12px;
  font-weight: 300;
`;

export const VerifyBox = styled.div<{ background?: string }>`
  padding: 36px;
  border-radius: 28px;
  background: ${(props) => props.background ?? "#fff"};
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 450px;
  border: 1px solid black;
`;

export const Input = styled.textarea`
  outline: none;
  border: 1px solid #c6cdcd;
  padding: 10px 20px;
  background: #16171a;
  border-radius: 4px;
  color: #fff;
  width: 60%;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: grid;
  place-content: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background: #8b6e63;
  padding: 36px;
  border-radius: 24px;
  max-width: 375px;
  color: #fff;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ModalButtons = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
`;

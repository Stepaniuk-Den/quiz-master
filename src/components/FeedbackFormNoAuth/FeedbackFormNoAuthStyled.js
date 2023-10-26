import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const FormContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  margin-bottom: 155px;
  padding: 40px 20px;
  width: 335px;
  height: 503px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  border-radius: 20px;
  border: 1px rgba(244.37, 244.37, 244.37, 0.3) solid;
  background-color: rgba(255, 255, 255, 0.02);
  background-color: var(--white-background);

  @media (min-width: 768px) {
    width: 481px;
    height: 460px;
    margin-bottom: 170px;
    padding: 60px 80px;
  }
`;

export const FormTitle = styled.h2`
  color: #f4f4f4;
  font-size: 20px;
  font-family: "GilroyBold";
  font-weight: 700;
  line-height: 20px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;
export const NameInput = styled.input`
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 18px;
  border-radius: 30px;
  border: 1px rgba(244.37, 244.37, 244.37, 0.6) solid;
  background-color: transparent;
  margin-bottom: 20px;
  color: rgba(244.37, 244.37, 244.37, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.16px;
  font-family: "GilroyRegular";
`;

export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-bottom: 20px;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const TextRating = styled.h3`
  color: rgba(244.37, 244.37, 244.37, 0.6);
  font-size: 16px;
  font-family: "GilroyRegular";
  font-weight: 400;
  line-height: 16px;
`;
export const FormTextarea = styled.textarea`
  height: 100%;
  padding-top: 14px;
  padding-bottom: 140px;
  padding-left: 18px;
  padding-right: 18px;
  resize: none;
  border-radius: 15px;
  border: 1px rgba(244.37, 244.37, 244.37, 0.6) solid;
  background-color: transparent;
  color: rgba(244.37, 244.37, 244.37, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.16px;
  font-family: "GilroyRegular";

  @media (min-width: 768px) {
    font-size: 16px;
    padding-bottom: 57px;
  }
`;
export const SendBtn = styled.button`
  color: #f4f4f4;
  font-size: 14px;
  font-family: "GilroyBold";
  font-weight: 700;
  line-height: 16px;
  width: 100%;
  height: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #205bf1;
  border-radius: 30px;
  border: none;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
export const CloseBtnContainer = styled.div`
  position: absolute;
  top: 18px;
  right: 18px;
  @media (min-width: 768px) {
    top: 24px;
    right: 24px;
  }
`;
export const CloseBtn = styled(AiOutlineClose)`
  width: 20px;
  height: 20px;
  color: #f4f4f4;
`;

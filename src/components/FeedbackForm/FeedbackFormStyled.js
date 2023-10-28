import styled from "styled-components";

export const FormContainer = styled.div`
  box-sizing: border-box;
  margin-bottom: 219px;
  padding: 40px 20px;
  width: 335px;
  height: 383px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  border-radius: 20px;
  border: 1px rgba(244.37, 244.37, 244.37, 0.3) solid;
  background-color: rgba(255, 255, 255, 0.02);
  background-color: var(--white-background);

  @media (min-width: 768px) {
    width: 580px;
    height: 463px;
    margin-bottom: 81px;
    padding: 80px 100px;
  }
`;
export const FormWrapper = styled.div``;
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
  padding-top: 18px;
  padding-bottom: 133px;
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
    font-size: 15px;
    padding-bottom: 133px;
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

import styled from "styled-components";

export const QuizeBox = styled.div`
  width: 335px;
  background-color: var(--second-background);
  padding: 40px 20px;
  border-radius: 20px;
      text-align: center;
  @media (min-width: 768px) {
    width: 580px;
    background-color: var(--second-background);
    padding: 124px 130px;
    border-radius: 20px;
  }
`;

export const Title = styled.h2`
color: #F4F4F4;
font-size: 24px;
font-weight: 700;
line-height: 32px; 
letter-spacing: -0.24px;
margin-bottom:12px;
`

export const Category = styled.p`
color: rgba(244, 244, 244, 0.60);
font-size: 16px;
font-weight: 400;
letter-spacing: -0.16px;
margin-bottom: 32px;
`

export const InputName = styled.input`
width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 18px;
  border-radius: 30px;
  border: 1px solid rgba(244, 244, 244, 0.60);
  background: transparent;
  color: #F4F4F4;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 16px;


  &::placeholder {
    color: rgba(244, 244, 244, 0.40);
  }

  &:focus {
    outline: none;
    border: 1px solid rgba(244, 244, 244, 0.80);; 
    box-shadow: none;
  }
`;

export const ButtonStart = styled.button`
border-radius: 30px;
background: #205BF1;
padding: 16px;
width: 100%;
color: ${(props) => (props.disabled ? "rgba(244, 244, 244, 0.20)" : "#F4F4F4")};
font-size: 16px;
font-weight: 700;
`

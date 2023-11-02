import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 128px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const QuizeBox = styled.div`
  padding: 124px 130px;
  width: 580px;
  height: 448px;
  background-color: var(--second-background);
  border-radius: 20px;
  margin-bottom: 150px;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.01em;
  color: #f4f4f4;
  margin-bottom: 12px;
`;

export const SubTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.01em;
  color: rgba(244, 244, 244, 0.6);
  margin-bottom: 32px;
`;

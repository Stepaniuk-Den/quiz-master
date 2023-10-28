import styled from 'styled-components';

export const UserCard = styled.div`
  max-width: 292px;
  height: 420px;
  border-radius: 20px;
  background: var(--blue-background);
  padding: 32px 32px 0 32px;
  text-align: center;
  margin: auto;
  margin-bottom:80px;
  @media (min-width: 768px) {
    max-width: 100%;
    margin-bottom:24px;
  }
  @media (min-width: 1440px) {
    width: 292px;
    margin: 0;
margin-bottom:124px;
  }
`;

export const UserAvatar = styled.img`
width:100px;
height:100px;
display: inline-block;
margin-bottom: 8px;
`
export const UserName = styled.p`
color: var(--text-color-100);
font-size: 24px;
font-weight: 700;
line-height: 32px; 
margin-bottom: 32px;
`
export const TitleText = styled.h4`
color: rgba(244, 244, 244, 0.60);
font-weight: 400;
margin-bottom: 10px;
`

export const InfoText = styled.p`
color: var(--text-color-100);
font-size: 24px;
font-weight: 700;
line-height: 32px; 
`

export const Line = styled.div`
border-top: 1px solid rgba(244, 244, 244, 0.20);;
width: 100%; 
margin: 16px 0;
`;
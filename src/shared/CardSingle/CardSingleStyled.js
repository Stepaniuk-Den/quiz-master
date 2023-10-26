import styled from "styled-components";
import { FiUsers, FiHeart } from "react-icons/fi";

export const CardWrapper = styled.li`
  /* outline: 1px solid orange; */
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 335px;
  height: 364px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.02);
  background-color: var(--white-background);
  /* background-color: rgba(0, 0, 0, 0.8); */

  @media (min-width: 768px) {
    width: 340px;
  }

  @media (min-width: 1440px) {
    width: 292px;
    height: 364px;
  }
`;
export const TopIconBox = styled.div`
  /* outline: 1px solid black; */
  width: 100%;
  height: 20px;
  margin-bottom: 59px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (min-width: 768px) {
    margin-bottom: 56px;
  }
`;
export const IconUsersWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const FiUsersS = styled(FiUsers)`
  width: 20px;
  height: 20px;
  stroke: #f4f4f4;
`;

export const UsersNumber = styled.p`
  margin: 0;
  padding: 0;
  display: block;
  /* color: #f4f4f4; */
  color: var(--text-color-100);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const FiHeartS = styled(FiHeart)`
  width: 20px;
  height: 20px;
  /* stroke: #f4f4f4; */
  stroke: var(--text-color-100);
  // and add class for fill//
  /* fill: red; */
`;

export const TextRatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const ThemesS = styled.h4`
  margin: 0;
  padding: 0;
  /* color: rgba(244, 244, 244, 0.5); */
  color: var(--text-color-50);
  /* font-family: Gilroy; */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29;
  letter-spacing: -0.14px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.16px;
  }
`;

export const GeneralScienceS = styled.h3`
  margin: 0;
  padding: 0;
  /* color: #f4f4f4; */
  color: var(--text-color-100);
  /* font-family: Gilroy; */
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }

`;
export const RatingS = styled.div`
  margin: 0;
  padding: 0;
  /* color: #f4f4f4; */
  color: var(--star-color-100);
  /* color: var(--star-color-8); */
`;
